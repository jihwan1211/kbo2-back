import { Transform, Expose, Exclude } from 'class-transformer';
import { IsString, Matches } from 'class-validator';
import { TodayMatchupTeamDto } from 'src/team/dto/todayMatchupTeam.dto';

export class GetMatchupQueryDto {
  @Transform(({ value }) => value?.trim())
  @IsString()
  @Matches(/^\d{4}\d{2}\d{2}\d{2}\d{2}$/, {
    message: 'YYYYMMDDHHMM 형식으로 입력하세요',
  })
  dateTime: string;
}

export class GetTodayMatchDto {
  @Expose()
  id: number;

  @Expose()
  date: Date;

  @Exclude()
  fk_homeTeamId: number;

  @Exclude()
  fk_awayTeamId: number;

  @Expose()
  homeTeamScore: number;

  @Expose()
  awayTeamScore: number;

  @Expose()
  memo: string;

  @Expose()
  homeTeam: TodayMatchupTeamDto;

  @Expose()
  awayTeam: TodayMatchupTeamDto;
}
