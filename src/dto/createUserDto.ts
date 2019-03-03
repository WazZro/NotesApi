import { User } from '../interfaces/user.interface';

export class CreateUserDto implements User {
  readonly firstname: string;
  readonly lastname: string;
  readonly mail: string;
  readonly password: string;
}
