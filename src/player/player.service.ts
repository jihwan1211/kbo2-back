import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { FindRoasterPlayerDto } from './dto/findRoasterPlayer.dto';
import { TrackPlayerChangeDto } from './dto/trackPlayerChange.dto';

@Injectable()
export class PlayerService {
  private readonly logger = new Logger(PlayerService.name);
  constructor(private readonly prisma: PrismaService) {}

  findOne(id: number) {
    try {
      return this.prisma.player.findUnique({
        where: {
          id: id,
        },
      });
    } catch (err) {
      this.logger.error(`Failed to find player ${id}`, err);
      throw err;
    }
  }

  findOneRoaster(findRoasterPlayerDto: FindRoasterPlayerDto) {
    const { teamSymbol, birth, name } = findRoasterPlayerDto;
    try {
      return this.prisma.player.findFirst({
        where: {
          team: {
            symbol: teamSymbol,
          },
          birth: new Date(birth),
          name: name,
        },
      });
    } catch (err) {
      this.logger.error(
        `Failed to find player ${teamSymbol} ${birth} ${name}`,
        err,
      );
      throw err;
    }
  }
  getAcivePlayers() {
    try {
      return this.prisma.player.findMany({
        where: {
          isActive: true,
        },
      });
    } catch (err) {
      this.logger.error('Failed to get active players', err);
      throw err;
    }
  }

  getActiveBatters() {
    try {
      return this.prisma.player.findMany({
        where: {
          isActive: true,
          position: {
            not: '투수',
          },
          NOT: {
            position: null,
          },
        },
      });
    } catch (err) {
      this.logger.error('Failed to get active batters', err);
      throw err;
    }
  }

  getAcivePitchers() {
    try {
      return this.prisma.player.findMany({
        where: {
          isActive: true,
          position: '투수',
        },
      });
    } catch (err) {
      this.logger.error('Failed to get active pitchers', err);
      throw err;
    }
  }

  async patchTrackPlayerChange(trackPlayerChangeDto: TrackPlayerChangeDto) {
    try {
      const { data } = trackPlayerChangeDto;

      for (const change of data) {
        const player = await this.prisma.player.findFirst({
          where: {
            team: {
              id: change.teamId,
            },
            name: change.name,
            backNumber: change.prevBackNumber,
          },
        });

        if (!player) {
          throw new NotFoundException(
            `Player not found: ID=${change.teamId}, Name=${change.name}, Number=${change.prevBackNumber}`,
          );
        }

        await this.prisma.player.update({
          where: { id: player.id },
          data: { backNumber: change.newBackNumber },
        });
      }

      return {
        message: 'track player change success',
        updatedCount: data.length,
      };
    } catch (err) {
      this.logger.error('Failed to patch track player change', err);
      throw err;
    }
  }
}
