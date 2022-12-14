window.onload = function(){
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    //variaveis
    snake = []
    positionX = 10; //onde vai iniciar
    positionY = 10;
    foodX = 15;  //posicao da comida
    foodY = 15;
    velX = 0;  //direção que a cobra vai
    velY = 0; 
    grid = 20; 
    tam = 3; //tamanho da cobrinha ao iniciar

    //chamada dda função jogo a cada 100 milisegundos
    setInterval(jogo, 100)

    //controles
    document.addEventListener("keydown", function(e) {
            switch (e.keyCode) {
                //seta direita
                case 39:
                    velX = 1;
                    velY = 0;
                    break;
                 //seta esquerda 
                case 37:
                    velX = -1;
                    velY = 0;
                    break;
                //seta cima
                case 38:
                    velX = 0;
                    velY = -1;
                    break;
                //seta baixo
                case 40:
                    velX = 0;
                    velY = 1;
                    break;
            }
    });

}


function jogo(){
    //Configuração da tela
    ctx.fillStyle = "#2980B9"
    //parêmatros -> distancia borda horizontal ,vertical, largura e altura
    ctx.fillRect(0,0, canvas.width, canvas.height)  

    //deslocamento da cobra
    positionX += velX;
    positionY += velY;

    //Espelhamento
    if(positionX < 0){
        positionX = grid;
    }
    if(positionX > grid){
        positionX = 0;
    }
    if(positionY < 0){
        positionY = grid;
    }
    if(positionY > grid){
        positionY = 0;
    }

    //configurando a cobra 
    ctx.fillStyle = "#00f102";
    for(let i=0; i < snake.length; i++){
        ctx.fillRect(snake[i].x*grid, snake[i].y*grid, grid-1, grid-1 )
        if(snake[i].x == positionX && snake[i].y == positionY){
            tam = 3;
        }
    }

    //Posicionando a cobra
    snake.push({x: positionX, y: positionY})
    

    //Apagando
    while(snake.length > tam){
        snake.shift();
    }

    //configurando a comida
    ctx.fillStyle = "#F1C40F"
    ctx.fillRect(foodX*grid,foodY*grid, grid-1, grid-1)  

    //comendo a comida
    if(positionX == foodX && positionY == foodY){
        tam++;
        foodX = Math.floor(Math.random()*grid);
        foodY = Math.floor(Math.random()*grid);
    }
 
}