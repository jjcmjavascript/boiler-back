const { DataSource } = require('typeorm'); //eslint-disable-line
const dotenv = require('dotenv'); // eslint-disable-line

dotenv && dotenv.config();

module.exports = new DataSource({
  type: process.env.DATABASE_TYPE,
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT, 10),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [],
  migrations: ['migrations/*.ts'],
  subscribers: [],
});
