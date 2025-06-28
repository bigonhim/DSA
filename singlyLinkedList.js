// I am going to implement a linked list in javascript hurray - I am getting good in data structures by the day! -- 150k in the bag
class ListNode{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class LinkedList{
    
    constructor(){
       this.head = null;
    }
    
    append(value){
    const newNode = new ListNode(value);
    
    if(!this.head){
        this.head = newNode;
        return;
       }
    let current = this.head;
    while(current.next){
        current = current.next;
    }
    current.next = newNode;
    }
    
    print(){
        let current = this.head;
        let result = '';
        while(current){
            result += current.value + ' → '; 
            current = current.next;
        }
        console.log(result + 'null');  
    }
    
    search(value){
        if(value === this.head.value){
            return true;
        }
        let current = this.head;
        while(current){
            if(current.value === value){
                return true;
            }
            current = current.next;
        }
        return false;
    }
    
    delete(value){
        if(!this.head){
            return;
        }
        if(this.head.value === value){
           this.head = this.head.next;
           return;
        }
        let current = this.head;
        while(current.next && current.next.value !== value){
               current = current.next;
        }
        if(current.next){
            current.next = current.next.next;
        }
    }
        
}


const list = new LinkedList();

list.append(40);
console.log(list.search(40))
list.delete(40);
list.append(30);
list.append(20);
list.append(10);
list.append(5);
list.print();
console.log(list.search(40))



















