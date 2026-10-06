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

function rightSideView(root: TreeNode | null): number[] {
    if(root==null)return [];
    let queue:TreeNode[]=[root];
    let ans:number[]=[];
    while(queue.length>0){
        let x=queue.length-1;
        for(let i=0;i<=x;i++){
            let num=queue.shift()
            if(num.left!=null)
            queue.push(num.left);
            if(num.right!=null)
            queue.push(num.right);
            if(i==x){
                ans.push(num.val);
            }
        }
    }
    return ans;
};