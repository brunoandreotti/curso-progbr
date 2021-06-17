// var nota1 = 8.0;
// var nota2 = 7.0;

// var media = (nota1 + nota2) / 2;
// var conceito = ""

// // if (media >= 7) {
// //     console.log("Você passou com média " + media)
// // }

// // else {
// //     console.log("Sua nota " + media + " não foi o suficiente para passar")
// // }

// if(media >= 8) {
//     conceito = "ótimo";

// }

// else if(media >= 6.5){
//     conceito = "bom";

// }

// else {
//     conceito = "regular";

// }

// console.log(media)
// console.log(conceito)

// switch(conceito){
//     case "ótimo":
//         console.log("parabéns, você é um ótimo aluno")
//         break

//     case "bom":
//         console.log("você está quase perfeito")
//         break

//     case "regular":
//         console.log("precisa melhorar")
//         break

//     default:
//         console.log("Aconteceu um erro")
//         break

// }

alert("Para passar sua média deve ser igual ou maior do que 6")
var nota1 = parseInt(prompt("Qual a nota da sua primeira prova?"))
var nota2 = parseInt(prompt("Qual a nota da sua segunda prova?"))
var media = (nota1 + nota2) / 2
alert("Sua média é " + media)

conceito = ""

if (media >= 8){
    alert(("Seu estudo está " ) + (conceito = "ótimo"));
}

else if (media >= 6) {
    alert(("Seu estudo está ") + (conceito = "bom"));
}

else {
    alert(("Seu estudo está ") + (conceito = "regular"));
    
}

switch(conceito){
    case "ótimo":
        alert("Parabéns você passou!")
        break
    
    case "bom":
        alert("Parabéns você passou mas precisa estudar mais!")
        break

    case "regular":
        alert("Você não passou!")
        break

    default:
        alert("Algo deu errado")

}
