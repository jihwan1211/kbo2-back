import { Controller, Post, Body, Get, Query, Param } from '@nestjs/common';
import { GameService } from './game.service';
import { UpsertGameDto } from './dto/upsertGame.dto';
import {
  GetMatchupQueryDto,
  GetTodayMatchupQueryDto,
} from './dto/getTodayMatch.dto';
@Controller('games')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Get('')
  getTodayMatchup(@Query() query: GetTodayMatchupQueryDto) {
    return this.gameService.getTodayMatchup(query.date);
  }

  @Get('/:teamSymbols')
  getMatchupDetail(
    @Param('teamSymbols') teamSymbols: string,
    @Query() query: GetMatchupQueryDto,
  ) {
    return this.gameService.getMatchupDetail(teamSymbols, query.dateTime);
  }

  @Post()
  upsertGame(@Body() body: UpsertGameDto) {
    return this.gameService.upsertGame(body);
  }
}
