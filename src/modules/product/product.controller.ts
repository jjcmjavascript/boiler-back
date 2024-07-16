import { Controller, Get, Post, Body, Req } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDto } from './product.dto';
import { Public } from 'src/decorators/public.decorator';
import { Request } from 'express';

@Controller('products')
class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  @Public()
  index() {
    return this.productService.findAll();
  }

  @Get(':id')
  @Public()
  show(id: number) {
    return this.productService.findOneById(id);
  }

  @Post()
  create(@Req() res: Request, @Body() productParam: ProductDto) {
    return this.productService.createProduct(res, productParam);
  }
}

export { ProductController };
