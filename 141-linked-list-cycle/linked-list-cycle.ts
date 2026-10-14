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

function hasCycle(head: ListNode | null): boolean {

    if(head==null) return false;
    if(head.next==null) return false;
    let arr:ListNode[]=[head];
    while(true){
        if(head.next==null)
        return false;
        arr.push(head);
        head=head.next;
        if(arr.includes(head))
        return true;

        
    }
};