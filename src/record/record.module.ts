import { Module } from '@nestjs/common';
import { RecordService } from './record.service';
import { PrismaModule } from 'src/prisma/prisma.module';
@Module({
  imports: [PrismaModule],
  providers: [RecordService],
  exports: [RecordService],
})
export class RecordModule {}
