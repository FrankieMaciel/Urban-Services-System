import { Injectable } from '@nestjs/common';
import { CreateRequestTypeDto } from './dto/create-request-type.dto';
import { UpdateRequestTypeDto } from './dto/update-request-type.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RequestTypeService {
   constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.requestType.findMany();
  }

  findOne(id: number) {
    return this.prisma.requestType.findUnique({ where: { id } });
  }
}
