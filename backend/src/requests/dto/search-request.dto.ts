import {
    IsOptional,
    IsString,
    MinLength,
    IsNumber
  } from 'class-validator';

export class SearchRequestDto {
    @IsOptional()
    requestTypeId?: number;

    @IsString()
    @IsOptional()
    adress?: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsOptional()
    applicantId?: number;

    @IsString()    @IsNumber()
    @IsOptional()
    status?: string;
}
