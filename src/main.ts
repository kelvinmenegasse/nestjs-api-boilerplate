import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import { AllExceptionFilter } from './infraestructure/filters';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  // * CORS
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
  });
  app.enableCors();

  const configService = app.get<ConfigService>(ConfigService);

  // * GLOBAL PREFIX
  app.setGlobalPrefix(configService.get('app.apiPrefix'), {
    exclude: ['/'],
  });

  // * VALIDATION PIPE
  app.useGlobalPipes(new ValidationPipe());

  // * EXCEPTION FILTER
  app.useGlobalFilters(new AllExceptionFilter());

  // * All IP addresses on the local machine
  await app.listen(configService.get('app.port'), '0.0.0.0');

  // * get date and time
  const date = new Date().toLocaleString(<string>configService.get('LOCALE'), {
    timeZone: <string>configService.get('app.TZ'),
  });

  console.log(
    `Server ${configService.get(
      'app.apiPrefix',
    )} is running on port ${configService.get('app.port')} | ${date}`,
  );
}

bootstrap();
