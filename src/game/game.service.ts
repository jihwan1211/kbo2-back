import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpsertGameDto } from './dto/upsertGame.dto';

@Injectable()
export class GameService {
  private readonly logger = new Logger(GameService.name);
  constructor(private readonly prisma: PrismaService) {}

  async upsertGame(upsertGameDto: UpsertGameDto) {
    try {
      console.log(upsertGameDto.gameSchedule);
      upsertGameDto.gameSchedule.forEach(async (game) => {
        await this.prisma.game.upsert({
          where: {
            date_fkHomeTeamId_fkAwayTeamId: {
              date: game.date,
              fkHomeTeamId: game.homeTeamId,
              fkAwayTeamId: game.awayTeamId,
            },
          },
          update: {
            date: game.date,
            homeTeamScore: game.homeTeamScore,
            awayTeamScore: game.awayTeamScore,
            memo: game.memo,
          },
          create: {
            date: game.date,
            homeTeam: {
              connect: { id: game.homeTeamId },
            },
            awayTeam: {
              connect: { id: game.awayTeamId },
            },
            homeTeamScore: game.homeTeamScore,
            awayTeamScore: game.awayTeamScore,
            memo: game.memo,
          },
        });
      });
    } catch (error) {
      this.logger.error('error while upserting game', error);
      throw error;
    }
  }
}
