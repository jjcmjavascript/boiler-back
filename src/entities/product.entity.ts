import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  DeleteDateColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';

import { Price } from './price.entity';
import { Entry } from './entry.entity';

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

  @Column({ nullable: true })
  jsonDescriptionId: number;

  @Column({ default: true })
  isInternal: boolean;

  @OneToMany(() => Price, (price) => price.product)
  prices: Price[];

  @ManyToMany(() => Entry)
  @JoinTable()
  entries: Entry[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', nullable: true })
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt?: Date;
}
