import { Injectable } from '@nestjs/common';
import {
  PushNotificationToken,
  PushNotificationTokenPrimitive,
} from '@shared/entities/push-notification-token.entity';
import { PrismaService } from '@shared/services/database/prisma/prisma.service';

@Injectable()
export class PushNotificationTokenCreateRepository {
  constructor(private readonly prismaService: PrismaService) {}
  async execute(
    pushNotificationTokenParams: Partial<PushNotificationTokenPrimitive>,
  ): Promise<PushNotificationToken> {
    const result = await this.prismaService.pushNotificationToken.create({
      data: {
        userId: pushNotificationTokenParams.userId ?? null,
        token: pushNotificationTokenParams.token,
      },
    });

    return PushNotificationToken.create(result);
  }
}
