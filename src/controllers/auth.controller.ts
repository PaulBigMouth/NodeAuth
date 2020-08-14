import ErrorHelper from '../utils/errorHandler';
import { Request, Response } from 'express';
import { SignInBody, SignUpBody } from '../types/request.interface';
import AuthService from '../services/auth.service';

class AuthController {
  public async signIn(req: Request, res: Response) {
    try {
      const { email, password } = req.body as SignInBody;
      const token = await AuthService.signIn(email, password);
      return res.status(201).json(token);
    } catch (error) {
      return ErrorHelper.errorHandler(res, error);
    }
  }

  public async signUp(req: Request, res: Response) {
    try {
      const { email, password, role } = req.body as SignUpBody;
      try {
        const token = await AuthService.signUp(email, password, role);
        return res.status(201).json(token);
      } catch (error) {
        return ErrorHelper.errorHandler(res, error);
      }
    } catch (error) {
      return ErrorHelper.errorHandler(res, error);
    }
  }
}

export default new AuthController();
