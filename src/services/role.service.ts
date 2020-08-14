import { User } from './../models/user.model';
import RoleRepository from '../repositories/role.repository';

class RoleService {
  public async create(roleName: string) {
    const role = await RoleRepository.create(roleName);
  }

  public async addUserToRole(user: User) {}

  public update() {}

  public async remove(roleName: string): Promise<string> {
    const message = await RoleRepository.remove(roleName);
    return message;
  }
}

export default new RoleService();
