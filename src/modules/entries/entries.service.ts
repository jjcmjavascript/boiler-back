import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Entry } from '../../entities/entry.entity';
import { BaseRespositoryService } from '../../services/base-respository.service';

@Injectable()
class EntriesService extends BaseRespositoryService<Entry> {
  constructor(
    @InjectRepository(Entry)
    private readonly entryRepository: Repository<Entry>,
  ) {
    super(entryRepository);
  }
}

export { EntriesService };
