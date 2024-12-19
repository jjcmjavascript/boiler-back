import { Module } from '@nestjs/common';
import { PrismaModule } from '@modules/prisma/prisma.module';
import { UserCreateRepository } from './repositories/user-create.repository';
import { UserFindAllRepository } from './repositories/user-find-all.repository';
import { UserController } from './user.controller';

@Module({
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [UserCreateRepository, UserFindAllRepository],
  exports: [UserCreateRepository, UserFindAllRepository],
})
export class UserModule {}
