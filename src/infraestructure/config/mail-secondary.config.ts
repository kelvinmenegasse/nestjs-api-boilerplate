import { registerAs } from '@nestjs/config';

export default registerAs('mailSecondary', () => ({
  alias: process.env.MAIL_ALIAS,
  host: process.env.MAIL_HOST_SECONDARY,
  port: process.env.MAIL_PORT_SECONDARY,
  user: process.env.MAIL_USER_SECONDARY,
  pass: process.env.MAIL_PASSWORD_SECONDARY,
}));
