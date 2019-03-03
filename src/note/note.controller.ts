import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { NoteService } from './note.service';
import { Note } from '../interfaces/note.interface';

@Controller('notes')
export class NoteController {
  private readonly noteService: NoteService;

  constructor(noteService: NoteService) {
    this.noteService = noteService;
  }

  @Post()
  async create(@Body() createNoteDto: Note) {
    await this.noteService.create(createNoteDto);
  }

  @Get(':id')
  getOne(@Param('id') id): Promise<Note> {
    return this.noteService.getOne(id);
  }

  @Put(':id')
  update(@Param('id') id, @Body() note): Promise<any> {
    return this.noteService.updateOne(id, note);
  }

  @Delete(':id')
  deleteOne(@Param('id') id): Promise<any> {
    return this.noteService.deleteOne(id);
  }

  @Get()
  getAll(@Query() params): Promise<Note[]> {
    return this.noteService.getAll(params);
  }
}
