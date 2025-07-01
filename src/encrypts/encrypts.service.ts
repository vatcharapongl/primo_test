import { Injectable } from '@nestjs/common';
import { decryptWithAES, encryptWithAES, generateAESKey } from './utils';
import { ConfigService } from 'src/config/config.service';
import { privateEncrypt, publicDecrypt } from 'crypto';

@Injectable()
export class EncryptsService {
  private publicKey = this.configService.getPublicKey()
  private privateKey = this.configService.getPrivateKey()

  constructor(private configService: ConfigService){}

  encrypt(payload: string) {
    const aesKey = generateAESKey();
    const encrypted = encryptWithAES(payload, aesKey);
    const PKencrypted = privateEncrypt(this.privateKey, aesKey);
    const data1 = PKencrypted.toString('base64');

    return {
      data1: data1,
      data2: encrypted,
    };
  }

  decrypt(data1: string, data2: string) {
    const payload = decryptWithAES(data2, data1, this.publicKey);
    return { payload };
  }
}
