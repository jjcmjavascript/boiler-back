import 'dotenv/config'; // eslint-disable-line
import { DataSource } from 'typeorm'; //eslint-disable-line
import { registerAs } from '@nestjs/config';
import path from 'path';

export const DATABASE_NAME = process.env.DATABASE_NAME;

export const dbConfigObject = {
  type: process.env.DATABASE_TYPE as any,
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: DATABASE_NAME,
  synchronize: false,
  entities: [path.join(__dirname, '..', 'entities', '*.entity{.ts,.js}')],
  migrations: [path.join(__dirname, '..', 'database', 'migrations', '*.ts')],
  subscribers: [],
};

export default new DataSource(dbConfigObject);

export const dbRegisterAsResutl = registerAs('database', () => dbConfigObject);
