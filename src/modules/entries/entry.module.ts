import { Module } from '@nestjs/common';
import { EntryController } from './entry.controller';
import { Entry } from 'src/entities/entry.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntryService } from './entry.service';

@Module({
  imports: [TypeOrmModule.forFeature([Entry])],
  controllers: [EntryController],
  providers: [EntryService],
  exports: [EntryService],
})
export class EntryModule {}
