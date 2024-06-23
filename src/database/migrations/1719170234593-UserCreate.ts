import { MigrationInterface, QueryRunner } from "typeorm";

export class UserCreate1719170234593 implements MigrationInterface {
    name = 'UserCreate1719170234593'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "nameVariantId" character varying, "code" character varying NOT NULL, "price" numeric(12,4) NOT NULL, "jsonDescriptionId" integer, "isInternal" boolean NOT NULL DEFAULT true, "password" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
