import {
    IsOptional,
    IsString,
    MinLength,
    IsNumber
  } from 'class-validator';

export class SearchRequestDto {
    @IsNumber()
    @IsOptional()
    requestTypeId?: number;

    @IsString()
    @IsOptional()
    adress?: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsNumber()
    @IsOptional()
    applicantId?: number;

    @IsString()
    @IsOptional()
    status?: string;
}
