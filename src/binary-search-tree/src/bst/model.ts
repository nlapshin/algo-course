import { BinaryTreeNode } from '../node';

export interface IBST {
  insert: (x: number) => void;
  remove: (x: number) => boolean;
  search: (x: number) => boolean;
  find: (value: number) => BinaryTreeNode | null;
  sort: (x: number) => number[];
}
