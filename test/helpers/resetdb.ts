import * as dotenv from 'dotenv';
import { execSync } from 'child_process';

dotenv.config({ path: '.env.test' });

export const resetDb = () => execSync(`dropdb ${process.env.DATABASE_NAME}`);
