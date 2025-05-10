import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { PlayerService } from 'src/player/player.service';
import { RecordService } from 'src/record/record.service';
import {
  CreateMilestoneDto,
  PostMilestoneDto,
} from './dto/create-milestone.dto';
import { AggreatePitcherRecordDto } from 'src/record/dto/aggreatePitcherRecord.dto';
import { AggreateBatterRecordDto } from 'src/record/dto/aggreateBatterRecord.dto';
import { RoasterService } from 'src/roaster/roaster.service';
import { pipe, partition, toArray } from '@fxts/core';
import { GetMilestonesDto } from './dto/getMilestones.dto';
@Injectable()
export class MilestoneService {
  private readonly logger = new Logger(MilestoneService.name);
  constructor(
    private readonly prisma: PrismaService,
    private readonly recordService: RecordService,
    private readonly playerService: PlayerService,
    private readonly roasterService: RoasterService,
  ) {}

  async getMatchupRecords(homeTeamId: number, awayTeamId: number, date: Date) {
    try {
      const [homeRoasterPlayers, awayRoasterPlayers] = await Promise.all([
        this.roasterService.getRoasterPlayers(homeTeamId, date),
        this.roasterService.getRoasterPlayers(awayTeamId, date),
      ]);

      const [homeTeamMilestones, awayTeamMilestones] = await Promise.all([
        this.getMilestones(homeTeamId, date),
        this.getMilestones(awayTeamId, date),
      ]);

      const [
        homeTeamRoasterMatchedMilestones,
        homeTeamRoasterUnmatchedMilestones,
      ] = await pipe(
        homeTeamMilestones,
        partition((milestone) =>
          homeRoasterPlayers.includes(milestone.player.id),
        ),
        toArray,
      );

      const [
        awayTeamRoasterMatchedMilestones,
        awayTeamRoasterUnmatchedMilestones,
      ] = await pipe(
        awayTeamMilestones,
        partition((milestone) =>
          awayRoasterPlayers.includes(milestone.player.id),
        ),
        toArray,
      );

      return {
        homeTeamRoasterMatchedMilestones,
        homeTeamRoasterUnmatchedMilestones,
        awayTeamRoasterMatchedMilestones,
        awayTeamRoasterUnmatchedMilestones,
      };
    } catch (error) {
      this.logger.error('Failed to get matchup records', error);
      throw error;
    }
  }

  async getMilestones(teamId: number, date: Date): Promise<GetMilestonesDto[]> {
    try {
      const milestones = await this.prisma.milestone_record.findMany({
        where: {
          date: date,
          player: {
            team: {
              id: teamId,
            },
          },
        },
        include: {
          player: {
            select: {
              id: true,
              name: true,
              backNumber: true,
              team: {
                select: {
                  symbol: true,
                  name: true,
                },
              },
            },
          },
          milestoneDefinition: {
            select: {
              id: true,
              record: true,
              description: true,
              position: true,
              spanYears: true,
              milestoneConditions: {
                select: {
                  id: true,
                  category: true,
                },
              },
            },
          },
        },
      });

      return Object.values(
        milestones.reduce((acc, milestone) => {
          if (!acc[milestone.player.id]) {
            acc[milestone.player.id] = {
              id: milestone.id,
              date: milestone.date,
              player: {
                id: milestone.player.id,
                name: milestone.player.name,
                backNumber: milestone.player.backNumber,
                team: {
                  ...milestone.player.team,
                },
              },
              milestoneDefinition: [
                {
                  ...milestone.milestoneDefinition,
                  milestoneConditions: [
                    ...milestone.milestoneDefinition.milestoneConditions,
                  ],
                },
              ],
            };
          } else {
            acc[milestone.player.id].milestoneDefinition.push({
              ...milestone.milestoneDefinition,
              milestoneConditions: [
                ...milestone.milestoneDefinition.milestoneConditions,
              ],
            });
          }
          return acc;
        }, {}),
      );
    } catch (err) {
      this.logger.error('Failed to get milestones', err);
      throw err;
    }
  }

  getDefinitions() {
    try {
      return this.prisma.milestone_definition.findMany();
    } catch (err) {
      this.logger.error('Failed to get milestone definitions', err);
      throw err;
    }
  }

  getConditions() {
    try {
      return this.prisma.milestone_condition.findMany();
    } catch (err) {
      this.logger.error('Failed to get milestone conditions', err);
      throw err;
    }
  }

