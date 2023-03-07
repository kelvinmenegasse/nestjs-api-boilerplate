import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { RequestClientInfo } from '../types';

export const GetRequestClientInfo = createParamDecorator(
  (_: undefined, context: ExecutionContext): RequestClientInfo => {
    const request = context.switchToHttp().getRequest();
    return {
      host: request.headers.host || '',
      ip: request.ip || '',
      platform: request.headers['sec-ch-ua-platform'] || '',
      browserBrand: request.headers['sec-ch-ua'] || '',
      userAgent: request.headers['user-agent'] || '',
    };
  },
);
