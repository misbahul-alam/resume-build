import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  Register(@Body() registerDto: RegisterDto) {
    return this.authService.Register(registerDto);
  }

  @Post('login')
  Login(@Body() loginDto: LoginDto) {
    return this.authService.Login(loginDto);
  }
}
