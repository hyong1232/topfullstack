import { DbModule } from '@libs/db';
import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { UsersModule } from './users/users.module';
import { CursesModule } from './curses/curses.module';
import { EpisodesModule } from './episodes/episodes.module';

@Module({
  imports: [
      DbModule,
      UsersModule,
      CursesModule,
      EpisodesModule
  ],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
