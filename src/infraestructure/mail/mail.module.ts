import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as path from 'path';

@Module({
  imports: [
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        template: {
          dir: path.resolve(__dirname, '..', '..', 'public/templates/email'),
          adapter: new HandlebarsAdapter(),
          options: {
            extName: '.hbs',
            layoutsDir: path.resolve(
              __dirname,
              '..',
              '..',
              'public/templates/email',
            ),
            strict: false,
          },
        },
        transports: {
          primary: {
            secure: false,
            host: config.get('mailPrimary')['host'],
            port: config.get('mailPrimary')['port'],
            auth: {
              user: config.get('mailPrimary')['user'],
              pass: config.get('mailPrimary')['pass'],
            },
          },
          secondary: {
            secure: false,
            host: config.get('mailSecondary')['host'],
            port: config.get('mailSecondary')['port'],
            auth: {
              user: config.get('mailSecondary')['user'],
              pass: config.get('mailSecondary')['pass'],
            },
          },
        },
      }),
    }),
  ],
})
export class MailModule {}
