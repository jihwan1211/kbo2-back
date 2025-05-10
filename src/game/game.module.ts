import { Module } from '@nestjs/common';
import { GameService } from './game.service';
import { GameController } from './game.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { MilestoneModule } from 'src/milestone/milestone.module';

@Module({
  imports: [PrismaModule, MilestoneModule],
  providers: [GameService],
  controllers: [GameController],
  exports: [GameService],
})
export class GameModule {}
