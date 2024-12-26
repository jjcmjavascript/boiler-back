import { Injectable } from '@nestjs/common';
import { Password } from '@shared/entities/password.entity';
import { PrismaService } from '@shared/services/database/prisma/prisma.service';

@Injectable()
export class PasswordCreateRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async execute(userId: number, password: string): Promise<Password> {
    const result = await this.prismaService.password.create({
      data: {
        userId,
        password,
      },
    });

    return Password.create(result);
  }
}
