import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TeamService {
  private readonly logger = new Logger(TeamService.name);
  constructor(private readonly prisma: PrismaService) {}

  async getTeam(symbol: string) {
    try {
      return this.prisma.team.findFirst({
        where: { symbol },
      });
    } catch (error) {
      this.logger.error('Failed to get team', error);
      throw error;
    }
  }
}
