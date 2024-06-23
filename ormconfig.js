const { DataSource } = require('typeorm');
const dotenv = require('dotenv');

dotenv.config();

module.exports = new DataSource({
  type: process.env.DATABASE_TYPE,
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT, 10),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: ['src/models/**/*.ts'],
  migrations: ['database/migrations/**/*.ts'],
  subscribers: ['src/subscriber/**/*.ts'],
});
