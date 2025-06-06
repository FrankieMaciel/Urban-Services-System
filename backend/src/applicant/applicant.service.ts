import { Injectable } from '@nestjs/common';
import { CreateApplicantDto } from './dto/create-applicant.dto';
import { UpdateApplicantDto } from './dto/update-applicant.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ApplicantService {
  constructor(private prisma: PrismaService) {}

  create(CreateApplicantDto: CreateApplicantDto) {
    CreateApplicantDto.fiscalId = decodeURIComponent(CreateApplicantDto.fiscalId);
    return this.prisma.applicant.create({ data: CreateApplicantDto });
  }

  findOne(id: number) {
    return this.prisma.applicant.findUnique({ where: { id } });
  }

  findOneByFiscalId(fiscalId: string) {
    return this.prisma.applicant.findUnique({ where: { fiscalId: decodeURIComponent(fiscalId)} });
  }
}
