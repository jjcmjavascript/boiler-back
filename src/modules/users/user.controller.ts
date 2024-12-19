import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserCreateRepository } from './repositories/user-create.repository';
import { UserFindAllRepository } from './repositories/user-find-all.repository';
import { UserCreateDto } from './user.dto';
import { Public } from '@decorators/public.decorator';

@Controller('users')
export class UserController {
  constructor(
    readonly findAllService: UserFindAllRepository,
    readonly createService: UserCreateRepository,
  ) {}

  @Public()
  @Get()
  async findAll() {
    const users = await this.findAllService.findAll();

    return users;
  }

  @Public()
  @Post()
  async create(@Body() userDto: UserCreateDto) {
    const result = await this.createService.create(userDto);

    return result;
  }
}
