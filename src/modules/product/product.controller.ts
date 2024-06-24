import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
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
  createProduct(@Body() productParam: any) {
    return this.productService.createProduct(productParam);
  }
}

export { ProductController };
