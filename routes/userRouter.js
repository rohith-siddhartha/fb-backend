import express from 'express';
import { createUserHandler } from '../handlers/createUserHandler.js';

const userRouter = express.Router();

userRouter.post('/', createUserHandler);

export default userRouter;