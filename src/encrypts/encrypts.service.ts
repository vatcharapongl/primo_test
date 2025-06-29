import { Injectable } from '@nestjs/common';
import { decryptWithAES, encryptWithAES, generateAESKey } from './utils';

@Injectable()
export class EncryptsService {
  encrypt(payload: string) {
    const aesKey = generateAESKey();
    const encrypted = encryptWithAES(payload, aesKey);

    return {
      data1: aesKey,
      data2: encrypted,
    };
  }

  decrypt(data1: string, data2: string) {
    const payload = decryptWithAES(data2, data1);
    return { payload };
  }
}
