import { PartialType } from '@nestjs/mapped-types';
import { PitcherRecord } from '../entities/record.entity';

export class AggreatePitcherRecordDto extends PartialType(PitcherRecord) {}
