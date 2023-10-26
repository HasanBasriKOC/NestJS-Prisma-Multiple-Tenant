import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaMasterService } from 'src/providers/prisma-master.provider';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaMasterService],
})
export class UsersModule {}
