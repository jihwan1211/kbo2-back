import { PartialType } from '@nestjs/mapped-types';
import { BatterRecord } from '../entities/record.entity';

export class AggreateBatterRecordDto extends PartialType(BatterRecord) {}
