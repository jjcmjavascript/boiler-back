import { Injectable, ConflictException } from '@nestjs/common';
import { UserCreateDto } from '../user.dto';
import { encrypt } from '@helpers/hash.helper';
import { User } from '@entities/user.entity';
import { Roles } from '@shared/services/permission/types/roles.enum';
import { PrismaService } from '@shared/services/database/prisma/prisma.service';

@Injectable()
class UserCreateRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(userDto: UserCreateDto): Promise<User> {
    const user = { ...userDto };

    await this.checkDuplicateEmail(user.email);

    await this.checkDuplicateTax(user.tax);

    const hashedPassword = await encrypt(userDto.password);

    const result = await this.prismaService.user.create({
      data: {
        name: user.name,
        email: user.email,
        tax: user.tax,
      },
    });

    await this.prismaService.password.create({
      data: {
        password: hashedPassword,
        userId: result.id,
      },
    });

    await this.prismaService.userRole.create({
      data: {
        userId: result.id,
        name: Roles.User,
      },
    });

    return new User({
      id: result.id,
      name: result.name,
      email: result.email,
      tax: result.tax,
      active: result.active,
    });
  }

  async checkDuplicateEmail(email: string): Promise<void> {
    const user = await this.prismaService.user.findUnique({
      where: { email },
    });

    if (user) {
      throw new ConflictException({ errors: ['Email already exists'] });
    }
  }

  async checkDuplicateTax(tax?: string): Promise<void> {
    const user = tax
      ? await this.prismaService.user.findFirst({
          where: { tax },
        })
      : null;

    if (user) {
      throw new ConflictException({ errors: ['Tax already exists'] });
    }
  }
}

export { UserCreateRepository };
