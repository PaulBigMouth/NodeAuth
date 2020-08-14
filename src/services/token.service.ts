import { Token } from '../models/token.model';
import { User } from '../models/user.model';
import * as uuid from 'uuid';
import TokenRepository from '../repositories/token.repository';

class TokenService {
  public create(user: User): Promise<Token | Error> {
    return TokenRepository.createToken(user);
  }
}

export default new TokenService();
