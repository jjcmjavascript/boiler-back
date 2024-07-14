import { MigrationInterface, QueryRunner } from 'typeorm';
import { Roles } from '../../services/permission/types/roles.enum';

const roles = Object.values(Roles)
  .map((role) => `'${role}'`)
  .join(', ');

export class CreateProduct1719189422023 implements MigrationInterface {
  name = 'CreateProduct1719189422023';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE IF NOT EXISTS "products" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "nameVariantId" character varying, "code" character varying, "price" numeric(12,4) NOT NULL, "jsonDescriptionId" integer, "isInternal" boolean NOT NULL DEFAULT false, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP DEFAULT now(), CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(`
      CREATE TYPE users_role_enum AS ENUM (${roles});
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS "products"`);
    await queryRunner.query(`
      DROP TYPE users_role_enum;
    `);
  }
}
