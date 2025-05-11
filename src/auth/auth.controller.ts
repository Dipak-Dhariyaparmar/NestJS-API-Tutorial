import { Controller, Post } from '@nestjs/common';
import { authService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: authService) {}

  @Post('signup')
  signup() {
    return this.authService.signup();
  }

  @Post('signin')
  signin() {
    return this.authService.signin();
  }
}
