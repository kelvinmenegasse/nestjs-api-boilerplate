import { HttpStatus } from '@nestjs/common';
import { DefaultException } from './http.error';

export const ServerError = new DefaultException(
  {
    name: 'SERVER_ERROR',
    message: 'Erro ao processar a requisição',
  },
  HttpStatus.INTERNAL_SERVER_ERROR,
);
