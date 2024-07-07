## Guia de Instalacion - Installation Guide
## Requisitos
Node version 20.0.0+
postgresql version 13.0.0+

### Instalacion de dependencias - Install dependencies
```bash
npm install
```

### Crear archivo .env - Create .env file
```bash
cp example.env .env
```

### Configurar archivo .env - Configure .env file
```bash
nano .env
```

### Crea la base de datos - Create database
Para este paso debe tener instalado postgresql en su maquina | For this step you must have installed postgresql in your machine
```bash
npm run db:create
```
### Correr migraciones - Run migrations
```bash
npm run migration:migrate
```

### Ejecutar el proyecto - Run the project
```bash
npm run dev
```
# Comandos - Commands

## create migration - como crear una migracion
```bash
npm run migration:create -- --name=NombreDeLaMigracion
```

## generate migration - como generar una migracion
cuando generes una migracion agrega de preferencia IF NOT EXISTs y IF EXISTS en el drop
I recomend add the sentence IF NOT EXISTs y IF EXISTS in the create and drop method
```bash
  npm run migration:generate -- --name=NombreDeLaMigracion 
```

## run migration - como correr una migracion
```bash
  npm run migration:migrate
```

## revert migration - como revertir una migracion
```bash
  npm run migration:revert
```