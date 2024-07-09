import { Request } from 'express';
import { User } from '../entities/User';

export default interface IRequest extends Request {
  user: User;
}