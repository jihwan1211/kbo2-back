import { Module } from '@nestjs/common';
import { GameService } from './game.service';
import { GameController } from './game.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { MilestoneModule } from 'src/milestone/milestone.module';
import { TeamModule } from 'src/team/team.module';

@Module({
  imports: [PrismaModule, MilestoneModule, TeamModule],
  providers: [GameService],
  controllers: [GameController],
  exports: [GameService],
})
export class GameModule {}
