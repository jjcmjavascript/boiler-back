export interface ProductInterface {
  name: string;
  price: number;
  nameVariantId: string | null;
  code: string;
  isInternal: boolean;
  jsonDescription: Record<string, any>;
  createdAt: Date;
}
