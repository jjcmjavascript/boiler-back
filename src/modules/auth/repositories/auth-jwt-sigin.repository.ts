import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PermissionService } from '@services/permision.service';
import { compare } from '@helpers/hash.helper';
import { Response } from 'express';
import { UserFindOneRepository } from '@modules/users/repositories/user-find-one.repository';
import { UserRolesFindOneRepository } from '@modules/user-roles/user-roles-find-one.repository';
import { PasswordFindOneRepository } from '@modules/password/password-find-one.repository';
import { Roles } from '@shared/services/permission/types/roles.enum';

@Injectable()
export class AuthJwtSingInRepostory {
  constructor(
    private userFindOneRepository: UserFindOneRepository,
    private userRolesFindOneRepository: UserRolesFindOneRepository,
    private passwordFindOneRepository: PasswordFindOneRepository,
    private jwtService: JwtService,
  ) {}

  async signIn(
    response: Response,
    email: string,
    password: string,
  ): Promise<void> {
    const user = (
      await this.userFindOneRepository.execute({ email })
    ).toPrimitive();

    const userPassword = user
      ? (await this.passwordFindOneRepository.execute(user.id)).toPrimitive()
      : null;

    if (!user || !userPassword || !compare(password, userPassword.password)) {
      throw new UnauthorizedException();
    }

    const role = await this.userRolesFindOneRepository.execute(user.id);

    const payload = {
      sub: user.id,
      username: user.name,
      scopes: PermissionService.getModulesActionsByRoles([
        Roles[role.toPrimitive().name as keyof typeof Roles],
      ]),
    };

    const accessToken = this.jwtService.sign(payload, {
      expiresIn: '60m',
    });

    const refreshToken = this.jwtService.sign(payload, {
      expiresIn: '60m',
    });

    response.cookie('access_token', accessToken, {
      httpOnly: true,
      secure: true,
      maxAge: 3600000, // 1 hr
    });

    response.cookie('refresh_token', refreshToken, {
      httpOnly: true,
      secure: true,
      maxAge: 3600000, // 1hr
    });
  }
}