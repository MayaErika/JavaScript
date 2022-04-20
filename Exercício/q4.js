function clique(){
    var num=parseInt (prompt("Insira o valor: "));
    document.querySelector("p").innerHTML="O antecessor de " +num+ " é: "+(num-1)+", e o sucesssor é: "+(num+1)+".";
}