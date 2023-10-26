import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { PrismaTenantService } from 'src/providers/prisma-tenant.provider';
import { PrismaClientManager } from 'src/providers/prisma-manager.provider';

@Module({
  controllers: [PostsController],
  providers: [PostsService, PrismaClientManager, PrismaTenantService],
})
export class PostsModule {}
