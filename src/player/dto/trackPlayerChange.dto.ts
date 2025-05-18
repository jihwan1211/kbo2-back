import { IsNumber, IsString, Matches } from 'class-validator';

export class TrackPlayerChangeDto {
  data: TrackPlayerChange[];
}

class TrackPlayerChange {
  @IsNumber()
  teamId: number;

  @IsString()
  name: string;

  @IsString()
  prevBackNumber: string;

  @IsString()
  newBackNumber: string;

  @IsString()
  @Matches(/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/, {
    message: 'date 형식은 YYYY-MM-DD 형식이어야합니다.',
  })
  date: string;
}
