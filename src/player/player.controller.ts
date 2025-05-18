import { Controller, Get, Patch, Body } from '@nestjs/common';
import { PlayerService } from './player.service';
import { TrackPlayerChangeDto } from './dto/trackPlayerChange.dto';
@Controller('players')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Get('active')
  getActivePlayers() {
    return this.playerService.getAcivePlayers();
  }

  @Patch('/player')
  updatePlayer(@Body() body: TrackPlayerChangeDto) {
    return this.playerService.patchTrackPlayerChange(body);
  }
}
