import { IsNotEmpty, IsEmail } from 'class-validator';

export class UserCreateDto {
  @IsNotEmpty({ message: 'Name is required' })
  name: string;

  @IsNotEmpty({ message: 'Lastname is required' })
  lastname: string;

  @IsNotEmpty({ message: 'Tax is required' })
  tax: string;

  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail({}, { message: 'Invalid Email' })
  email: string;

  @IsNotEmpty({ message: 'Password is required' })
  password: string;
}