  async createMilestones(postMilestoneDto: PostMilestoneDto) {
    try {
      const activeBatters = await this.playerService.getActiveBatters();
      const activePitchers = await this.playerService.getAcivePitchers();

      const aggregateBatterRecords =
        this.recordService.getAggregateBatterRecords(
          activeBatters,
          postMilestoneDto.date,
        );
      const aggregatePitcherRecords =
        this.recordService.getAggregatePitcherRecords(
          activePitchers,
          postMilestoneDto.date,
        );

      for await (const record of aggregateBatterRecords)
        await this.createBatterMilestoneRecord(record, postMilestoneDto.date);

      for await (const record of aggregatePitcherRecords) {
        await this.createPitcherMilestoneRecord(record, postMilestoneDto.date);
      }
    } catch (err) {
      this.logger.error('Failed to create milestones', err);
      throw err;
    }
  }

  async createOnePlayerMilestones(
    id: number,
    postMilestoneDto: PostMilestoneDto,
  ) {
    try {
      const player = await this.playerService.findOne(id);

      if (!player || player.position === null)
        throw new NotFoundException(
          `player id : ${id} 선수는 존재하지 않거나, milestone 연산을 수행할 수 없습니다.`,
        );

      if (player.position === '투수') {
        const aggregatePitcherRecords =
          this.recordService.getAggregatePitcherRecords(
            [player],
            postMilestoneDto.date,
          );
        for await (const record of aggregatePitcherRecords) {
          await this.createPitcherMilestoneRecord(
            record,
            postMilestoneDto.date,
          );
        }
      } else {
        const aggregateBatterRecords =
          this.recordService.getAggregateBatterRecords(
            [player],
            postMilestoneDto.date,
          );
        for await (const record of aggregateBatterRecords)
          await this.createBatterMilestoneRecord(record, postMilestoneDto.date);
      }
    } catch (err) {
      this.logger.error('Failed to create one player milestones', err);
      throw err;
    }
  }

