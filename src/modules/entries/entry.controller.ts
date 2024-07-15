import { Controller, Get } from '@nestjs/common';
import { EntryService } from './entry.service';

@Controller('entries')
export class EntryController {
  constructor(private readonly entryService: EntryService) {}

  @Get()
  async index() {
    return await this.entryService.findAll();
  }
}
