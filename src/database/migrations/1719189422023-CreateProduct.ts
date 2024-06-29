import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateProduct1719189422023 implements MigrationInterface {
  name = 'CreateProduct1719189422023';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE IF NOT EXISTS "products" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "nameVariantId" character varying, "code" character varying NOT NULL, "price" numeric(12,4) NOT NULL, "jsonDescriptionId" integer, "isInternal" boolean NOT NULL DEFAULT true, "password" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP DEFAULT now(), CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS "products"`);
  }
}
