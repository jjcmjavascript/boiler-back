import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserCreateRepository } from './repositories/user-create.repository';
import { UserFindAllRepository } from './repositories/user-find-all.repository';
import { UserCreateDto } from './user.dto';
import { Public } from '@decorators/public.decorator';
import { UserFindOneRepository } from './repositories/user-find-one.repository';

@Controller('users')
export class UserController {
  constructor(
    private readonly findAllService: UserFindAllRepository,
    private readonly createService: UserCreateRepository,
    private readonly findOneService: UserFindOneRepository,
  ) {}

  @Get()
  async findAll() {
    const users = await this.findAllService.execute();

    return users;
  }

  @Public()
  @Post()
  async create(@Body() userDto: UserCreateDto) {
    const result = await this.createService.execute(userDto);

    return result;
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    const user = await this.findOneService.execute({ id });

    return user;
  }
}
