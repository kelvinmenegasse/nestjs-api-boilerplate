import { registerAs } from '@nestjs/config';

export default registerAs('mailPrimary', () => ({
  alias: process.env.MAIL_ALIAS,
  host: process.env.MAIL_HOST_PRIMARY,
  port: process.env.MAIL_PORT_PRIMARY,
  user: process.env.MAIL_USER_PRIMARY,
  pass: process.env.MAIL_PASSWORD_PRIMARY,
}));
