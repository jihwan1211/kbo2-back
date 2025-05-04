import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MilestoneService } from './milestone.service';
import { PostMilestoneDto } from './dto/create-milestone.dto';

@Controller('milestones')
export class MilestoneController {
  constructor(private readonly milestoneService: MilestoneService) {}

  @Get('definitions')
  getMilestoneDefinitions() {
    return this.milestoneService.getDefinitions();
  }

  getMIlestoneConditions() {
    return this.milestoneService.getConditions();
  }

  @Post('players')
  createMilestones(@Body() postMilestoneDto: PostMilestoneDto) {
    return this.milestoneService.createMilestones(postMilestoneDto);
  }

  @Post('players/:id')
  createOnePlayerMilestones(
    @Param('id') id: string,
    @Body() postMilestoneDto: PostMilestoneDto,
  ) {
    return this.milestoneService.createOnePlayerMilestones(
      Number(id),
      postMilestoneDto,
    );
  }
}
