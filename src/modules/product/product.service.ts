import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../../entities/product.entity';

@Injectable()
class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async getProducts(): Promise<Product[]> {
    return await this.productRepository.find();
  }

  async productById(id: number): Promise<Product> {
    return await this.productRepository.findOneBy({ id });
  }

  async createProduct(product: Product): Promise<Product> {
    return await this.productRepository.save(product);
  }
}
export { ProductService };
