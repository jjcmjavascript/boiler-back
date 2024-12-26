
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