export interface PointInterface {
  x: number;
  y: number;
}

export interface GridCellInterface {
  active: boolean;
  selected: boolean;
  onClick: () => void;
  x?: number;
  y?: number;
}

export interface GridInterface {
  rows?: number;
  columns?: number;
  onClickCell: (x: number, y: number) => void;
  selected: Array<PointInterface | null>;
  active: Array<PointInterface | null>;
}
