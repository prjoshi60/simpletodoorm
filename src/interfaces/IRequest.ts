import { Request } from 'express';
import { Users } from '../entities/User';

export default interface IRequest extends Request {
  user: Users;
}