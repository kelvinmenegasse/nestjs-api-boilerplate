import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { JwtPayload } from '../types/';

export const GetCurrentAccountId = createParamDecorator(
  (_: undefined, context: ExecutionContext): number => {
    const request = context.switchToHttp().getRequest();
    const user = request.user as JwtPayload;
    return user.sub;
  },
);
