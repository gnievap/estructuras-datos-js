
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek(){
        return this.top;
    }

    push(value){
        const newNode = new Node(value);
        if ( this.isEmpty() ) {
            this.top = newNode;
            this.bottom = newNode;
        }
        else{
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }
        this.length++;
        return this;
    }

    pop(){
        if ( !this.isEmpty() ){
            const topItem = this.top;
            this.top = this.top.next;
            this.length--
            return topItem
        }
        return null;
    }

    isEmpty(){
        return this.length == 0;
    }

}

const myStack = new Stack();