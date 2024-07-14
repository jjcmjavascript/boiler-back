import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../../entities/product.entity';
import { BaseRespositoryService } from 'src/services/base-respository.service';
import { Request } from 'express';
import { ProductDto } from './product.dto';

@Injectable()
class ProductService extends BaseRespositoryService<Product> {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {
    super(productRepository);
  }

  public async createProduct(
    productObject: ProductDto,
    res: Request,
  ): Promise<Product> {
    const isAdmin = res['user'];
    const productChanged = { ...(productObject as any), isInternal: isAdmin };

    return this.productRepository.save(productChanged);
  }
}
export { ProductService };
