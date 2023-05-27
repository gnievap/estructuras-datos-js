// Forma tradicional de construir e imprimir un arreglo
// const array = ["Ginger", "KC", "Moka", "Moji"];
// console.log(array);
// array.push("Blackie");
// console.log(array);

class MyArray{
    constructor(){
        this.length = 0;
        this.data = {}
    }

    get(index){
        return this.data[index];

    }

    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }

    pop() {
        const lastItem = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        return lastItem;
    }

    delete(index){
        const item = this.data[index];
        this.shiftIndex(index);
        return item;
    }

    shiftIndex(index){
        for (let i = index; i < this.length-1; i++){
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length-1];
        this.length--;
    }

    shift(){
        // Tu código aquí 👈
        const deletedItem = this.data[0];
        delete this.data[0];
        for (let i = 0; i < this.length; i++) {
          this.data[i] = this.data[i + 1]
        }
        delete this.data[this.length - 1];
        this.length--;
        return deletedItem;
        
      }

    unshift(item) {
        if (item) {
          for (let i = this.length; i > 0; i--) {
            this.data[i] = this.data[i - 1];
          }
          this.data[0] = item;
          this.length++;
        }
        return this.length;
      }
}

const myArray = new MyArray();

myArray.push("Felix");
console.log(myArray);

myArray.push("Moka");
myArray.push("Moji");
console.log(myArray);

//console.log(myArray.get(1));

console.log("Resultado de pop: ");
console.log(myArray.pop());
console.log(myArray);

console.log("---------------------------");
myArray.push("Frenchie");
myArray.push("Salem");
console.log("Cambios en el array: ");
console.log(myArray);

console.log("---------------------------");
console.log("Resultado de delete: ");
console.log(myArray.delete(1));
console.log(myArray);
