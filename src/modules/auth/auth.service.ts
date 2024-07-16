import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/modules/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { PermissionService } from 'src/services/permission';
import { compare } from 'src/services/hash.service';
import { Response } from 'express';
@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(
    response: Response,
    email: string,
    password: string,
  ): Promise<void> {
    const user = await this.usersService.findOne({ email });

    if (!compare(password, user?.password)) {
      throw new UnauthorizedException();
    }

    const payload = {
      sub: user.id,
      username: user.name,
      scopes: PermissionService.getModulesActionsByRoles([user.role]),
    };

    const accessToken = await this.jwtService.signAsync(payload, {
      expiresIn: '60m',
    });
    const refreshToken = await this.jwtService.signAsync(payload, {
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

  async refreshTokens(res: Response, refreshToken: string): Promise<void> {
    try {
      const payload = this.jwtService.verify(refreshToken);
      const newAccessToken = await this.jwtService.signAsync(payload, {
        expiresIn: '60m',
      });

      res.cookie('access_token', newAccessToken, {
        httpOnly: true,
        secure: true,
        maxAge: 900000,
      });
    } catch (error) {
      throw new UnauthorizedException('Invalid refresh token');
    }
  }
}
