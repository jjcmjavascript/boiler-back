import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  getProducts() {
    return this.productService.getProducts();
  }
}

export { ProductController };
