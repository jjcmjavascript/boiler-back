import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/modules/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { PermissionService } from 'src/services/permission';
import { compare } from 'src/services/hash.service';
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

    if (!compare(password, user?.password)) {
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
