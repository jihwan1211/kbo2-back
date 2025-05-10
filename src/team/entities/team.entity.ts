import { IsInt, IsString } from 'class-validator';

export class TeamEntity {
  @IsInt()
  id: number;

  @IsString()
  symbol: string;

  @IsString()
  name: string;

  @IsInt()
  wins: number;

  @IsInt()
  runnerUp: number;
}
