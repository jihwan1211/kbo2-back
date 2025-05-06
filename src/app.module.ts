import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MilestoneModule } from './milestone/milestone.module';
import { PlayerModule } from './player/player.module';
import { PrismaModule } from './prisma/prisma.module';
import { RecordController } from './record/record.controller';
import { RecordModule } from './record/record.module';
import { GameController } from './game/game.controller';
import { GameModule } from './game/game.module';
import { TeamModule } from './team/team.module';
import { RoasterController } from './roaster/roaster.controller';
import { RoasterModule } from './roaster/roaster.module';

@Module({
  imports: [
    MilestoneModule,
    PlayerModule,
    PrismaModule,
    RecordModule,
    GameModule,
    TeamModule,
    RoasterModule,
  ],
  controllers: [
    AppController,
    RecordController,
    GameController,
    RoasterController,
  ],
  providers: [AppService],
})
export class AppModule {}
