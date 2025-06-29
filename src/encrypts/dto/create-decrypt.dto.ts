import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class DecryptDto {
  @ApiProperty({ example: 'vOziycEUAkzbd953Vs2hnQO4xC04VcaY4lt5EeZlaNo=' })
  @IsString()
  @IsNotEmpty()
  data1: string;

  @ApiProperty({ example: 'D8RD1aM2oWrgwP4YnycTaA==:5rz9ppoFzTDigwdaraaKaw==' })
  @IsString()
  @IsNotEmpty()
  data2: string;
}
