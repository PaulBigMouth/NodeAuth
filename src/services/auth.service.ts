import RoleRepository from './../repositories/role.repository';
import RoleService from './role.service';
import { Token } from '../models/token.model';
import CryptoHelper from '../utils/crypto';
import AuthRepository from '../repositories/auth.repository';
import TokenService from './token.service';

class AuthService {
  public async signIn(email: string, password: string): Promise<Token | Error> {
    try {
      const user = await AuthRepository.findByEmail(email);
      if (CryptoHelper.comparePasswords(user.password, password)) {
        try {
          const token = await TokenService.create(user);
          return token;
        } catch (error) {
          return error;
        }
      }
    } catch (error) {
      return error;
    }
  }

  public async signUp(email: string, password: string, roleName: string): Promise<Token | Error> {
    try {
      const user = await AuthRepository.findByEmail(email);
      if (!user) {
        const role = await RoleRepository.findByRoleName(roleName);
        if (!role) {
          const newRole = await RoleService.create(roleName);
        }
        const hashPassword = CryptoHelper.hashPassword(password);
        const newUser = await AuthRepository.create(email, hashPassword, roleName);
        const token = await TokenService.create(newUser);
        return token;
      }
      return new Error('This user already exist');
    } catch (error) {
      return error;
    }
  }
}

export default new AuthService();
