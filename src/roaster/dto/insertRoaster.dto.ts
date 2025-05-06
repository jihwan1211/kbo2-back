import { IsNotEmpty, IsString, Matches } from 'class-validator';

export class InsertRoaster {
  @IsString()
  teamSymbol: string;

  @IsString()
  backNumber: string;

  @IsString()
  name: string;
}

export class InsertRoasterDto {
  @IsNotEmpty()
  @IsString()
  @Matches(/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/, {
    message: 'date 형식은 YYYY-MM-DD 형식이어야합니다.',
  })
  date: string;
  roasterData: InsertRoaster[];
}
