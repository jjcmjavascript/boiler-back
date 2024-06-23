import { MigrationInterface, QueryRunner } from "typeorm";

export class Equisde1719169721546 implements MigrationInterface {
    name = 'Equisde1719169721546'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "nameVariantId" character varying NOT NULL, "code" character varying NOT NULL, "price" integer NOT NULL, "jsonDescriptionId" integer NOT NULL, "isInternal" boolean NOT NULL, "password" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
