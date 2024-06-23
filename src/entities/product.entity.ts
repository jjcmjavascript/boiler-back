import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  nameVariantId: string;

  @Column()
  code: string;

  @Column({ type: 'numeric', precision: 12, scale: 4 })
  price: number;

  @Column({ nullable: true })
  jsonDescriptionId: number;

  @Column({ default: true })
  isInternal: boolean;

  @Column()
  password: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  @Column({ name: 'updated_at' })
  updatedAt: Date;
}
