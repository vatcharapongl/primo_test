// src/swagger-decorators/decrypt-endpoint.decorator.ts
import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags, ApiBody } from '@nestjs/swagger';
import { DecryptDto } from '../dto/create-decrypt.dto';

export function ApiDecryptEndpoint() {
  return applyDecorators(
    ApiTags('Encrypts'),
    ApiOperation({ summary: 'Decrypt AES-encrypted data' }),
    ApiBody({ type: DecryptDto }),
    ApiResponse({
      status: 200,
      description: 'Decrypted result returned',
      schema: {
        example: {
          successful: true,
          error_code: null,
          data: {
            payload: 'Hello world',
          },
        },
      },
    }),
  );
}
