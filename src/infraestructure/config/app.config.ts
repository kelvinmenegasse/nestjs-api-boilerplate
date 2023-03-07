import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  name: process.env.APP_NAME,
  workingDirectory: process.env.PWD || process.cwd(),
  port: process.env.APP_PORT || 3000,
  apiPrefix: process.env.APP_API_PREFIX || 'api',
}));
