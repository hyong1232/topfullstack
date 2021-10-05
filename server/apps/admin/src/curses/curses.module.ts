import { Module } from '@nestjs/common';
import { CursesController } from './curses.controller';

@Module({
  controllers: [CursesController]
})
export class CursesModule {}
