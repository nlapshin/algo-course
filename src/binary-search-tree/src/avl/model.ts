import { BinaryTreeNode } from '../node';
import { IBST } from '../bst/model';

export interface IAVL extends IBST {
  leftRotation: (node: BinaryTreeNode) => BinaryTreeNode | null ;
  rightRotation: (node: BinaryTreeNode) => BinaryTreeNode | null ;
  leftRightRotation: (node: BinaryTreeNode) => BinaryTreeNode | null ;
  rightLeftRotation: (node: BinaryTreeNode) => BinaryTreeNode | null ;
  rebalance: (node: BinaryTreeNode) => BinaryTreeNode | null ;
  balance: (node: BinaryTreeNode) => BinaryTreeNode | null;
}
