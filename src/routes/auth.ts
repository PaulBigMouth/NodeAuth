import { Router } from 'express';
import AuthController from '../controllers/auth';

const router = Router();

router.post('/signin', AuthController.signIn);
router.post('/signup', AuthController.signUp);

export default router;
