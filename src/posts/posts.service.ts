import { Injectable } from '@nestjs/common';
import { Prisma } from '@internal/prisma-tenant/client';
import { PrismaTenantService } from 'src/providers/prisma-tenant.provider';

@Injectable()
export class PostsService {
  constructor(private prismaService: PrismaTenantService) {}
  create(data: Prisma.PostCreateInput) {
    return this.prismaService.prisma.post.create({ data });
  }

  async findAll() {
    return this.prismaService.prisma.post.findMany();
  }

  findOne(id: string) {
    return this.prismaService.prisma.post.findFirst({ where: { id } });
  }

  update(id: string, data: Prisma.PostUpdateInput) {
    return this.prismaService.prisma.post.update({ where: { id }, data });
  }

  remove(id: string) {
    return this.prismaService.prisma.post.delete({ where: { id } });
  }
}
