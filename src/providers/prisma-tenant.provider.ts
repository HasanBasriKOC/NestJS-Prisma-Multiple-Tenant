import { Inject, Injectable, Scope } from '@nestjs/common';
import { PrismaClient } from '@internal/prisma-tenant/client';
import { REQUEST } from '@nestjs/core';
import { PrismaClientManager } from './prisma-manager.provider';

@Injectable({ scope: Scope.REQUEST })
export class PrismaTenantService {
  public prisma: PrismaClient;

  constructor(
    @Inject(REQUEST) request: Request,
    prismaClientManager: PrismaClientManager,
  ) {
    this.prisma = prismaClientManager.getClient(request);
  }
}
