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

    @IsNumber()
    applicantId: number;

    @IsString()
    @IsOptional()
    status: string;
}
