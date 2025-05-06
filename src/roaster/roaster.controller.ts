import { Controller, Post, Body } from '@nestjs/common';
import { RoasterService } from './roaster.service';
import { InsertRoasterDto } from './dto/insertRoaster.dto';

@Controller('roaster')
export class RoasterController {
  constructor(private readonly roasterService: RoasterService) {}

  @Post()
  async insertRoaster(@Body() insertRoasterDto: InsertRoasterDto) {
    return this.roasterService.insertRoaster(insertRoasterDto);
  }
}
