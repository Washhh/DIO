var arr = ['Apple', 'Banana','Orange', ['Tomato']];

var apple = arr[0];
var banana = arr[1];
var orange = arr[2];
var tomato = arr[3][0];

// Destructuring Assignment

var [apple2, banana2, orange2, [tomato2]] = ['Apple', 'Banana','Orange', ['Tomato']];
console.log(tomato, tomato2);

var obj = {
    name: 'Igor',
    idade: 22
};

var {name, idade: idade2} = obj;
console.log(name,idade2);

var [apple3] = arr;
console.log(apple3);

// functions

function sum ([a,b] = [0,0]){
    return a+b;
}
console.log(sum([1,2,3,4,5]));

// Object

function sum2({a,b} = {a:0, b:0}){
    return a+b;
}
console.log(sum2({a:2,b:10}));