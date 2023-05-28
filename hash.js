
class HashTable {
    constructor(size){
        this.data = new Array(size);
    }

    hashMethod( key ){
        let hash = 0;
        for ( let i = 0; i < key.length; i++ ){
            hash = ( hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    set(key, value){
        const address = this.hashMethod(key);
        if ( !this.data[address]){
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
        return this.data;
    }

    get(key){
        const address = this.hashMethod(key);
        const currentBucket = this.data[address];
        if ( currentBucket ) {
            for ( let i = 0; i < currentBucket.length; i++){
                if ( currentBucket[i][0] === key ){
                    return currentBucket[i][1];
                }
            }
        }
        return undefined;
    }

    delete(key){
        const address = this.hashMethod(key);
        const currentBucket = this.data[address];
        if ( currentBucket ) {
            for ( let i = 0; i < currentBucket.length; i++){
                if ( currentBucket[i][0] === key ){
                    const element =  currentBucket[i][1];
                    currentBucket.splice(i, 1);
                    return element;
                }
            }
        }
        return undefined;
    }

    getKeys(){
        const keys = [];
        this.data.forEach( (bucket) => {
            bucket.forEach( (keyPairValues) => {
                keys.push(keyPairValues[0]);
            });
        });
        return keys;
    }
}

// generar 50 buckets
const myHashTable = new HashTable(50);

myHashTable.set("Ginger", 2013);
myHashTable.set("KC", 2016);
myHashTable.set("Moji", 2021);
myHashTable.set("Nicky", 1995);
myHashTable.set("Blackie", 2003);
myHashTable.set("Candy", 1982);
console.log(myHashTable);
console.log(myHashTable.get("Ginger"));
console.log(myHashTable.getKeys());
myHashTable.delete('Moji');
console.log(myHashTable.getKeys());