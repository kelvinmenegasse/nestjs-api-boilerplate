import { Module } from '@nestjs/common';
import { DatabaseModule } from './infraestructure/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { MailModule } from './infraestructure/mail/mail.module';
// import databaseConfig from './infraestructure/config/database.config';
import appConfig from './infraestructure/config/app.config';
import authConfig from './infraestructure/config/auth.config';
import mailPrimaryConfig from './infraestructure/config/mail-primary.config';
import mailSecondaryConfig from './infraestructure/config/mail-secondary.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig, authConfig, mailPrimaryConfig, mailSecondaryConfig],
    }),
    DatabaseModule,
    MailModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
