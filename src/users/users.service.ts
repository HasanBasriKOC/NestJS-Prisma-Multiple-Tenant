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

  findOne(id: string) {
    return this.prisma.user.findFirst({
      where: {
        id,
      },
    });
  }

  update(id: string, updateUserDto: Prisma.UserUpdateInput) {
    return this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  remove(id: string) {
    return this.prisma.user.delete({ where: { id } });
  }
}
