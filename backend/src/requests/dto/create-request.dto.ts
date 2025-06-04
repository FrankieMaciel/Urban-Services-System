import {
    IsOptional,
    IsString,
    MinLength,
    IsNumber
  } from 'class-validator';

export class CreateRequestDto {
    @IsNumber()
    requestTypeId: number;

    @IsString()
    adress: string;

    @IsString()
    @IsOptional()
    description?: string;
    applicantName: string;
    applicantCpf: string;

    @IsString()
    @IsOptional()
    status: string;
}
