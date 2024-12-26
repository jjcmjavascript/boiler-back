import { Injectable } from '@nestjs/common';
import { Password } from '@shared/entities/password.entity';
import { PrismaService } from '@shared/services/database/prisma/prisma.service';

@Injectable()
export class UserRolesCreateRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async execute(userId: number, name: string): Promise<Password> {
    const result = await this.prismaService.userRole.create({
      data: {
        userId,
        name,
      },
    });

    return Password.create(result);
  }
}
