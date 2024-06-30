import { MigrationInterface, QueryRunner } from 'typeorm';

export class UserMigration1719714119107 implements MigrationInterface {
  name = 'UserMigration1719714119107';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE IF NOT EXISTS "users" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "lastname" character varying(100) NOT NULL, "tax" character varying(30) NOT NULL, "email" character varying(100) NOT NULL, "password" character varying(250) NOT NULL, "active" boolean NOT NULL DEFAULT true, "role" "public"."users_role_enum" NOT NULL DEFAULT 'User', CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS "users"`);
  }
}
