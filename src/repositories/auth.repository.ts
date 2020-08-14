import { User } from '../models/user.model';

class AuthRepository {
  public async findByEmail(email: string): Promise<User> {
    try {
      const user: User = await User.findOne({ email });
      return user;
    } catch (error) {
      return error;
    }
  }

  public async create(email: string, password: string, role: string): Promise<User> {
    try {
      const user: User = await User.create({ email, password, role });
      user.save();
      return user;
    } catch (error) {
      return error;
    }
  }
}

export default new AuthRepository();
