// I am going to implement a doubly linked list to see how it pans out - wish me luck!

class listNode{
  constructor(value){
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
class doublyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  
  // this is going to be a method for appending to the list
  append(value){
  const newNode = new listNode(value);
  //if the list is empty
  if(!this.head){
    this.head = this.tail = newNode;
    this.length++
    return;
  }
  //if the list contains some items
  else{
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;;
  }
  this.length++;
  }

  // Hii itakuwa ya kuadd an item in the very beginning of the doublyLinkedList - Wow - we call it prepend
  prepend(value){
  const newNode = new listNode(value);
  if(!this.head){
    this.head = this.tail = newNode;
    this.length++
    return;
  }
  else{
  let current = this.head;
  current.prev = newNode
  this.head = newNode;
  this.head.next = current;
  }
  this.length++;
  }

  // This one we will be removing from the end - as in deleting from the end of the Doubly Linked List
  deleteLastValue(){
  //check if the list is empty
  if(!this.head){
    return;
  }
  this.tail = this.tail.prev;
  this.tail.next = null;
  this.length--
  }

   deleteFirstValue(){
  //check if the list is empty
  if(!this.head){
    return;
  }
  this.head = this.head.next
  this.head.prev = null;
  this.length--
  }

  //This one deletes by value ..if a certain value is to be deleted it is searched then deleted if not found noting is deleted
  deleteByValue(value){
  if(this.head.value && this.tail.value === value){
    this.head = this.tail = null;
    this.length--;
  }
  else if(this.head.value === value){
    this.head = this.head.next
    this.head.prev = null;
    this.length--;
  }
  else if(this.tail.value === value){
    this.tail = this.tail.prev;
    this.tail.next = null;
    this.length--;
  }
  else{
  let current = this.head;
  while(current.value !== value){
    current = current.next;
  }
  current.prev.next = current.next;
  current.next.prev = current.prev.next;
  this.length--;
  }
}
  //This will print out the doubly linked list
  printList(){
  if(!this.head){
    return
  }
  let current = this.head;
  let list = '';
  while(current){
  list += current.value + ' <-> ';
  current = current.next;
  }
  console.log(list + ' null ');
  }
}


const list = new doublyLinkedList();


list.append(45);
list.append(35);
list.append(25);
list.append(75);
list.append(95);
list.prepend(30);
list.prepend(60);
list.deleteByValue(25);
list.printList();
console.log(list.length);

//This data structure is simply magic!!