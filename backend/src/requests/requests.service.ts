import { Injectable } from '@nestjs/common';
import { CreateRequestDto } from './dto/create-request.dto';
import { UpdateRequestDto } from './dto/update-request.dto';
import { PrismaService } from '../prisma/prisma.service';
import { SearchRequestDto } from './dto/search-request.dto';

@Injectable()
export class RequestsService {
  constructor(private prisma: PrismaService) {}

  async create(CreateRequestDto: CreateRequestDto) {
    return this.prisma.request.create({ data: CreateRequestDto });
  }

  findAll() {
    return this.prisma.request.findMany();
  }

  findMany(SearchRequestDto: SearchRequestDto) {
    const whereClause: any = {};
    if (SearchRequestDto.requestTypeId) {
      whereClause.requestTypeId = Number(SearchRequestDto.requestTypeId);
    }
    if (SearchRequestDto.description) {
      whereClause.description = { contains: SearchRequestDto.description, mode: 'insensitive' };
    }
    if (SearchRequestDto.adress) {
      whereClause.adress = { contains: SearchRequestDto.adress, mode: 'insensitive' };
    }
    return this.prisma.request.findMany({
      where: whereClause,
    })
  }

  findOne(id: number) {
    return this.prisma.request.findUnique({ where: { id } });
  }

  update(id: number, updateRequestDto: UpdateRequestDto) {
    return this.prisma.request.update({
      where: { id },
      data: updateRequestDto,
    });
  }

  remove(id: number) {
    return this.prisma.request.delete({ where: { id } });
  }
}
