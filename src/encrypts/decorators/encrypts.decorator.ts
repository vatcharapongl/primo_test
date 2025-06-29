// src/swagger-decorators/encrypt-endpoint.decorator.ts
import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags, ApiBody } from '@nestjs/swagger';
import { EncryptDto } from '../dto/create-encrypt.dto';

export function ApiEncryptEndpoint() {
  return applyDecorators(
    ApiTags('Encrypts'),
    ApiOperation({ summary: 'Encrypt payload using AES' }),
    ApiBody({ type: EncryptDto }),
    ApiResponse({
      status: 200,
      description: 'Encrypted result returned',
      schema: {
        example: {
          successful: true,
          error_code: null,
          data: {
            data1: 'base64-aes-key',
            data2: 'iv:encrypted-payload',
          },
        },
      },
    }),
  );
}
