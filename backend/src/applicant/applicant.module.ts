import { Module } from '@nestjs/common';
import { ApplicantService } from './applicant.service';
import { ApplicantController } from './applicant.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ApplicantController],
  providers: [ApplicantService],
  imports: [PrismaModule],
})
export class ApplicantModule {}
