import { CryptoHelper } from './../utils/crypto';
import { AuthRepository } from './../repositories/auth';
export class AuthService {
  constructor(private authRepository: AuthRepository, private cryptoHelper: CryptoHelper) {}

  public signIn(email, paswword) {
    const user = this.authRepository.findByEmail(email);
  }

  public signUp(email, password) {}
}
