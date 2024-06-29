import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDto } from './product.dto';

@Controller('products')
class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  getProducts() {
    return this.productService.getProducts();
  }

  @Get(':id')
  getProductById(id: number) {
    return this.productService.productById(id);
  }

  @Post()
  createProduct(@Body() productParam: ProductDto) {
    return this.productService.createProduct(productParam as any);
  }
}

export { ProductController };
