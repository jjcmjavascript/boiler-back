import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from '../../entities/product.entity';
import { EntryModule } from '../entries/entry.module';
import { PriceModule } from '../prices/price.module';

@Module({
  imports: [TypeOrmModule.forFeature([Product]), EntryModule, PriceModule],
  controllers: [ProductController],
  providers: [ProductService],
  exports: [ProductService],
})
export class ProductModule {}
