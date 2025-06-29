import { Controller, Post, Body } from '@nestjs/common';
import { EncryptsService } from './encrypts.service';
import { EncryptDto } from './dto/create-encrypt.dto';
import { DecryptDto } from './dto/create-decrypt.dto';
import { ApiEncryptEndpoint } from './decorators/encrypts.decorator';
import { ApiDecryptEndpoint } from './decorators/decrypts.decorator';

@Controller('encrypts')
export class EncryptsController {
  constructor(private readonly encryptsService: EncryptsService) {}

  @ApiEncryptEndpoint()
  @Post('/get-encrypt-data')
  encrypt(@Body() dto: EncryptDto) {
    const result = this.encryptsService.encrypt(dto.payload);
    return {
      successful: true,
      error_code: null,
      data: result,
    };
  }

  @ApiDecryptEndpoint()
  @Post('/get-decrypt-data')
  decrypt(@Body() dto: DecryptDto) {
    const result = this.encryptsService.decrypt(dto.data1, dto.data2);
    return {
      successful: true,
      error_code: null,
      data: result,
    };
  }
}
