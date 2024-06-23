import 'dotenv/config'; // eslint-disable-line
import { DataSource } from 'typeorm'; //eslint-disable-line

export default new DataSource({
  type: process.env.DATABASE_TYPE as any,
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT, 10),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: ['src/entities/*.entity{.ts,.js}'],
  migrations: ['src/database/migrations/*.ts'],
  subscribers: [],
});
