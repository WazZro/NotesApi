import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NoteEntity } from '../entities/note';
import { Repository } from 'typeorm';
import { Note } from '../interfaces/note.interface';
import { UserEntity } from '../entities/user';

@Injectable()
export class NoteService {
  constructor(
    @InjectRepository(NoteEntity)
    private readonly noteRepository: Repository<NoteEntity>,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async create(note: Note): Promise<NoteEntity> {
    const newNote = new NoteEntity();
    newNote.text = note.text;
    newNote.title = note.title;

    newNote.owner = await this.userRepository.findOne({
      where: {
        id: note.ownerid,
      },
    });

    return this.noteRepository.save(newNote);
  }

  getOne(id: number): Promise<NoteEntity> {
    return this.noteRepository.findOne(id);
  }

  deleteOne(id: number): Promise<any> {
    return this.noteRepository.delete(id);
  }

  updateOne(id: number, body: Note): Promise<any> {
    return this.noteRepository.update(id, {
      title: body.title,
      text: body.text,
    });
  }

  getAll(params): Promise<NoteEntity[]> {
    if (params.user) {
      return this.noteRepository.find({
        where: {
          owner: params.user,
        },
      });
    }

    return this.noteRepository.find();
  }
}
