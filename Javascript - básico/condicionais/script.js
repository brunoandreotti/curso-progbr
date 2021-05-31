var idade = parseInt(prompt("Qual sua idade?"))

if (idade >= 35) {
    alert("Pode")
    prompt("Qual seu pedido?")
}

else if (idade >=18) {
    alert("Pode")
    prompt("Mostre sua identidade")
    prompt("Qual seu pedido?")
}

else{
    alert("Não pode")
    alert("Volte depois")
}


