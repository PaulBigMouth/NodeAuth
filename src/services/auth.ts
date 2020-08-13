import { CryptoHelper } from './../utils/crypto';
import { AuthRepository } from './../repositories/auth';
export class AuthService {
  constructor(private authRepository: AuthRepository, private cryptoHelper: CryptoHelper) {}

  public async signIn(email: string, password: string) {
    const user = await this.authRepository.findByEmail(email);
    if (this.cryptoHelper.comparePasswords(user.password, password)) {
    }
  }

  public signUp(email, password) {}
}
