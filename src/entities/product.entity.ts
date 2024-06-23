import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  nameVariantId: string;

  @Column()
  code: string;

  @Column()
  price: number;

  @Column()
  jsonDescriptionId: number;

  @Column()
  isInternal: boolean;

  @Column()
  password: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  @Column({ name: 'updated_at' })
  updatedAt: Date;
}
