//alert("Alerta com JS"); // Cria uma mensagem de alerta na página
var nome = "Washington";
console.log("Bem vindo "+nome);
console.log(nome.replace("Washington","Igor")); // replace troca as palavras
console.log(nome.toUpperCase()); // Coloca todas as letras em maiúsculo, Lowercase faz o contrário


var lista = []; // Cria uma lista vazia
lista.push("Macarrão");  // Insere na lista
lista.push("Frango");
lista.push("Molho de tomate");
console.log(lista);
console.log(lista.toString()); // Converte a lista para uma string separada pro vírgula
console.log(lista.join(" - ")); // Converte a lista para uma string onde vc pode escolher a forma de separação

var ingredientes = {}; // Cria um dicionário vazio
ingredientes['macarrão'] = "1 pacote"; // Inserindo chave:valor no dicionário
ingredientes['frango'] = "700g";
ingredientes['molho de tomate'] = "1 pacote";
console.log(ingredientes);

//var idade = prompt("Insira a sua idade"); // Prompt a página solicita um valor de entrada antes de continuar
var idade = 20;
if(idade >= 18){
    console.log("Maior de idade");
}
else{
    console.log("Menor de idade");
}

var count = 5;
while(count--){
    console.log(count+1);
}

var count;
for(count=0; count < 5; count++){
    console.log(count+1);
}

var data = new Date();
console.log(data.getDay()+1); // o +1 é pq ele inicia do 0, pega o dia da semana
console.log(data.getMonth()+1);// o +1 é pq ele inicia do 0
console.log(data.getHours());

function soma(n1,n2){
    return n1+n2;
}

console.log(soma(10,20));

function setReplace(frase,nome, novo_nome){
    return frase.replace(nome,novo_nome);
}

console.log(setReplace("Eu amo lasanha","lasanha","pizza"));

function botao(){ // Insere no elemento o texto quando clicarem no botao
    //alert("Obrigado por clicar");
    document.getElementById("clicou").innerHTML = "Obrigado por clicar";
}

function mudarPag(){ // Vai para o link quando clicar no botao
    window.open("https://digitalinnovation.one/");
}

function trocar(){ // Troca o texto quando passa o mouse por cima
    document.getElementById("trocar").innerHTML = "Obrigado por passar o mouse";
}

function voltar(){
    document.getElementById("trocar").innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregada");
}

function funcaoChange(elemento){ // Pega o valor do elemento quando ele muda
    console.log(elemento.value);
}