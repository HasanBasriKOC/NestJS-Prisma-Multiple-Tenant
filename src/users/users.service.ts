import { Injectable } from '@nestjs/common';
import { Prisma } from '@internal/prisma-master/client';
import { PrismaMasterService } from 'src/providers/prisma-master.provider';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaMasterService) {}
  create(createUserDto: Prisma.UserCreateInput) {
    return this.prisma.user.create({ data: createUserDto });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(where: Prisma.UserWhereUniqueInput) {
    return this.prisma.user.findFirst({
      where,
    });
  }

  update(where: Prisma.UserWhereUniqueInput, data: Prisma.UserUpdateInput) {
    return this.prisma.user.update({
      where,
      data,
    });
  }

  remove(where: Prisma.UserWhereUniqueInput) {
    return this.prisma.user.delete({ where });
  }
}
