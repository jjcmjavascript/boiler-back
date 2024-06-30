import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddSoftDeleteToUser1719756155328 implements MigrationInterface {
  name = 'AddSoftDeleteToUser1719756155328';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE IF EXISTS "users" ADD "deletedAt" TIMESTAMP`,
    );
    await queryRunner.query(
      `ALTER TABLE IF EXISTS "products" ADD "deletedAt" TIMESTAMP`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE IF EXISTS "products" DROP COLUMN "deletedAt"`,
    );
    await queryRunner.query(
      `ALTER TABLE IF EXISTS "users" DROP COLUMN "deletedAt"`,
    );
  }
}
