window.onload = function(){
    canvas = document.getElementById("canvas");
    ctx = canvas.getElementById("2d");

    //variaveis
    snake = []
    positionX = 10; //onde vai iniciar
    positionY = 10;
    foodX = 15;  //posicao da comida
    foodY = 15;
    velX = 0;  //velocidade
    velY = 0; 
    grid = 20; 
    tam = 3; //tamanho da cobrinha ao iniciar
}
