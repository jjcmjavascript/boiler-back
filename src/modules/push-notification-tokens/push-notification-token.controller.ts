import { Body, Controller, Post } from '@nestjs/common';
import { PushNotificationTokenCreateDto } from './push-notification-token.dto';
import { PushNotificationTokenCreateRepository } from './repositories/push-notification-token-create.repository';
import { Public } from '@shared/decorators/public.decorator';
import { PushNotificationTokenFindAllRepository } from './repositories/push-notification-token-find-all.repository';

@Controller('push-notification-tokens')
export class PushNotificationTokenController {
  constructor(
    private readonly pushNotificationTokenCreateRepository: PushNotificationTokenCreateRepository,
    private readonly pushNotificationTokenFindAllRepository: PushNotificationTokenFindAllRepository,
  ) {}

  @Public()
  @Post()
  async create(@Body() createDto: PushNotificationTokenCreateDto) {
    this.pushNotificationTokenCreateRepository.execute(createDto);
  }
}
