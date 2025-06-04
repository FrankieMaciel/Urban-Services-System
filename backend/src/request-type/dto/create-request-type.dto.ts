import {
    IsString,
  } from 'class-validator';

export class CreateRequestTypeDto {
    @IsString()
    requestName: string
}
