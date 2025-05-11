import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable({})
export class authService {
  constructor(private prisma: PrismaService) {}
  signup() {
    return { msg: 'I have signup method' };
  }

  signin() {
    return { msg: 'I have signin method' };
  }
}
