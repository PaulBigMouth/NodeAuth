import { Request, Response } from 'express';
import { SignUpBody } from '../types/request.interface';

export const rolesMiddleware = (req: Request, res: Response, next) => {
  const { role, secretKey } = req.body as SignUpBody;
  try {
    if (role === 'superUser') {
      if (secretKey === process.env.SUPER_USER_SECRET_KEY) {
        next();
      }
    }
    next();
  } catch (error) {
    console.log(error);
  }
};
