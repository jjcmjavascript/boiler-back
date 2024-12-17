import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from '@/modules/users/user.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { jwtSecret } from '@config/config';

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      global: true,
      secret: jwtSecret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
