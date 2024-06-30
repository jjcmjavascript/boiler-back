## create migration - como crear una migracion
  npm run migration:create -- --name=NombreDeLaMigracion

## generate migration - como generar una migracion
# cuando generes una migracion agrega de preferencia IF NOT EXISTs y IF EXISTS en el drop
# I recomend add the sentence IF NOT EXISTs y IF EXISTS in the create and drop method
npm run migration:generate -- --name=NombreDeLaMigracion 

## run migration - como correr una migracion
npm run migration:migrate

## revert migration - como revertir una migracion
npm run migration:revert