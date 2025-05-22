export class CreateMilestoneDto {
  fkPlayerKboId: number;
  fkMilestoneDefinitionId: number;
  date: string;
  category: string;
  currentRecord: number | string;
}
