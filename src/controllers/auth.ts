import { AuthService } from '../services/auth';

export class Auth {
  constructor(private authService: AuthService) {}
  public async signIn(req, res) {
    try {
    } catch (error) {}
  }

  public async signUp(req, res) {
    try {
      const { email, password } = req.body;
      this.authService.signUp(email, password);
    } catch (error) {}
  }
}
