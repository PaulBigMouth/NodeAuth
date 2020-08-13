import { User } from '../models/user';

export class AuthRepository {
  public async findByEmail(email: string): Promise<User> {
    const user: User = await User.findOne({ email });
    return user;
  }
}
