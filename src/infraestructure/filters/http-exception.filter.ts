import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { IDefaultError } from 'src/shared/errors';
import { Either } from 'src/shared/utility-types';
@Catch()
export class AllExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let exceptionJson = exception;

    if (exception instanceof HttpException) {
      status = exception.getStatus();

      exceptionJson = exception.getResponse();
    }

    console.error(exception);

    const responseError: Either<IDefaultError, any> = {
      left: {
        statusCode: status,
        name: exception.name,
        message: exceptionJson.message,
      } as IDefaultError,
    };

    response.status(status).json(responseError);
  }
}
