export interface IBST {
  insert: (x: number) => void;
  remove: (x: number) => void;
  search: (x: number) => boolean;
  sort: (x: number) => number[];
}
