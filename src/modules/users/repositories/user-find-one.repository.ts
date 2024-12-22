import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from '@shared/entities/user.entity';
import { PrismaService } from '@shared/services/database/prisma/prisma.service';

@Injectable()
export class UserFindOneRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async execute(id: number): Promise<User> {
    const user = await this.prismaService.user.findUnique({
      where: {
        id,
      },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return User.create(user);
  }
}
