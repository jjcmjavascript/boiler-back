import { Controller, Get, Post, Body, Req, Param } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDto, ProductIdDto } from './product.dto';
import { Public } from '@decorators/public.decorator';
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
  show(@Param() productParams: ProductIdDto) {
    return this.productService.findOneById(productParams.id);
  }

  @Post()
  create(@Req() res: Request, @Body() productParam: ProductDto) {
    return this.productService.createProduct(res, productParam);
  }
}

export { ProductController };
