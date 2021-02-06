//Symbols

const uniqueId = Symbol('Hello');

// Well know symbols

Symbol.iterator
Symbol.split
Symbol.toStringTag

const arr = [1,2,3,4];
const it = arr[Symbol.iterator]();

// Generators
function* hello(){
    console.log('D');
    yield;
    
    console.log('I');
    yield;

    console.log('O');
}

const it2 = hello();

console.log(it.next());
console.log(it.next());
console.log(it.next());