
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek(){
        return this.first;
    }

    isEmpty(){
        return this.length == 0;
    }

    enqueue(value){
        const newNode = new Node(value);
        if ( this.isEmpty() ){
            this.first = newNode;
            this.last = newNode;
        }
        else{
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;
    }

    dequeue(){
        if ( this.isEmpty() ){
            return null;
        }
        else{
            const firstItem = this.first;
            if ( this.length == 1 ){
                this.fist = null;
                this.last = null;
            }
            else {
                this.first = this.first.next;
            }
            this.length--;
            return this.firstItem;
        }
        
    }



}

const myQueue = new Queue();