import { loadEnvFile } from 'process';

loadEnvFile();

export const jwtSecret = process.env.SECRET;
