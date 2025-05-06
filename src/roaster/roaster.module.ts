import { Module } from '@nestjs/common';
import { RoasterService } from './roaster.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { RoasterController } from './roaster.controller';
import { PlayerModule } from 'src/player/player.module';

@Module({
  imports: [PrismaModule, PlayerModule],
  providers: [RoasterService],
  controllers: [RoasterController],
  exports: [RoasterService],
})
export class RoasterModule {}
