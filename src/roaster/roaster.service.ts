import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { InsertRoasterDto } from './dto/insertRoaster.dto';
import { PlayerService } from 'src/player/player.service';

@Injectable()
export class RoasterService {
  private readonly logger = new Logger(RoasterService.name);
  constructor(
    private readonly prisma: PrismaService,
    private readonly playerService: PlayerService,
  ) {}

  async insertRoaster(insertRoasterDto: InsertRoasterDto) {
    const { date, roasterData } = insertRoasterDto;
    this.logger.debug(`${date} 로스터 등록`);
    try {
      roasterData.forEach(async (roasterData) => {
        const { teamSymbol, backNumber, name } = roasterData;

        const player = await this.playerService.findOneRoaster({
          teamSymbol,
          backNumber,
          name,
        });

        if (!player) {
          this.logger.error('Player not found', teamSymbol, backNumber, name);
          throw new NotFoundException('Player not found');
        }

        await this.prisma.roaster.create({
          data: {
            player: {
              connect: { kboId: player.kboId },
            },
            date: new Date(date),
          },
        });
      });
    } catch (error) {
      this.logger.error('error while inserting roaster', error);
      throw error;
    }
  }
}
