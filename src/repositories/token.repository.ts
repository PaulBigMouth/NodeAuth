import { User } from '../models/user.model';
import { Token } from '../models/token.model';
import { v4 as uuidv4 } from 'uuid';
import token from '../services/token.service';

class TokenRepository {
  public async createToken(user: User): Promise<Token | Error> {
    try {
      await this.findAndRemoveToken(user.id);
      const token = new Token();
      token.time = new Date();
      token.value = uuidv4();
      token.user = user;
      await token.save();
      return token;
    } catch (error) {
      return error;
    }
  }

  public async findAndRemoveToken(userId: number): Promise<Error> {
    try {
      const user = await Token.typedRepository()
        .createQueryBuilder('token')
        .leftJoinAndSelect('token.user', 'user')
        .where('user.id = :userId', {
          userId,
        })
        .getOne();
      await user.remove();
      return null;
    } catch (error) {
      return error;
    }
  }
}

export default new TokenRepository();
