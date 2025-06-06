import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RequestsModule } from './requests/requests.module';
import { RequestTypeModule } from './request-type/request-type.module';
import { ApplicantModule } from './applicant/applicant.module';

@Module({
  imports: [RequestsModule, RequestTypeModule, ApplicantModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
