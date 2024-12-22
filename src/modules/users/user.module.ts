import { Module } from '@nestjs/common';
import { PrismaModule } from '@modules/prisma/prisma.module';
import { UserCreateRepository } from './repositories/user-create.repository';
import { UserFindAllRepository } from './repositories/user-find-all.repository';
import { UserController } from './user.controller';
import { UserFindOneRepository } from './repositories/user-find-one.repository';

@Module({
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [
    UserCreateRepository,
    UserFindAllRepository,
    UserFindOneRepository,
  ],
  exports: [UserCreateRepository, UserFindAllRepository, UserFindOneRepository],
})
export class UserModule {}
