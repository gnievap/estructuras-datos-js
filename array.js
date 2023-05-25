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
}

const myArray = new MyArray();

myArray.push("Felix");
console.log(myArray);

myArray.push("Moka");
console.log(myArray);

console.log(myArray.get(1));