window.onload = function(){
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

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

    //chamada dda função jogo a cada 100 milisegundos
    setInterval(jogo, 100)

}


function jogo(){
    //Configuração da tela
    ctx.fillStyle = "#2980B9"
    //parêmatros -> distancia borda horizontal ,vertical, largura e altura
    ctx.fillRect(0,0, canvas.width, canvas.height)  

    //Posicionando a cobra
    snake.push({x: positionX, y: positionY})

    //configurando a cobra e movimento
    ctx.fillStyle = "#00f102";
    for(let i=0; i < snake.length; i++){
        ctx.fillRect(snake[i].x*grid, snake[i].y*grid, grid-1, grid-1 )
    }

}