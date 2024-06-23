import { Injectable } from '@nestjs/common';
import { ProductInterface } from './product.interface';

@Injectable()
class ProductService {
  private fakeProducts: ProductInterface[];

  constructor() {
    this.fakeProducts = [
      {
        name: 'Product 1',
        price: 100,
        nameVariantId: 'product-1',
        code: 'P1',
        isInternal: false,
        jsonDescription: {
          description: 'Product 1 description',
        },
        createdAt: new Date(),
      },
      {
        name: 'Product 2',
        price: 200,
        nameVariantId: 'product-2',
        code: 'P2',
        isInternal: true,
        jsonDescription: {
          description: 'Product 2 description',
        },
        createdAt: new Date(),
      },
    ];
  }

  getProducts(): ProductInterface[] {
    return this.fakeProducts;
  }

  productById(id: string): ProductInterface {
    return this.fakeProducts.find((product) => product.nameVariantId === id);
  }
}
export { ProductService };
