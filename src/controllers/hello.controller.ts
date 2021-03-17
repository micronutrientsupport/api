// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/core';

import {get} from '@loopback/rest';

export class HelloController {
  @get('/hello', {
    summary: 'Hello',
    responses: {
      '200': 'Thing',
    },
  })
  hello(): string {
    return 'Hello world!';
  }
}
