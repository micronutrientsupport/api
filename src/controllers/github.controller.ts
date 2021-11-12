// Uncomment these imports to begin using these cool features!

import {service} from '@loopback/core';
import {get, param, post, requestBody} from '@loopback/rest';
import {Queue} from 'bull';
import {FeedbackQueueProvider} from '../services/feedbackQueue.service';
import {GithubProvider, GithubService} from '../services/github.service';

// import {inject} from '@loopback/core';

export class GithubController {
  constructor(
    @service(GithubProvider)
    public githubService: GithubService,
    @service(FeedbackQueueProvider)
    public feedbackQueue: Queue,
  ) {}

  @post('/feedback')
  async createGitHubFile(
    @requestBody({
      content: {
        'application/json': {
          schema: {
            title: 'FeedbackBody',
            required: ['rating', 'comment', 'screenshot'],
            type: 'object',
            properties: {
              rating: {
                description: 'Star rating from 0 to 5',
                type: 'number',
              },
              comment: {
                description: 'Free text comment',
                type: 'string',
              },
              screenshot: {
                description: 'Base64 encoded file contents',
                type: 'string',
              },
              page: {
                description: 'The page on which the form was submitted',
                type: 'string',
              },
              broswer: {
                description: 'The name and version of the browser used',
                type: 'string',
              },
              os: {
                description: 'The name of the operating system',
                type: 'string',
              },
              width: {
                description: 'The width of the browser window',
                type: 'number',
              },
              height: {
                description: 'The height of the browser window',
                type: 'number',
              },
            },
          },
        },
      },
    })
    body: {
      rating: number;
      comment: string;
      screenshot: string;
      page: string;
      browser: string;
      os: string;
      width: number;
      height: number;
    },
  ): Promise<boolean> {
    const job = await this.feedbackQueue.add(body);
    console.log(`Queued job ${job.id}`);
    return Promise.resolve(true);
  }

  @get('/user')
  async getGitHubUser(
    @param.query.string('user', {
      description: 'GitHub username',
      required: true,
      example: 'bgsandan',
    })
    user: string,
  ): Promise<object> {
    const out: any = await this.githubService.getUser(user);
    console.log(out.headers);
    return out.body;
  }
}
