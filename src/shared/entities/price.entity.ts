import {
  Entity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToOne,
} from 'typeorm';
import { Product } from './product.entity';
import { Entry } from './entry.entity';

@Entity('prices')
export class Price {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'int',
  })
  @ManyToOne(() => Product, (product) => product.id)
  product: number;

  @Column({
    type: 'numeric',
    precision: 22,
    scale: 10,
  })
  price: number;

  @Column({ nullable: true })
  @OneToOne(() => Entry)
  entryId: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @DeleteDateColumn()
  deletedAt?: Date;
}
