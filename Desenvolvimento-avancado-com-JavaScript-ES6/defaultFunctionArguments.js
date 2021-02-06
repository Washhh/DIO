function add(a,b){
    return a+b;
}
console.log(add(5));

// o valor 0 é ignorado no segundo param
function add2(a,b){
    b = b || 1;
    return a+b;
}
console.log(add2(5));

function add3(a,b){
    b = typeof b === 'undefined' ? 1:b;
    return a+b;
}
console.log(add3(5,0));

// default argument
function add4(a,b = 1){
    return a+b;
}
console.log(add4(5));

function add5(a,b=a){
    return a+b;
}
console.log(add5(5));

// Lazy evaluation

function add6(a,b = Math.random()*10){
    return a+b;
}
console.log(add6(5));