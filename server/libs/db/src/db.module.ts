import { Global, Module } from '@nestjs/common';
import { DbService } from './db.service';

import { TypegooseModule } from 'nestjs-typegoose';
import { User } from './models/users.model';
import { Course } from './models/course.model';
import { Episode } from './models/episode.model';
import { ConfigModule } from "@nestjs/config";

const models =  TypegooseModule.forFeature([User, Course, Episode])

@Global() 
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypegooseModule.forRoot(process.env.DB_URL,{
    }),
    models,
  ],
  providers: [DbService],
  exports: [DbService, models],
})
export class DbModule {}
 