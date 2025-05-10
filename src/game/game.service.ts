import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpsertGameDto } from './dto/upsertGame.dto';
// import { GetTodayMatchDto } from './dto/getTodayMatch.dto';
// import { plainToInstance } from 'class-transformer';
import { MilestoneService } from 'src/milestone/milestone.service';

@Injectable()
export class GameService {
  private readonly logger = new Logger(GameService.name);
  constructor(
    private readonly prisma: PrismaService,
    private readonly milestoneService: MilestoneService,
  ) {}

  async getTodayMatchup(date: string) {
    try {
      const today = new Date(date);
      const startOfDay = new Date(
        Date.UTC(
          today.getUTCFullYear(),
          today.getUTCMonth(),
          today.getUTCDate(),
        ),
      );
      const endOfDay = new Date(
        Date.UTC(
          today.getUTCFullYear(),
          today.getUTCMonth(),
          today.getUTCDate() + 1,
        ),
      );

      const todayMatchup = await this.prisma.game.findMany({
        where: {
          date: {
            gt: startOfDay,
            lt: endOfDay,
          },
        },
        include: {
          homeTeam: {
            select: {
              id: true,
              symbol: true,
              name: true,
            },
          },
          awayTeam: {
            select: {
              id: true,
              symbol: true,
              name: true,
            },
          },
        },
      });

      return Promise.all(
        todayMatchup.map(async (matchup) => {
          const milestones = await this.milestoneService.getMatchupRecords(
            matchup.homeTeam.id,
            matchup.awayTeam.id,
            startOfDay,
          );

          return {
            id: matchup.id,
            date: matchup.date,
            homeTeamScore: matchup.homeTeamScore,
            awayTeamScore: matchup.awayTeamScore,
            homeTeam: {
              ...matchup.homeTeam,
              roasterMatchedMilestones:
                milestones.homeTeamRoasterMatchedMilestones,
              roasterUnmatchedMilestones:
                milestones.homeTeamRoasterUnmatchedMilestones,
            },
            awayTeam: {
              ...matchup.awayTeam,
              roasterMatchedMilestones:
                milestones.awayTeamRoasterMatchedMilestones,
              roasterUnmatchedMilestones:
                milestones.awayTeamRoasterUnmatchedMilestones,
            },
          };
        }),
      );

      // return plainToInstance(GetTodayMatchDto, todayMatchup, {
      //   excludeExtraneousValues: true,
      // });
    } catch (err) {
      this.logger.error('error while getting today matchup', err);
      throw err;
    }
  }

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
