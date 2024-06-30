import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  DeleteDateColumn,
} from 'typeorm';
import { Roles } from '../services/permission/types/roles.enum';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 100 })
  lastname: string;

  @Column({ length: 30 })
  tax: string;

  @Column({ length: 100 })
  email: string;

  @Column({ length: 250 })
  password: string;

  @Column({ default: true })
  active: boolean;

  @Column({
    type: 'enum',
    enum: Roles,
    default: Roles.User,
  })
  role: Roles;

  @DeleteDateColumn()
  deletedAt?: Date;
}
