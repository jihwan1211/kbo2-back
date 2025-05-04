import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { BatterRecord, PitcherRecord } from './entities/record.entity';
import { Player } from 'src/player/entities/player.entity';
import { addIp } from 'src/utils/record';
import { map } from '@fxts/core';

@Injectable()
export class RecordService {
  private readonly logger = new Logger(RecordService.name);
  constructor(private readonly prisma: PrismaService) {}

  async *getAggregateBatterRecords(players: Player[], date: string) {
    try {
      yield* map(async (player) => {
        const yearlyRecords = await this.getBatterYearlyRecords(player.kboId);
        const dailyRecords = await this.getBatterDailyRecords(
          player.kboId,
          date,
        );
        const temp = this.sumBatterRecords([...yearlyRecords, ...dailyRecords]);
        return {
          ...temp,
          fkPlayerId: player.kboId,
        };
      }, players);
    } catch (err) {
      this.logger.error('Failed to get aggregate batter records', err);
      throw err;
    }
  }

  async *getAggregatePitcherRecords(players: Player[], date: string) {
    try {
      yield* map(async (player) => {
        const yearlyRecords = await this.getPitcherYearlyRecords(player.kboId);
        const dailyRecords = await this.getPitcherDailyRecords(
          player.kboId,
          date,
        );
        const temp = this.sumPitcherRecords([
          ...yearlyRecords,
          ...dailyRecords,
        ]);
        return {
          ...temp,
          fkPlayerId: player.kboId,
        };
      }, players);
    } catch (err) {
      this.logger.error('Failed to get aggregate pitcher records', err);
      throw err;
    }
  }

  getBatterYearlyRecords(id: number) {
    try {
      return this.prisma.batter_yearly_record.findMany({
        where: {
          fkPlayerId: id,
          season: 'SS',
          year: {
            lt: new Date().getFullYear(),
          },
        },
      });
    } catch (err) {
      this.logger.error(`Failed to get batter yearly records ${id}`, err);
      throw err;
    }
  }

  getBatterDailyRecords(id: number, date: string) {
    try {
      return this.prisma.batter_daily_record.findMany({
        where: {
          fkPlayerId: id,
          season: 'SS',
          date: {
            lte: new Date(date).toISOString(),
            gte: new Date('2025-01-01').toISOString(),
          },
        },
      });
    } catch (err) {
      this.logger.error(`Failed to get batter daily records ${id}`, err);
      throw err;
    }
  }

  getPitcherYearlyRecords(id: number) {
    try {
      return this.prisma.pitcher_yearly_record.findMany({
        where: {
          fkPlayerId: id,
          season: 'SS',
          year: {
            lt: new Date().getFullYear(),
          },
        },
      });
    } catch (err) {
      this.logger.error(`Failed to get pitcher yearly records ${id}`, err);
      throw err;
    }
  }

  getPitcherDailyRecords(id: number, date: string) {
    try {
      return this.prisma.pitcher_daily_record.findMany({
        where: {
          fkPlayerId: id,
          season: 'SS',
          date: {
            lte: new Date(date).toISOString(),
            gte: new Date('2025-01-01').toISOString(),
          },
        },
      });
    } catch (err) {
      this.logger.error(`Failed to get pitcher daily records ${id}`, err);
      throw err;
    }
  }

  sumBatterRecords(records: BatterRecord[]) {
    return records.reduce(
      (acc, curr) => {
        return {
          G: acc.G + curr.G,
          PA: acc.PA + curr.PA,
          AB: acc.AB + curr.AB,
          R: acc.R + curr.R,
          H: acc.H + curr.H,
          twoB: acc.twoB + curr.twoB,
          threeB: acc.threeB + curr.threeB,
          HR: acc.HR + curr.HR,
          TB: acc.TB + curr.TB,
          RBI: acc.RBI + curr.RBI,
          SB: acc.SB + curr.SB,
          CS: acc.CS + curr.CS,
          BB: acc.BB + curr.BB,
          HBP: acc.HBP + curr.HBP,
          SO: acc.SO + curr.SO,
          GDP: acc.GDP + curr.GDP,
          E: acc?.E + curr?.E,
        };
      },
      {
        G: 0,
        PA: 0,
        AB: 0,
        R: 0,
        H: 0,
        twoB: 0,
        threeB: 0,
        HR: 0,
        TB: 0,
        RBI: 0,
        SB: 0,
        CS: 0,
        BB: 0,
        HBP: 0,
        SO: 0,
        GDP: 0,
        E: 0,
      },
    );
  }

  sumPitcherRecords(records: PitcherRecord[]) {
    return records.reduce(
      (acc, curr) => {
        return {
          G: acc.G + curr.G,
          CG: acc.CG + curr.CG,
          SHO: acc.SHO + curr.SHO,
          W: acc.W + curr.W,
          L: acc.L + curr.L,
          SV: acc.SV + curr.SV,
          HLD: acc.HLD + curr.HLD,
          TBF: acc.TBF + curr.TBF,
          // 이닝 더하는 부분 봐야됨 ㅇㅇ
          IP: addIp(acc.IP, curr.IP),
          H: acc.H + curr.H,
          HR: acc.HR + curr.HR,
          BB: acc.BB + curr.BB,
          HBP: acc.HBP + curr.HBP,
          SO: acc.SO + curr.SO,
          R: acc.R + curr.R,
          ER: acc.ER + curr.ER,
        };
      },
      {
        G: 0,
        CG: 0,
        SHO: 0,
        W: 0,
        L: 0,
        SV: 0,
        HLD: 0,
        TBF: 0,
        IP: '0',
        H: 0,
        HR: 0,
        BB: 0,
        HBP: 0,
        SO: 0,
        R: 0,
        ER: 0,
      },
    );
  }
}
