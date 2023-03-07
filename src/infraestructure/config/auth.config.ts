import { registerAs } from '@nestjs/config';

export default registerAs('jwt', () => ({
  secret: process.env.JWT_AT_SECRET,
  expires: process.env.JWT_AT_EXPIRATION_TIME,
}));
