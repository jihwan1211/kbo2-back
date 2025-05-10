export class GetMilestonesDto {
  id: number;
  date: Date;
  player: {
    id: number;
    name: string;
    backNumber: number;
    team: {
      symbol: string;
      name: string;
    };
  };
  milestoneDefinition: {
    id: number;
    record: string;
    description: string;
    position: string;
    spanYears: number;
    milestoneConditions: {
      id: number;
      category: string;
    }[];
  }[];
}
