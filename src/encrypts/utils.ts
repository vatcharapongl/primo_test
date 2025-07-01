import { createCipheriv, randomBytes, createDecipheriv, publicDecrypt } from 'crypto';

export function generateAESKey(): string {
  return randomBytes(32).toString('base64'); // AES-256
}

export function encryptWithAES(payload: string, aesKeyBase64: string): string {
  const iv = randomBytes(16);
  const key = Buffer.from(aesKeyBase64, 'base64');
  const cipher = createCipheriv('aes-256-cbc', key, iv);
  console.log(iv)
  console.log(key)
  const encrypted = Buffer.concat([
    cipher.update(payload, 'utf8'),
    cipher.final(),
  ]);
  return iv.toString('base64') + ':' + encrypted.toString('base64');
}

export function decryptWithAES(
  encryptedData: string,
  aesKeyBase64: string,
  publicKey: string
): string {
  console.log(aesKeyBase64)
  const [ivBase64, encryptedBase64] = encryptedData.split(':');
  const iv = Buffer.from(ivBase64, 'base64');
  const encrypted = Buffer.from(encryptedBase64, 'base64');
  const key = publicDecrypt(publicKey, Buffer.from(aesKeyBase64, 'base64'));
  const decipher = createDecipheriv('aes-256-cbc', key, iv);
  const decrypted = Buffer.concat([
    decipher.update(encrypted),
    decipher.final(),
  ]);
  return decrypted.toString('utf8');
}
