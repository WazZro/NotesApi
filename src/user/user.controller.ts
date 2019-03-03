import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '../interfaces/user.interface';
import { Note } from '../interfaces/note.interface';

@Controller('users')
export class UserController {
  private readonly userService: UserService;
  constructor(userService: UserService) {
    this.userService = userService;
  }

  @Post()
  async create(@Body() user: User) {
    await this.userService.create(user);
  }

  @Get(':id')
  getOne(@Param() id): Promise<User> {
    return this.userService.getOne(id);
  }

  @Get(':id/notes')
  getNotes(@Param() id): Promise<Note[]> {
    return this.userService.getNotes(id);
  }

  @Get()
  getAll(): Promise<User[]> {
    return this.userService.getAll();
  }
}
