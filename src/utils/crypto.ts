import * as crypto from 'crypto';

class CryptoHelper {
  public comparePasswords(userPassword: string, password: string): boolean {
    const passHash = this.hashPassword(password);
    return userPassword === passHash;
  }

  public hashPassword(password: string): string {
    const hmac = crypto.createHmac('sha256', process.env.SECRET_KEY);
    return hmac.update(password).digest('hex');
  }
}

export default new CryptoHelper();
