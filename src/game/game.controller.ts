import { Controller, Post, Body, Get, Query, Param } from '@nestjs/common';
import { GameService } from './game.service';
import { UpsertGameDto } from './dto/upsertGame.dto';
import { GetMatchupQueryDto } from './dto/getTodayMatch.dto';
import { DateDto } from 'src/common/dto/date.dto';

@Controller('api/v1/games')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Get('')
  getTodayMatchup(@Query() dateDto: DateDto) {
    return this.gameService.getTodayMatchup(dateDto);
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
