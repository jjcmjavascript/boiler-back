import 'dotenv/config';

export const jwtSecret = process.env.SECRET;
export const isProduction = process.env.NODE_ENV === 'production';
export const port = process.env.PORT || 3001;
export const origins =
  process.env.ORIGINS?.split(';') || 'http://localhost:3000';

export const config = {
  port,
  isProduction,
  origins,
  jwtSecret,
};
