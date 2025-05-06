import { IsDate, IsInt, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class GameEntity {
  @IsInt()
  id: number;

  @IsDate()
  @Type(() => Date)
  date: Date;

  @IsInt()
  fkHomeTeamId: number;

  @IsInt()
  fkAwayTeamId: number;

  @IsOptional()
  @IsInt()
  homeTeamScore: number | null;

  @IsOptional()
  @IsInt()
  awayTeamScore: number | null;

  @IsOptional()
  @IsString()
  memo: string | null;
}
