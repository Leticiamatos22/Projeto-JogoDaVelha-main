var jogador = "X";
var mensagem = document.getElementById("vez");

function jogar (celula){
    if(celula.innerHTML == ""){
        celula.innerHTML = jogador;

        if(jogador == "X"){
            jogador = "O"

        }else{
            jogador = "X"
        }
    }
}