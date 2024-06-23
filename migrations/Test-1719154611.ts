import { MigrationInterface, QueryRunner } from 'typeorm';

export class Test1719154611 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(
      `CREATE TABLE "test" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_3a3e1b2c580ecf3d42b3b8e8b7f" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`DROP TABLE "test"`);
  }
}
