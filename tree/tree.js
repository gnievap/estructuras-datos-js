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
            while ( true ){
                if ( value < currentNode.value ){
                    if ( !currentNode.left ){
                        currentNode.left = newNode;
                        return this;
                    }
                    else {
                        currentNode = currentNode.left;
                    }
                }
                else {
                    if ( !currentNode.right ){
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }

    search(value) {
        const node = this.check(value);
        if(node) {
          return node;
        }
        return new Error("Non-existent value");
      }
      check(value) {
        let currentNode = this.root;
        if(!currentNode) {
          return false;
        }
        while(true) {
          if(currentNode.value === value) {
            return currentNode;
          }
          if(value < currentNode.value) {
            currentNode = currentNode.left;
          } else {
            currentNode = currentNode.right;
          }
          if(!currentNode) {
            return false;
          }
        }
      }

}

const tree = new BinarySearchTree();