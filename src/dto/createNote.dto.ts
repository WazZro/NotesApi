import { Note } from '../interfaces/note.interface';

export class CreateNoteDto implements Note {
  readonly title: string;
  readonly text: string;
  readonly ownerid: number;
}
