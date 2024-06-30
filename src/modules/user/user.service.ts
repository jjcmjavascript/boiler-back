import { Injectable, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseRespositoryService } from 'src/services/base-respository.service';
import { User } from 'src/entities/user.entity';
import { UserCreateDto } from './user.dto';
import { encrypt } from 'src/services/hash.service';
@Injectable()
class UserService extends BaseRespositoryService<User> {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {
    super(userRepository);
  }

  async create(userDto: UserCreateDto): Promise<User> {
    const hashedPassword = encrypt(userDto.password);
    const user = { ...userDto, hashedPassword };
    const userExists = await this.findOne({
      email: userDto.email,
    });
    const taxExists = await this.findOne({ tax: userDto.tax });

    if (userExists) {
      throw new ConflictException('Email already exists');
    }

    if (taxExists) {
      throw new ConflictException('Tax already exists');
    }

    const result = await this.userRepository.save(user);

    return result;
  }
}

export { UserService };
