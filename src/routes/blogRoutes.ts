import express, { Router, Request, Response } from 'express';
import userControllers from '../controllers/blog';

const router: Router = express.Router();

router.get('/', userControllers.getUsers);
router.post('/', userControllers.createUser);
router.get('/:_id', userControllers.getUser);
router.patch('/:_id', userControllers.userUpgrade);
router.delete('/:_id', userControllers.userDelete);

export default router;