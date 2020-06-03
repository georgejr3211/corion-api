import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getInfo() {
    return {
      apiName: 'trocaqui-api',
      environment: process.env.NODE_ENV,
      now: new Date(),
      version: '1.0.1',
    };
  }
}
