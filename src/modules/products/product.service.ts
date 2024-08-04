import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Request } from 'express';
import { ProductDto } from './product.dto';
import { Repository } from 'typeorm';
import { Product } from '../../entities/product.entity';
import { BaseRespositoryService } from '../../services/base-respository.service';
import { EntryService } from '../entries/entry.service';
import { PriceService } from '../prices/price.service';

@Injectable()
class ProductService extends BaseRespositoryService<Product> {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    private readonly entryService: EntryService,
    private readonly priceService: PriceService,
  ) {
    super(productRepository);
  }

  public async createProduct(res: Request, productObject: ProductDto) {
    const isAdmin = res['user'];

    console.log('isAdmin', isAdmin);
    console.log('productObject', productObject);
  }
}
export { ProductService };
