// Árbol a formar:
//      10
//   4      20
// 2  8   17  170

class Node{
    constructor(value){
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(value){
        const newNode = new Node(value);
        if ( this.root === null ){
            this.root = newNode;
        }
        else {
            let currentNode = this.root;
            
        }
    }
}