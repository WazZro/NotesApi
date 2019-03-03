import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NoteEntity } from '../entities/note';
import { NoteService } from './note.service';
import { NoteController } from './note.controller';
import { UserEntity } from '../entities/user';

@Module({
  imports: [TypeOrmModule.forFeature([NoteEntity, UserEntity])],
  providers: [NoteService],
  controllers: [NoteController],
})
export class NoteModule {}
