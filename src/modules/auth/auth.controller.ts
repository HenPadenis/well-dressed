
import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: Record<string, any>) { //Record é um objeto JS onde as chaves são strings e os valores podem ser de quaisquer tipos (chave: string, valor: any)
    return this.authService.signIn(signInDto.username, signInDto.password);
  }
}
