/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     left: _Node | null
 *     right: _Node | null
 *     next: _Node | null
 *     constructor(val?: number, left?: _Node, right?: _Node, next?: _Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function connect(root: _Node | null): _Node | null {
    if(root==null) return root;
    let queue:_Node[]=[];
    queue.push(root);
    while(queue.length>0){
        let current=queue.length;
        let y=queue.shift();
        for(let i=0;i<current-1;i++){
            let x=queue.shift();
            y.next=x;
            if(y.left!=null) queue.push(y.left);
            if(y.right!=null) queue.push(y.right);
            y=x;
        }
        if(y.left!=null) queue.push(y.left);
        if(y.right!=null) queue.push(y.right);
        y.next=null;
    }
    return root
};