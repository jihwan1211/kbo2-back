import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpsertGameDto } from './dto/upsertGame.dto';
import { MilestoneService } from 'src/milestone/milestone.service';
import { TeamService } from 'src/team/team.service';
import { GetTodayMatchDto } from './dto/getTodayMatch.dto';
import { plainToInstance } from 'class-transformer';
import { DateDto } from 'src/common/dto/date.dto';
import { convertKSTtoUTC } from 'src/utils/date.utils';

@Injectable()
export class GameService {
  private readonly logger = new Logger(GameService.name);
  constructor(
    private readonly prisma: PrismaService,
    private readonly milestoneService: MilestoneService,
    private readonly teamService: TeamService,
  ) {}

  async getTodayMatchup(dateDto: DateDto) {
    try {
      const { date } = dateDto;
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

      return plainToInstance(GetTodayMatchDto, todayMatchup, {
        excludeExtraneousValues: true,
      });
    } catch (err) {
      this.logger.error('error while getting today matchup', err);
      throw err;
    }
  }

  /* 경기 상세 페이지 */
  async getMatchupDetail(teamSymbols: string, dateTime: string) {
    try {
      const awayTeamSymbol = teamSymbols.substring(0, 2);
      const homeTeamSymbol = teamSymbols.substring(2);
      const year = parseInt(dateTime.substring(0, 4), 10);
      const month = parseInt(dateTime.substring(4, 6), 10) - 1; // 월은 0부터 시작 (0: 1월, 11: 12월)
      const day = parseInt(dateTime.substring(6, 8), 10);
      const hour = parseInt(dateTime.substring(8, 10), 10);
      const minute = parseInt(dateTime.substring(10, 12), 10);

      const matchUpDateTime = new Date(
        Date.UTC(year, month, day, hour, minute),
      );
      const startOfDay = new Date(
        Date.UTC(
          matchUpDateTime.getUTCFullYear(),
          matchUpDateTime.getUTCMonth(),
          matchUpDateTime.getUTCDate(),
        ),
      );

      const [awayTeam, homeTeam] = await Promise.all([
        this.teamService.getTeam(awayTeamSymbol),
        this.teamService.getTeam(homeTeamSymbol),
      ]);

      const todayMatchup = await this.prisma.game.findFirst({
        where: {
          date: matchUpDateTime,
          homeTeam: {
            symbol: homeTeamSymbol,
          },
          awayTeam: {
            symbol: awayTeamSymbol,
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

      const milestones = await this.milestoneService.getMatchupRecords(
        homeTeam.id,
        awayTeam.id,
        startOfDay,
      );

      return {
        id: todayMatchup.id,
        date: todayMatchup.date,
        homeTeamScore: todayMatchup.homeTeamScore,
        awayTeamScore: todayMatchup.awayTeamScore,
        homeTeam: {
          ...todayMatchup.homeTeam,
          roasterMatchedMilestones: milestones.homeTeamRoasterMatchedMilestones,
          roasterUnmatchedMilestones:
            milestones.homeTeamRoasterUnmatchedMilestones,
        },
        awayTeam: {
          ...todayMatchup.awayTeam,
          roasterMatchedMilestones: milestones.awayTeamRoasterMatchedMilestones,
          roasterUnmatchedMilestones:
            milestones.awayTeamRoasterUnmatchedMilestones,
        },
      };
    } catch (err) {
      this.logger.error('error while getting matchup detail', err);
      throw err;
    }
  }

  async upsertGame(upsertGameDto: UpsertGameDto) {
    try {
      upsertGameDto.gameSchedule.forEach(async (game) => {
        const utcDate = convertKSTtoUTC(game.date);

        await this.prisma.game.upsert({
          where: {
            date_fkHomeTeamId_fkAwayTeamId: {
              date: utcDate,
              fkHomeTeamId: game.homeTeamId,
              fkAwayTeamId: game.awayTeamId,
            },
          },
          update: {
            date: utcDate,
            homeTeamScore: game.homeTeamScore,
            awayTeamScore: game.awayTeamScore,
            memo: game.memo,
          },
          create: {
            date: utcDate,
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
