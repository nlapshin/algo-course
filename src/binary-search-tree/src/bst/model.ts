import { BinaryTreeNode } from '../node';

export interface IBST {
  insert: (x: number) => void;
  remove: (x: number) => void;
  search: (x: number) => boolean;
  find: (value: number) => BinaryTreeNode | null;
  sort: (x: number) => number[];
}
