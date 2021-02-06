//Função anônima

var sum = (a,b) => a+b;
console.log(sum(2,3))

var sub = (a,b) =>{
    var x = 10;
    if(x>a){
        console.log("a é menor que 10");
    }
    return a-b;
}
console.log(sub(15,10));
sub(5,3);

var obj = (a,b)=> ({
    valor:a,
    nome:b
})
console.log(obj(10,'Real'));

var obj2 = {
    showContext: function showContext(){
        setTimeout(()=>{
            this.log('After 1000ms');
        },1000);
    },
    log: function log(value){
        console.log(value);
    }
}
obj2.showContext();