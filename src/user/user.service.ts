import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../entities/user';
import { User } from '../interfaces/user.interface';
import * as bcrypt from 'bcrypt';
import { Note } from '../interfaces/note.interface';
import { NoteEntity } from '../entities/note';

@Injectable()
export class UserService {
  private readonly salt = 10;
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    @InjectRepository(NoteEntity)
    private readonly noteRepository: Repository<NoteEntity>,
  ) {}

  async create(user: User): Promise<User> {
    const newUser = new UserEntity();
    newUser.firstname = user.firstname;
    newUser.lastname = user.lastname;
    newUser.mail = user.mail;
    newUser.password = await bcrypt.hash(user.password, this.salt);

    return this.userRepository.save(newUser);
  }

  getOne(id: number): Promise<User> {
    return this.userRepository.findOne(id);
  }

  getNotes(id: number): Promise <Note[]> {
    return this.noteRepository.find({
      where: {
        owner: id,
      },
    });
  }

  getAll(): Promise<User[]> {
    return this.userRepository.find();
  }
}
