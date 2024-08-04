import { Transform } from 'class-transformer';
import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsOptional,
  ValidateNested,
  IsInt,
} from 'class-validator';

class EntryDto {
  @IsNumber()
  @IsNotEmpty()
  quantity: number;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsString()
  @IsOptional()
  type?: string;
}

class Product {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsString()
  @IsOptional()
  code: string;
}

export class ProductDto {
  @ValidateNested()
  product: Product;

  @ValidateNested({ each: true })
  entries: EntryDto[];
}

export class ProductIdDto {
  @Transform(({ value }) => parseInt(value, 10))
  @IsInt()
  id: number;
}
