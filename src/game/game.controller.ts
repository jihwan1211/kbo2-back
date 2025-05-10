import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { GameService } from './game.service';
import { UpsertGameDto } from './dto/upsertGame.dto';
import { GetTodayMatchupQueryDto } from './dto/getTodayMatch.dto';
@Controller('games')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Get()
  getTodayMatchup(@Query() query: GetTodayMatchupQueryDto) {
    return this.gameService.getTodayMatchup(query.date);
  }

  @Post()
  upsertGame(@Body() body: UpsertGameDto) {
    return this.gameService.upsertGame(body);
  }
}
