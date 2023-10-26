import { Global, Injectable } from '@nestjs/common';
import { Prisma, PrismaClient } from '@internal/prisma-tenant/client';

@Global()
@Injectable()
export class PrismaClientManager {
  private clients: { [key: string]: PrismaClient } = {};

  getTenantId(request: Request): string {
    return request.headers['tenant'] ?? 'prisma_tenant';
  }

  getClient(request: Request): PrismaClient {
    const tenantId = this.getTenantId(request);
    let client = this.clients[tenantId];
    if (!client) {
      const databaseUrl = process.env.TENANT_DATABASE_URL!.replace(
        'prisma_tenant',
        tenantId,
      );

      client = new PrismaClient({
        datasources: {
          db: {
            url: databaseUrl,
          },
        },
      });

      this.clients[tenantId] = client;
    }

    return client;
  }
}
