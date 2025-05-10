import { Module } from '@nestjs/common';
import { MilestoneService } from './milestone.service';
import { MilestoneController } from './milestone.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { RecordModule } from 'src/record/record.module';
import { PlayerModule } from 'src/player/player.module';
import { RoasterModule } from 'src/roaster/roaster.module';
@Module({
  imports: [PrismaModule, RecordModule, PlayerModule, RoasterModule],
  controllers: [MilestoneController],
  providers: [MilestoneService],
  exports: [MilestoneService],
})
export class MilestoneModule {}
