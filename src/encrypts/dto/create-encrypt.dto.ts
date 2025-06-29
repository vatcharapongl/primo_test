import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length } from 'class-validator';

export class EncryptDto {
  @ApiProperty({ example: 'Hello World' })
  @IsString()
  @IsNotEmpty()
  @Length(0, 2000)
  payload: string;
}