  async createBatterMilestoneRecord(
    record: AggreateBatterRecordDto,
    date: string,
  ) {
    try {
      const milestoneConditions = await this.getConditions();
      milestoneConditions.forEach(async (condition) => {
        if (condition.category === 'G') {
          if (
            record.G >= condition.target - 10 &&
            record.G <= condition.target
          ) {
            this.logger.log(
              `player : ${record.fkPlayerId}, 출장수 : ${record.G}, condition : ${condition.target} ${condition.category} `,
            );
            await this.createMilestone({
              fkPlayerKboId: record.fkPlayerId,
              fkMilestoneDefinitionId: condition.fkMilestoneDefinitionId,
              date,
            });
          }
        } else if (condition.category === 'PA') {
          if (
            record.PA >= condition.target - 30 &&
            record.PA <= condition.target
          ) {
            this.logger.log(
              `player : ${record.fkPlayerId}, 타석 : ${record.PA}, condition : ${condition.target} ${condition.category} `,
            );
            await this.createMilestone({
              fkPlayerKboId: record.fkPlayerId,
              fkMilestoneDefinitionId: condition.fkMilestoneDefinitionId,
              date,
            });
          }
        } else if (condition.category === 'R') {
          if (
            record.R >= condition.target - 10 &&
            record.R <= condition.target
          ) {
            this.logger.log(
              `player : ${record.fkPlayerId}, 득점 : ${record.R}, condition : ${condition.target} ${condition.category} `,
            );
            await this.createMilestone({
              fkPlayerKboId: record.fkPlayerId,
              fkMilestoneDefinitionId: condition.fkMilestoneDefinitionId,
              date,
            });
          }
        } else if (condition.category === 'H') {
          if (
            record.H >= condition.target - 20 &&
            record.H <= condition.target
          ) {
            this.logger.log(
              `player : ${record.fkPlayerId}, 안타 : ${record.H}, condition : ${condition.target} ${condition.category} `,
            );
            await this.createMilestone({
              fkPlayerKboId: record.fkPlayerId,
              fkMilestoneDefinitionId: condition.fkMilestoneDefinitionId,
              date,
            });
          }
        } else if (condition.category === 'twoB') {
          if (
            record.twoB >= condition.target - 10 &&
            record.twoB <= condition.target
          ) {
            this.logger.log(
              `player : ${record.fkPlayerId}, 2루타 : ${record.twoB}, condition : ${condition.target} ${condition.category} `,
            );
            await this.createMilestone({
              fkPlayerKboId: record.fkPlayerId,
              fkMilestoneDefinitionId: condition.fkMilestoneDefinitionId,
              date,
            });
          }
        } else if (condition.category === 'threeB') {
          if (
            record.threeB >= condition.target - 3 &&
            record.threeB <= condition.target
          ) {
            this.logger.log(
              `player : ${record.fkPlayerId}, 3루타 : ${record.threeB}, condition : ${condition.target} ${condition.category} `,
            );
            await this.createMilestone({
              fkPlayerKboId: record.fkPlayerId,
              fkMilestoneDefinitionId: condition.fkMilestoneDefinitionId,
              date,
            });
          }
        } else if (condition.category === 'HR') {
          if (
            record.HR >= condition.target - 5 &&
            record.HR <= condition.target
          ) {
            this.logger.log(
              `player : ${record.fkPlayerId}, 홈런 : ${record.HR}, condition : ${condition.target} ${condition.category} `,
            );
            await this.createMilestone({
              fkPlayerKboId: record.fkPlayerId,
              fkMilestoneDefinitionId: condition.fkMilestoneDefinitionId,
              date,
            });
          }
        } else if (condition.category === 'TB') {
          if (
            record.TB >= condition.target - 50 &&
            record.TB <= condition.target
          ) {
            this.logger.log(
              `player : ${record.fkPlayerId}, 루타 : ${record.TB}, condition : ${condition.target} ${condition.category} `,
            );
            await this.createMilestone({
              fkPlayerKboId: record.fkPlayerId,
              fkMilestoneDefinitionId: condition.fkMilestoneDefinitionId,
              date,
            });
          }
        } else if (condition.category === 'RBI') {
          if (
            record.RBI >= condition.target - 10 &&
            record.RBI <= condition.target
          ) {
            this.logger.log(
              `player : ${record.fkPlayerId}, 타점 : ${record.RBI}, condition : ${condition.target} ${condition.category} `,
            );
            await this.createMilestone({
              fkPlayerKboId: record.fkPlayerId,
              fkMilestoneDefinitionId: condition.fkMilestoneDefinitionId,
              date,
            });
          }
        } else if (condition.category === 'SB') {
          if (
            record.SB >= condition.target - 10 &&
            record.SB <= condition.target
          ) {
            this.logger.log(
              `player : ${record.fkPlayerId}, 도루 : ${record.SB}, condition : ${condition.target} ${condition.category} `,
            );
            await this.createMilestone({
              fkPlayerKboId: record.fkPlayerId,
              fkMilestoneDefinitionId: condition.fkMilestoneDefinitionId,
              date,
            });
          }
        } else if (condition.category === 'BB') {
          if (
            record.BB >= condition.target - 10 &&
            record.BB <= condition.target
          ) {
            this.logger.log(
              `player : ${record.fkPlayerId}, 볼넷 : ${record.BB}, condition : ${condition.target} ${condition.category} `,
            );
            await this.createMilestone({
              fkPlayerKboId: record.fkPlayerId,
              fkMilestoneDefinitionId: condition.fkMilestoneDefinitionId,
              date,
            });
          }
        } else if (condition.category === 'HBP') {
          if (
            record.HBP >= condition.target - 5 &&
            record.HBP <= condition.target
          ) {
            this.logger.log(
              `player : ${record.fkPlayerId}, 사구 : ${record.HBP}, condition : ${condition.target} ${condition.category} `,
            );
            await this.createMilestone({
              fkPlayerKboId: record.fkPlayerId,
              fkMilestoneDefinitionId: condition.fkMilestoneDefinitionId,
              date,
            });
          }
        }
      });
    } catch (err) {
      this.logger.error('Failed to create batter milestone record', err);
      throw err;
    }
  }

