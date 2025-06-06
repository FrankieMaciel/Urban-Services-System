import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApplicantService } from './applicant.service';
import { CreateApplicantDto } from './dto/create-applicant.dto';
import { UpdateApplicantDto } from './dto/update-applicant.dto';

@Controller('applicant')
export class ApplicantController {
  constructor(private readonly applicantService: ApplicantService) {}

  @Post()
  create(@Body() createApplicantDto: CreateApplicantDto) {
    return this.applicantService.create(createApplicantDto);
  }

  @Get('/cpfcnpj/:fiscalId')
  findOneByFiscalId(@Param('fiscalId') fiscalId: string) {
    console.log(fiscalId);
    return this.applicantService.findOneByFiscalId(fiscalId);
  }

  @Get('/getId/:id')
  findOne(@Param('id') id: string) {
    return this.applicantService.findOne(+id);
  }
}
