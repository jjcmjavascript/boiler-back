import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from 'src/services/base.service';
import { User } from 'src/entities/user.entity';

@Injectable()
class UserService extends BaseService<User> {
  constructor(
    @InjectRepository(User)
    private readonly productRepository: Repository<User>,
  ) {
    super(productRepository);
  }
}
export { UserService };
