import { HttpException, HttpStatus } from '@nestjs/common';
import { IDefaultError } from '../../shared/errors';

export interface IDefaultException {
  name: string;
  message: string | unknown;
  statusCode?: number;
}

export class DefaultException
  extends HttpException
  implements IDefaultException
{
  constructor(error: IDefaultError, statusCode?: HttpStatus) {
    super(error.message, statusCode | HttpStatus.UNPROCESSABLE_ENTITY);
    this.name = error.name;
  }

  getName(): string {
    return this.name.toUpperCase();
  }

  getJson(): IDefaultException {
    return {
      name: this.getName(),
      message: this.getResponse(),
      statusCode: this.getStatus(),
    };
  }
}
