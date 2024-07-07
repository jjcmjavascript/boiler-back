import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateEntityAndPriceTable1720392895526
  implements MigrationInterface
{
  name = 'CreateEntityAndPriceTable1720392895526';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "entries" ("id" SERIAL NOT NULL, "userId" integer NOT NULL, "quantity" numeric(22,10) NOT NULL, "cost" numeric(22,10) NOT NULL, "documentId" integer, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "PK_23d4e7e9b58d9939f113832915b" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "prices" ("id" SERIAL NOT NULL, "product" integer NOT NULL, "price" numeric(22,10) NOT NULL, "entryId" integer, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "productId" integer, CONSTRAINT "PK_2e40b9e4e631a53cd514d82ccd2" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "entries_products_products" ("entriesId" integer NOT NULL, "productsId" integer NOT NULL, CONSTRAINT "PK_b0dce2918fac67697ec19f311c5" PRIMARY KEY ("entriesId", "productsId"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_df3818a0b5eb0b724b6a2d8f75" ON "entries_products_products" ("entriesId") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_2caca4f38fb9bd7016f637d61f" ON "entries_products_products" ("productsId") `,
    );
    await queryRunner.query(
      `CREATE TABLE "products_entries_entries" ("productsId" integer NOT NULL, "entriesId" integer NOT NULL, CONSTRAINT "PK_36afda3bb2e1db995ab0b9f924d" PRIMARY KEY ("productsId", "entriesId"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_b9a7110c5229afe8ff40a1748d" ON "products_entries_entries" ("productsId") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_87ebc41047c1d0319ce69c7162" ON "products_entries_entries" ("entriesId") `,
    );
    await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "price"`);
    await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "password"`);
    await queryRunner.query(
      `ALTER TABLE "prices" ADD CONSTRAINT "FK_fe932c923ecd4abc3f0ac915736" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "entries_products_products" ADD CONSTRAINT "FK_df3818a0b5eb0b724b6a2d8f756" FOREIGN KEY ("entriesId") REFERENCES "entries"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "entries_products_products" ADD CONSTRAINT "FK_2caca4f38fb9bd7016f637d61fb" FOREIGN KEY ("productsId") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "products_entries_entries" ADD CONSTRAINT "FK_b9a7110c5229afe8ff40a1748d5" FOREIGN KEY ("productsId") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "products_entries_entries" ADD CONSTRAINT "FK_87ebc41047c1d0319ce69c71627" FOREIGN KEY ("entriesId") REFERENCES "entries"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "products_entries_entries" DROP CONSTRAINT "FK_87ebc41047c1d0319ce69c71627"`,
    );
    await queryRunner.query(
      `ALTER TABLE "products_entries_entries" DROP CONSTRAINT "FK_b9a7110c5229afe8ff40a1748d5"`,
    );
    await queryRunner.query(
      `ALTER TABLE "entries_products_products" DROP CONSTRAINT "FK_2caca4f38fb9bd7016f637d61fb"`,
    );
    await queryRunner.query(
      `ALTER TABLE "entries_products_products" DROP CONSTRAINT "FK_df3818a0b5eb0b724b6a2d8f756"`,
    );
    await queryRunner.query(
      `ALTER TABLE "prices" DROP CONSTRAINT "FK_fe932c923ecd4abc3f0ac915736"`,
    );
    await queryRunner.query(
      `ALTER TABLE "products" ADD "password" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "products" ADD "price" numeric(12,4) NOT NULL`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_87ebc41047c1d0319ce69c7162"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_b9a7110c5229afe8ff40a1748d"`,
    );
    await queryRunner.query(`DROP TABLE "products_entries_entries"`);
    await queryRunner.query(
      `DROP INDEX "public"."IDX_2caca4f38fb9bd7016f637d61f"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_df3818a0b5eb0b724b6a2d8f75"`,
    );
    await queryRunner.query(`DROP TABLE "entries_products_products"`);
    await queryRunner.query(`DROP TABLE "prices"`);
    await queryRunner.query(`DROP TABLE "entries"`);
  }
}
