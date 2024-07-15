import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Price } from 'src/entities/price.entity';
import { PriceService } from './price.service';

@Module({
  imports: [TypeOrmModule.forFeature([Price])],
  controllers: [],
  providers: [PriceService],
  exports: [PriceService],
})
export class PriceModule {}
