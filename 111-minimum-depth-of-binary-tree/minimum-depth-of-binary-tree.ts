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

function minDepth(root: TreeNode | null): number {
    if(root==null)
        return 0;
    //let arrd:number[]=[];
    //function solve(depth:number,node:TreeNode):void{
    //    if(node.left==null&&node.right==null){
    //        arrd.push(depth);
    //    }
    //    if(node.left!=null){
    //        solve(depth+1,node.left);
    //    }
    //    if(node.right!=null){
    //        solve(depth+1,node.right);
    //    }
    //}
    //solve(1,root);
    let queue:TreeNode[]=[];
    queue.push(root);
    let len=0;
    while(queue.length>0){
        let current=queue.length
        len++;
        for(let i=0;i<current;i++){
            let y=queue.shift();
            if(y.left==null&&y.right==null){
                return len;
            }
            if(y.left!=null)
                queue.push(y.left);
            if(y.right!=null)
                queue.push(y.right);
        }
    }
    //arrd.sort((a,b)=>a-b);
    //return arrd[0];
};