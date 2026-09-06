/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    if(lists.length<1)return null;
    if(lists.length==1)return lists[0];
    let templist:ListNode|null=lists[0];
    for(let i=1;i<lists.length;i++){
        let mainlist:number[]=[];
        while(lists[i]!=null&&templist!=null){
            if(templist.val>lists[i].val){
                mainlist.push(lists[i].val);
                lists[i]=lists[i].next;
            }
            else{
                mainlist.push(templist.val);
                templist=templist.next;
            }
        }
        while(templist!=null){
            mainlist.push(templist.val);
            templist=templist.next;
        }
        while(lists[i]!=null){
            mainlist.push(lists[i].val);
            lists[i]=lists[i].next;
        }
        let k=mainlist.length-1;
        if(k==-1)return null;
        let newlist=new ListNode(mainlist[k]);
        --k;
        if(k<0)templist=newlist;
        while(k>=0){
            templist=new ListNode(mainlist[k],newlist)
            newlist=templist;
            k--;
        }
    }
    return templist;
    
};