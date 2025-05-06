import {
  IsArray,
  IsInt,
  IsISO8601,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class GameEntityDto {
  @IsISO8601()
  date: Date;

  @IsInt()
  homeTeamId: number;

  @IsInt()
  awayTeamId: number;

  @IsInt()
  @IsOptional()
  homeTeamScore: number | null;

  @IsInt()
  @IsOptional()
  awayTeamScore: number | null;

  @IsString()
  @IsOptional()
  memo: string | null;
}

export class UpsertGameDto {
  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => GameEntityDto)
  gameSchedule: GameEntityDto[];
}
