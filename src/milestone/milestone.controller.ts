import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { MilestoneService } from './milestone.service';
import { DateDto } from 'src/common/dto/date.dto';

@Controller('/api/v1/milestones')
export class MilestoneController {
  constructor(private readonly milestoneService: MilestoneService) {}

  @Get()
  getMatchupMilestones(@Query() dateDto: DateDto) {
    return this.milestoneService.getMatchupMilestones(dateDto);
  }

  @Get('definitions')
  getMilestoneDefinitions() {
    return this.milestoneService.getDefinitions();
  }

  getMIlestoneConditions() {
    return this.milestoneService.getConditions();
  }

  @Post('players')
  createMilestones(@Body() dateDto: DateDto) {
    return this.milestoneService.createMilestones(dateDto);
  }

  @Post('players/:id')
  createOnePlayerMilestones(@Param('id') id: string, @Body() dateDto: DateDto) {
    return this.milestoneService.createOnePlayerMilestones(Number(id), dateDto);
  }
}
