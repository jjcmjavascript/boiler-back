import { Module } from '@nestjs/common';
import { PushNotificationTokenController } from './push-notification-token.controller';
import { PushNotificationTokenCreateRepository } from './repositories/push-notification-token-create.repository';
import { PrismaModule } from '@modules/prisma/prisma.module';
import { PushNotificationTokenFindAllRepository } from './repositories/push-notification-token-find-all.repository';

@Module({
  imports: [PrismaModule],
  providers: [
    PushNotificationTokenCreateRepository,
    PushNotificationTokenFindAllRepository,
  ],
  controllers: [PushNotificationTokenController],
  exports: [
    PushNotificationTokenCreateRepository,
    PushNotificationTokenFindAllRepository,
  ],
})
export class PushNotificationTokenModule {}
