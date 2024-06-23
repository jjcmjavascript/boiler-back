/**
 * Este escript se encarga de renombrar la última migración creada
 */
const fs = require('fs'); //eslint-disable-line
const path = require('path'); //eslint-disable-line
const argument = process.argv[2];
const migrationName = argument ? argument.split('=')[1] : null;

if (!migrationName) {
  console.error('Usage: create-migrations <migration-name>');
  process.exit(1);
}

const migrationPath = path.join(__dirname, '../database/migrations');
const files = fs.readdirSync(migrationPath);
const lastMigration = files[files.length - 1];
const newMigrationName = lastMigration
  .replace(/(\d+)-(.*)/, `$1-${migrationName}`)
  .concat('.ts');

fs.renameSync(
  path.join(migrationPath, lastMigration),
  path.join(migrationPath, newMigrationName),
);

console.log(`Migration ${lastMigration} renamed to ${newMigrationName}`);

// Read the file
const data = fs.readFileSync(
  path.join(migrationPath, newMigrationName),
  'utf8',
);

// replace the content
const result = data.replace(/TempName/g, migrationName);

// write the file
fs.writeFileSync(path.join(migrationPath, newMigrationName), result, 'utf8');
