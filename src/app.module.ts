import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MilestoneModule } from './milestone/milestone.module';
import { PlayerModule } from './player/player.module';

@Module({
  imports: [MilestoneModule, PlayerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
