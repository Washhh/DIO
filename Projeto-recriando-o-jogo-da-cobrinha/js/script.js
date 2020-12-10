let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 16;
let cobra = [];
let pontos = 0;
let score;

score = new component("30px", "30px", "black", 0, 10, "text");
score.text = "SCORE: " + pontos;
score.update();
function component(width, height, color, x, y, type) {
    this.type = type;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.update = function() {

        if (this.type == "text") {
            context.font = this.width + " " + this.height;
            context.fillStyle = color;
            context.fillText(this.text, this.x, this.y);
        } else {
            context.fillStyle = color;
            context.fillRect(this.x, this.y, this.width, this.height);
        }
    }   
}

cobra[0] = {
    x:16*box,
    y:16*box
}
let direcao = "right";
let comida = {
    x: Math.floor(Math.random() * 15 + 1)* box,
    y: Math.floor(Math.random() * 15 + 1)* box
}

function criarBG(){
    context.fillStyle = "#A06BC9";
    context.fillRect(0,0,32*box,32*box);
}

function criarCobrinha(){
    context.fillStyle = "#D5C847";
    context.fillRect(cobra[0].x,cobra[0].y, box,box)
    for(i=1; i<cobra.length; i++){
        context.fillStyle = "#274EB8";
        context.fillRect(cobra[i].x,cobra[i].y, box,box)
    }
}

function criarComida(){
    context.fillStyle = "#C61558";
    context.fillRect(comida.x,comida.y,box,box);    
}

document.addEventListener('keydown',update);

function update(evento){
    if(evento.keyCode == 37 && direcao != "right"){
        direcao = "left";
    }
    if(evento.keyCode == 38  && direcao != "down"){
        direcao = "up";
    }
    if(evento.keyCode == 39  && direcao != "left"){
        direcao = "right";
    }
    if(evento.keyCode == 40  && direcao != "up"){
        direcao = "down";
    }
    
}
function exibirPontos(){
    score.text = "SCORE: " + pontos;
    score.update();
    console.log("entrei");
}
function iniciarJogo(){
    for(j=1;j < cobra.length; j++){
        if(cobra[0].x == cobra[j].x && cobra[0].y == cobra[j].y){
            clearInterval(jogo);
            document.getElementById("mensagem").innerHTML = "GAME OVER"
        }
    }

    if(cobra[0].x >31*box && direcao == "right"){
         cobra[0].x = 0;
    }

    if(cobra[0].x < 0 && direcao == "left"){
        cobra[0].x = 32*box;
    }

    if(cobra[0].y > 31*box && direcao == "down"){
        cobra[0].y = 0;
    }

    if(cobra[0].y <0 && direcao == "up"){
        cobra[0].y = 32*box;
    }

    criarBG();
    criarCobrinha();
    criarComida();
    exibirPontos();

    let cobraX = cobra[0].x; 
    let cobraY = cobra[0].y;

    if(direcao == "right"){
        cobraX += box;
    }
    if(direcao == "left"){
        cobraX -= box;
    }
    if(direcao == "up"){
        cobraY -= box;
    }
    if(direcao == "down"){
        cobraY += box;
    }

    if(cobraX != comida.x || cobraY != comida.y){
        cobra.pop();
    }
    else{
        score.text = "SCORE: " + pontos;
        score.update();
        pontos += 1;
        comida.x = Math.floor(Math.random() * 15 + 1)* box;
        comida.y = Math.floor(Math.random() * 15 + 1)* box;
    }

    let novaCabeca = {
        x: cobraX,
        y: cobraY
    }

    cobra.unshift(novaCabeca);
}

let jogo = setInterval(iniciarJogo, 100);
let pontuacao = setInterval(exibirPontos(),100);