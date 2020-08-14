import { User } from './../models/user.model';
import { Role } from './../models/role.model';

class RoleRepository {
  public async create(roleName: string) {
    const role = new Role();
    role.type = roleName;
    role.users = [];
    await role.save();
    return role;
  }

  public update() {}

  public async remove(roleName: string): Promise<string> {
    try {
      const role = await Role.findOne({ type: roleName });
      role.remove();
      return 'role has removed';
    } catch (error) {
      return error;
    }
  }

  public async pushUserToRole(user: User, roleName: string) {
    const role = await Role.findOne({ type: roleName });
    role;
    role.update().fill();
  }

  public async findByRoleName(roleName: string): Promise<Role> {
    const role: Role = await Role.findOne({ type: roleName });
    return role;
  }
}

export default new RoleRepository();
