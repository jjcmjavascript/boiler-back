import { Module } from '@nestjs/common';
import { PushNotificationTokenController } from './push-notification-token.controller';
import { PushNotificationTokenCreateRepository } from './repositories/push-notification-token-create.repository';
import { PrismaModule } from '@modules/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [PushNotificationTokenCreateRepository],
  controllers: [PushNotificationTokenController],
  exports: [PushNotificationTokenCreateRepository],
})
export class PushNotificationTokenModule {}
