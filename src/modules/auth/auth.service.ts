import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/modules/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { PermissionService } from 'src/services/permission';
@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(
    email: string,
    password: string,
  ): Promise<{ access_token: string }> {
    const user = await this.usersService.findOne({ email });
    if (user?.password !== password) {
      throw new UnauthorizedException();
    }
    const payload = {
      sub: user.id,
      username: user.name,
      scopes: PermissionService.getModulesActionsByRoles([user.role]),
    };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
