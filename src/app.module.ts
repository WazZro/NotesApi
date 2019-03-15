import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NoteModule } from './note/note.module';
import { Connection } from 'typeorm';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: 'postgresql://odmen:odmen@postgres/noteapi',
      // host: 'localhost',
      // username: 'odmen',
      // password: 'odmen',
      // database: 'noteapi',
      entities: [__dirname + '/entities/*'],
      synchronize: true,
    }),
    NoteModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
