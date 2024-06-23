const fs = require('fs'); //eslint-disable-line
const path = require('path'); //eslint-disable-line
const argument = process.argv[2];
const migrationName = argument ? argument.split('=')[1] : null;

if (!migrationName) {
  console.error('Usage: create-migrations <migration-name>');
  process.exit(1);
}

const date = parseInt((new Date().getTime() / 1000).toFixed(0));
const fullMigrationName = `${migrationName.slice(0, 1).toUpperCase().concat(migrationName.slice(1))}${date}`;

const exists = fs.existsSync(
  path.resolve(__dirname, `../../migrations/${fullMigrationName}.ts`),
);

if (exists) {
  console.error(`Migration ${migrationName} already exists`);
  process.exit(1);
}

const template = `import { MigrationInterface, QueryRunner } from 'typeorm';

export class ${fullMigrationName} implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Write your migration here
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Write your migration here
  }
}
`;

fs.writeFileSync(
  path.resolve(__dirname, `../../migrations/${fullMigrationName}.ts`),
  template,
);

console.log(`Migration ${fullMigrationName} creatd successfully`);
