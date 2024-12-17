import * as bcrypt from 'bcrypt';

const saltOrRounds = 10;

export async function encrypt(password: string) {
  const result = await bcrypt.hash(password, saltOrRounds);

  return result;
}

export async function compare(password: string, hash: string) {
  const result = await bcrypt.compare(password, hash);

  return result;
}
