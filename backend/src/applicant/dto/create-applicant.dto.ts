import {
    IsString,
    MinLength,
  } from 'class-validator';

export class CreateApplicantDto {
    @IsString()
    name: string;
    
    @MinLength(14)
    @IsString()
    fiscalId: string;
}
