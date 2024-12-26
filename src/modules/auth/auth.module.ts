import { Module } from '@nestjs/common';
import { UserModule } from '@modules/users/user.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { jwtSecret } from '@config/config';
import { AuthJwtSingInRepostory } from './repositories/auth-jwt-sigin.repository';
import { UserRolesModule } from '@modules/user-roles/user-roles.module';
import { PasswordModule } from '@modules/password/password.module';
@Module({
  imports: [
    UserRolesModule,
    PasswordModule,
    UserModule,
    JwtModule.register({
      global: true,
      secret: jwtSecret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthJwtSingInRepostory],
  controllers: [AuthController],
  exports: [AuthJwtSingInRepostory],
})
export class AuthModule {}
