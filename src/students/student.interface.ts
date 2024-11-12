import { Document } from 'mongoose';

export interface IStudent extends Document {
  username: string;
  firstName?: string;
  lastName?: string;
  email: string;
}
