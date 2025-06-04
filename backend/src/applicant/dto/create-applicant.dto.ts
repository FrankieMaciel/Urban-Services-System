import {
    IsString,
  } from 'class-validator';

export class CreateApplicantDto {
    @IsString()
    name: String
    
    @IsString()
    FiscalId: String
}
