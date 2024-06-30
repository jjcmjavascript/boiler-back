import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDto } from './product.dto';

@Controller('products')
class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  getProducts() {
    return this.productService.findAll();
  }

  @Get(':id')
  getProductById(id: number) {
    return this.productService.findOneById(id);
  }

  @Post()
  createProduct(@Body() productParam: ProductDto) {
    return this.productService.create(productParam as any);
  }
}

export { ProductController };
