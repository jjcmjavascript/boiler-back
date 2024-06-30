import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDto } from './product.dto';

@Controller('products')
class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  index() {
    return this.productService.findAll();
  }

  @Get(':id')
  show(id: number) {
    return this.productService.findOneById(id);
  }

  @Post()
  create(@Body() productParam: ProductDto) {
    return this.productService.create(productParam as any);
  }
}

export { ProductController };
