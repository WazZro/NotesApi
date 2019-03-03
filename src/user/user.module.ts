import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../entities/user';
import { NoteEntity } from '../entities/note';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, NoteEntity])],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
