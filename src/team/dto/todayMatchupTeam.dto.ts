import { Expose, Exclude } from 'class-transformer';

export class TodayMatchupTeamDto {
  @Exclude()
  id: number;
  @Expose()
  symbol: string;
  @Expose()
  name: string;
  @Exclude()
  win: number;
  @Exclude()
  runnerUp: number;
}
