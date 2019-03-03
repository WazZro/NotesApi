import { User } from './user.interface';

export interface Note {
  title: string;
  text: string;
  createDate?: Date;
  owner?: User;
  ownerid?: number;
}
