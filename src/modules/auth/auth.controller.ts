import {
  Body,
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  Res,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './auth.dto';
import { Public } from 'src/decorators/public.decorator';
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  async signIn(
    @Body() signInDto: SignInDto,
    @Res({ passthrough: true }) response,
  ) {
    return this.authService.signIn(
      response,
      signInDto.email,
      signInDto.password,
    );
  }

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('refresh')
  async refresh(
    @Body('refresh_token') refreshToken: string,
    @Res({ passthrough: true }) response,
  ) {
    return this.authService.refreshTokens(response, refreshToken);
  }
}
