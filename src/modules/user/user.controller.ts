import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserCreateDto } from './user.dto';
@Controller('users')
export class UserController {
  constructor(readonly userService: UserService) {}

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
