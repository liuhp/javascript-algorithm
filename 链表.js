## 双指针应用场景
1、合并两个有序链表
2、链表的分解
3、合并 k 个有序链表
## 快慢指针应用场景
1. 倒数第K个节点 
  快指针先走k步，然后快慢指针一起走（慢指针从头开始走），当快指针走到头，慢指针所指向的指针为倒数第K个节点。
2. 中点
  慢指针走一步，快指针走两步，快指针走到末尾时，慢指针所指向的节点为中点
3. 判断链表是否包含环
  慢指针走一步，快指针走两步，判断最终快指针是否会和慢指针相遇，若相遇，则有环，若快指针最终指向null, 则没有环



/**
 * Definition for singly-linked list.
 */
 function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * 数组初始化成一个链表
 */
function init(arr){
    let head = new ListNode(-1)
    let p = head
    const len = arr.length
    for(let i=0; i<len;i++){
        const temp = new ListNode(arr[i])
        p.next = temp
        p = p.next
    }
    return head.next
}
// const head = init([1,2,3])
// let p = head
// while(p){
//     console.log(p.val)
//     p = p.next 
// }

// 快慢指针，找出两个链表中第一个公共节点
var getIntersectionNode = function(headA, headB) {
    if(!headA || !headB){ return null}
    let ca = 0
    let cb = 0
    let pa = headA
    let pb = headB
    while(pa){
        pa = pa.next
        ca++
    }
    while(pb){
        pb = pb.next
        cb++
    }
    pa = headA
    pb = headB
    if(ca -cb>0){
        let k = ca -cb
        while(k){
            pa = pa.next
            k -= 1
        }
    } else {
       let k = cb -ca
        while(k){
            pb = pb.next
            k -= 1
        } 
    }
    while(pa !== null && pb!== null ){
        if(pa === pb){
            return pa
        }
        pa = pa.next
        pb = pb.next
    }
    return null

};

const headA = init([4,1,8,4,5])
const headB = init([5,0,1,8,4,5])
console.log(getIntersectionNode(headA, headB))
