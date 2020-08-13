import * as crypto from 'crypto';
export class CryptoHelper {
  public comparePasswords(userPassword: string, password: string): boolean {
    const passHash = this.hashPassword(this.createSalt(), password);
    return userPassword === passHash;
  }

  private createSalt(): string {
    return crypto.randomBytes(128).toString('base64');
  }

  private hashPassword(salt, password): string {
    const hmac = crypto.createHmac('sha256', salt);
    return hmac.update(password).digest('hex');
  }
}
