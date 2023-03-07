import { registerAs } from '@nestjs/config';
import { join } from 'path';

// export default registerAs('database', () => ({
// name: process.env.DATABASE_CONNECTION_NAME,
// type: process.env.DATABASE_TYPE,
// host: process.env.DATABASE_HOST,
// port: process.env.DATABASE_PORT,
// username: process.env.DATABASE_USER,
// password: process.env.DATABASE_PASS,
// database: process.env.DATABASE_NAME,
// entities: [join(__dirname, '/../**/**.entity{.ts,.js}')],
// synchronize: false,
// multipleStatements: true,
// logging: false,
// }));
