function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let resultListNode = new ListNode();
    let current = resultListNode 
    let add = 0 ; // 要不要 + 1
    let result : number = 0 ;
    
    //只要其中一個LinkList 還沒跑完 就一直跑
    while( l1 != null  || l2  != null )
    {
        result = 0 // 暫存計數


        //如果l1不是 null 就把他的 val 加起來 ， next 指向下一個 
        if(l1 != null)
        {
            result += l1.val ;
            l1 = l1.next 
        }

         //如果l2不是 null 就把他的 val 加起來 ， next 指向下一個 
        if(l2 != null)
        {
            result += l2.val ;
            l2 = l2.next 
        }
        // 加上上一輪的進位
        result += add ;

        //進位規0
        add = 0

        //如果大於等於10 取餘數進位
        if(result >= 10)
        {
            add = 1 
            result = result % 10
        }

        current.next = new ListNode(result);
        current = current.next
    }
    //當最後一個值還需要進位時
    if (add) {
        current.next = new ListNode(add)
    }
    return resultListNode.next
};