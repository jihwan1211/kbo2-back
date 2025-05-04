export class BatterRecord {
  id: number;
  season: string;
  fkPlayerId: number;
  year?: number;
  G: number;
  PA: number;
  AB: number;
  R: number;
  H: number;
  twoB: number;
  threeB: number;
  HR: number;
  TB: number;
  RBI: number;
  SB: number;
  CS: number;
  BB: number;
  HBP: number;
  SO: number;
  GDP: number;
  E?: number;
}

export class PitcherRecord {
  id: number;
  season: string;
  fkPlayerId: number;
  year?: number; // 연간 기록에만 있음
  date?: Date; // 일간 기록에만 있음
  G: number;
  CG: number;
  SHO: number;
  W: number;
  L: number;
  SV: number;
  HLD: number;
  TBF: number;
  IP: string;
  H: number;
  HR: number;
  BB: number;
  HBP: number;
  SO: number;
  R: number;
  ER: number;
}
