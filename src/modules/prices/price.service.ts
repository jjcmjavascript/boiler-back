import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Price } from '../../entities/price.entity';
import { BaseRespositoryService } from 'src/services/base-respository.service';

@Injectable()
class PriceService extends BaseRespositoryService<Price> {
  constructor(
    @InjectRepository(Price)
    private readonly priceRepository: Repository<Price>,
  ) {
    super(priceRepository);
  }
}
export { PriceService };
