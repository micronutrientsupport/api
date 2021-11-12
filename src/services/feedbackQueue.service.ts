import {Provider, service} from '@loopback/core';
import Bull, {Job, Queue} from 'bull';
import sharp from 'sharp';
import {v4 as uuidv4} from 'uuid';
import {GithubProvider, GithubService} from '.';

export class FeedbackProcessor {
  private scaleImage(b64data: string, maxWidth: number) {
    console.log('About to shrink img to', maxWidth);
    const parts = b64data.split(';');
    const mimType = parts[0].split(':')[1];
    const imageData = parts[1].split(',')[1];
    const img = new Buffer(imageData, 'base64');
    return sharp(img)
      .resize({width: maxWidth, fit: 'inside', withoutEnlargement: true})
      .toBuffer()
      .then(resizedImageBuffer => {
        const resizedImageData = resizedImageBuffer.toString('base64');
        const resizedBase64 = `data:${mimType};base64,${resizedImageData}`;
        return resizedBase64;
      });
  }

  constructor(public githubService: GithubService) {}

  async process(feedbackJob: Job): Promise<void> {
    console.log(`Processing Feedback Job ${feedbackJob.id}`);

    const uuid = uuidv4();
    const data: {
      rating: number;
      comment: string;
      screenshot: string;
      page: string;
      browser: string;
      os: string;
      width: number;
      height: number;
    } = feedbackJob.data;

    let pageSlug = data.page.substring(data.page.lastIndexOf('/') + 1);
    if (pageSlug.includes('?')) {
      pageSlug = pageSlug.substring(0, pageSlug.indexOf('?'));
    }
    if (pageSlug.length < 1) {
      pageSlug = 'home';
    }

    try {
      const scaledImage = await this.scaleImage(data.screenshot, 800);
      console.log('scaledImage');
      const image = await this.githubService.commitFile(
        process.env.GITHUB_ORGANISATION ?? '',
        process.env.GITHUB_IMAGE_REPOSITORY ?? '',
        `screenshots/${uuid}.png`,
        scaledImage.replace('data:image/png;base64,', ''),
        `Add screenshot ${uuid}.png`,
      );

      const issue = await this.githubService.createIssue(
        process.env.GITHUB_ORGANISATION ?? '',
        process.env.GITHUB_ISSUE_REPOSITORY ?? '',
        `New Feedback: ${data.comment.substring(0, 30)}...`,
        `# New feedback report from tool interface

  * **Reported**: ${new Date().toUTCString()}
  * **Page**: [${data.page}](${data.page})
  * **Browser**: ${data.browser}
  * **OS**: ${data.os}
  * **Screen**: ${data.width}px / ${data.height} px

  ## Comment

  ${data.comment}

  ## Rating

  ${data.rating}/5

  ## Screenshot

  ![Screenshot of the tool interface](${image.content.download_url})
      `,
        [pageSlug],
      );

      console.log(`Created ${issue.html_url}`);
      //return issue;
    } catch (e) {
      console.error(e);
    }
  }
}

export class FeedbackQueueProvider implements Provider<Queue> {
  constructor(
    @service(GithubProvider)
    public githubService: GithubService,
  ) {}

  createConsumer(): (feedbackJob: Job) => Promise<void> {
    return (feedbackJob: Job) => {
      const feedbackProcessor: FeedbackProcessor = new FeedbackProcessor(
        this.githubService,
      );
      return feedbackProcessor.process(feedbackJob);
    };
  }

  async value() {
    const queue = new Bull('GitHubQueue', {
      redis: {
        port: (process.env.REDIS_PORT as unknown) as number,
        host: process.env.REDIS_HOST,
      },
    });

    queue.process(this.createConsumer());

    return queue;
  }
}
