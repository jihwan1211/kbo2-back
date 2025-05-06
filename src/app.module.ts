import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MilestoneModule } from './milestone/milestone.module';
import { PlayerModule } from './player/player.module';
import { PrismaModule } from './prisma/prisma.module';
import { RecordController } from './record/record.controller';
import { RecordModule } from './record/record.module';
import { GameController } from './game/game.controller';
import { GameService } from './game/game.service';
import { GameModule } from './game/game.module';
import { TeamModule } from './team/team.module';

@Module({
  imports: [MilestoneModule, PlayerModule, PrismaModule, RecordModule, GameModule, TeamModule],
  controllers: [AppController, RecordController, GameController],
  providers: [AppService, GameService],
})
export class AppModule {}