  async createPitcherMilestoneRecord(
    record: AggreatePitcherRecordDto,
    date: string,
  ) {
    try {
      const milestoneConditions = await this.getConditions();
      milestoneConditions.forEach(async (condition) => {
        if (condition.category === 'G') {
          if (
            record.G >= condition.target - 5 &&
            record.G <= condition.target
          ) {
            this.logger.log(
              `player : ${record.fkPlayerId}, 출장수 : ${record.G}, condition : ${condition.target} ${condition.category} `,
            );
            await this.createMilestone({
              fkPlayerKboId: record.fkPlayerId,
              fkMilestoneDefinitionId: condition.fkMilestoneDefinitionId,
              date,
            });
          }
        } else if (condition.category === 'CG') {
          if (
            record.CG >= condition.target - 1 &&
            record.CG <= condition.target
          ) {
            this.logger.log(
              `player : ${record.fkPlayerId}, 완투 : ${record.CG}, condition : ${condition.target} ${condition.category} `,
            );
            await this.createMilestone({
              fkPlayerKboId: record.fkPlayerId,
              fkMilestoneDefinitionId: condition.fkMilestoneDefinitionId,
              date,
            });
          }
        } else if (condition.category === 'SHO') {
          if (
            record.SHO >= condition.target - 1 &&
            record.SHO <= condition.target
          ) {
            this.logger.log(
              `player : ${record.fkPlayerId}, 완봉 : ${record.SHO}, condition : ${condition.target} ${condition.category} `,
            );
            await this.createMilestone({
              fkPlayerKboId: record.fkPlayerId,
              fkMilestoneDefinitionId: condition.fkMilestoneDefinitionId,
              date,
            });
          }
        } else if (condition.category === 'W') {
          if (
            record.W >= condition.target - 3 &&
            record.W <= condition.target
          ) {
            this.logger.log(
              `player : ${record.fkPlayerId}, 승 : ${record.W}, condition : ${condition.target} ${condition.category} `,
            );
            await this.createMilestone({
              fkPlayerKboId: record.fkPlayerId,
              fkMilestoneDefinitionId: condition.fkMilestoneDefinitionId,
              date,
            });
          }
        } else if (condition.category === 'SV') {
          if (
            record.SV >= condition.target - 5 &&
            record.SV <= condition.target
          ) {
            this.logger.log(
              `player : ${record.fkPlayerId}, 선발승 : ${record.SV}, condition : ${condition.target} ${condition.category} `,
            );
            await this.createMilestone({
              fkPlayerKboId: record.fkPlayerId,
              fkMilestoneDefinitionId: condition.fkMilestoneDefinitionId,
              date,
            });
          }
        } else if (condition.category === 'HLD') {
          if (
            record.HLD >= condition.target - 5 &&
            record.HLD <= condition.target
          ) {
            this.logger.log(
              `player : ${record.fkPlayerId}, 홀드 : ${record.HLD}, condition : ${condition.target} ${condition.category} `,
            );
            await this.createMilestone({
              fkPlayerKboId: record.fkPlayerId,
              fkMilestoneDefinitionId: condition.fkMilestoneDefinitionId,
              date,
            });
          }
        } else if (condition.category === 'TBF') {
          if (
            record.TBF >= condition.target - 50 &&
            record.TBF <= condition.target
          ) {
            this.logger.log(
              `player : ${record.fkPlayerId}, 타자수 : ${record.TBF}, condition : ${condition.target} ${condition.category} `,
            );
            await this.createMilestone({
              fkPlayerKboId: record.fkPlayerId,
              fkMilestoneDefinitionId: condition.fkMilestoneDefinitionId,
              date,
            });
          }
        } else if (condition.category === 'IP') {
          const ipArray = record.IP.split(' ');
          let IP = 0;
          if (!ipArray[0].includes('/')) {
            IP = Number(ipArray[0]);
          }

          if (IP >= condition.target - 20 && IP <= condition.target) {
            this.logger.log(
              `player : ${record.fkPlayerId}, 이닝 : ${IP}, condition : ${condition.target} ${condition.category} `,
            );
            await this.createMilestone({
              fkPlayerKboId: record.fkPlayerId,
              fkMilestoneDefinitionId: condition.fkMilestoneDefinitionId,
              date,
            });
          }
        } else if (condition.category === 'SO') {
          if (
            record.SO >= condition.target - 30 &&
            record.SO <= condition.target
          ) {
            this.logger.log(
              `player : ${record.fkPlayerId}, 삼진 : ${record.SO}, condition : ${condition.target} ${condition.category} `,
            );
            await this.createMilestone({
              fkPlayerKboId: record.fkPlayerId,
              fkMilestoneDefinitionId: condition.fkMilestoneDefinitionId,
              date,
            });
          }
        }
      });
    } catch (err) {
      this.logger.error('Failed to create pitcher milestone record', err);
      throw err;
    }
  }

  async createMilestone(createMilestoneDto: CreateMilestoneDto) {
    try {
      const nextDay = new Date(createMilestoneDto.date);
      nextDay.setDate(nextDay.getDate() + 1);

      return this.prisma.milestone_record.create({
        data: {
          player: {
            connect: { kboId: createMilestoneDto.fkPlayerKboId },
          },
          milestoneDefinition: {
            connect: { id: createMilestoneDto.fkMilestoneDefinitionId },
          },
          date: nextDay,
        },
      });
    } catch (err) {
      this.logger.error('Failed to insert milestone', err);
      throw err;
    }
  }
}
