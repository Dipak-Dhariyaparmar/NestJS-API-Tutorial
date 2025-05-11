import { Injectable } from '@nestjs/common';
@Injectable({})
export class authService {
  signup() {
    return { msg: 'I have signup method' };
  }

  signin() {
    return { msg: 'I have signin method' };
  }
}
