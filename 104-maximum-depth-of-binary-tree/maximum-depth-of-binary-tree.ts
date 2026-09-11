/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function maxDepth(root: TreeNode | null): number {
    if(root==null){
        return 0;
    }
    let arrd:number[]=[];
    function dfs(depth:number, node:TreeNode): void{
        if(node.left==null&&node.right==null){
            arrd.push(depth);
        }
        if(node.left!=null)
        dfs(depth+1,node.left);
        if(node.right!=null)
        dfs(depth+1,node.right);
    }
    dfs(1,root);
    arrd.sort((a,b)=>a-b);
    return arrd[arrd.length-1];
};