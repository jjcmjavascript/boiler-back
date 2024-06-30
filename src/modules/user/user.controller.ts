import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserCreateDto } from './user.dto';
import { Public } from 'src/decorators/public.decorator';
@Controller('users')
export class UserController {
  constructor(readonly userService: UserService) {}

  @Public()
  @Get()
  async index() {
    const users = await this.userService.findAll();

    return [...users];
  }

  @Post()
  async create(@Body() userDto: UserCreateDto) {
    const result = await this.userService.create(userDto);

    return result;
  }
}
