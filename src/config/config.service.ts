import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';


@Injectable()
export class ConfigService {

  getPublicKey(): string {
  return fs.readFileSync(path.join(__dirname, '../encrypts/key/public.pem'), 'utf8');
  }

  getPrivateKey(): string {
  return fs.readFileSync(path.join(__dirname, '../encrypts/key/private.pem'), 'utf8');
  }
}
