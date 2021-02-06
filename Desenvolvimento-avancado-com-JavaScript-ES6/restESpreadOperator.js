function sum(a,b){
    return a+b;
}
console.log(sum(5,2));

function sum2(a,b){
    var value = 0;
    for(i of arguments){
        value = value + i;
    }
    return value;
}
console.log(sum2(1,2,3,4,5));

// rest operator ...

function sum3(...args){
    return args.reduce((acc,value) => acc+value,0);
}
console.log(sum3(1,2,3,4,5));

const sum4 = (...args) => args.reduce((acc,value) => acc+value,0);
console.log(sum4(1,2,3,4,5));

const multi = (...args) => args.reduce((acc,value) => acc*value,1);
const sum5 = (...args) => multi.apply(undefined,args);
console.log(sum5(1,2,3,4,5));

// spread operator ... , strings, arrys,  literal objects e objetos iteraveis

const sum6 = (...args) => multi(...args);
console.log(sum6(1,2,3,4,5));

const str = 'DIO';
function logArgs(...args){
    console.log(args);
}
logArgs(...str);

const arr = [1,2,3,4,5];
logArgs(...arr);

const arr2 = [...arr,6,7,8,9];
logArgs(...arr2);

const obj = {
    test:123
};

const obj2 = {
    ...obj,
    test2:456
};
console.log(obj2);