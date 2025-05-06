import { Controller, Post, Body } from '@nestjs/common';
import { GameService } from './game.service';
import { UpsertGameDto } from './dto/upsertGame.dto';

@Controller('games')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Post()
  upsertGame(@Body() body: UpsertGameDto) {
    return this.gameService.upsertGame(body);
  }
}
