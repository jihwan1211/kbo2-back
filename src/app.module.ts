import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MilestoneModule } from './milestone/milestone.module';
import { PlayerModule } from './player/player.module';
import { PrismaModule } from './prisma/prisma.module';
import { RecordController } from './record/record.controller';
import { RecordModule } from './record/record.module';

@Module({
  imports: [MilestoneModule, PlayerModule, PrismaModule, RecordModule],
  controllers: [AppController, RecordController],
  providers: [AppService],
})
export class AppModule {}
