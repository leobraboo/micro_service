import { Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './prisma.service';

//gerador de id universal
import { randomUUID } from 'node:crypto';

@Controller('notification')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  list() {
    return this.prisma.notification.findMany();
  }

  @Post()
  async create() {
    await this.prisma.notification.create({
      data: {
        id: randomUUID(),
        content: 'um texto qualquer!!',
        category: 'categoria',
        recipientId: randomUUID(),
      },
    });
  }
}
