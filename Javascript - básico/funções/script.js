

// function fmedia(n1, n2) {
// var nota1 = n1
// var nota2 = n2
// var media = (nota1 + nota2) / 2
// // console.log(media)

// return media;
// }

// var resultado1 = fmedia(10, 5)
// var resultado2 = fmedia(7, 9)

// console.log(resultado1 + " e " + resultado2)


// Nome do aluno - nota 1 - nota 2 - média - aprovado/reprovado

var nomes = ["Bruno", "Maria", "João"]
var notasA =[8.0, 7.0, 8.5]
var notasB = [6.0, 6.5, 10.0]

function funcmedia(n1, n2) {
    return (n1 + n2)/2
}

function passou(m) {
    if (m >= 7) {
        return "Aprovado"
    } else {
        return "Reprovado"
    }

    
}

for (var index in nomes) {

    var notas1 = notasA[index];
    var notas2 = notasB[index];
    var media = funcmedia(notas1, notas2)


    console.log(nomes[index]+ 
                " - " +
                notas1 +
                " - " +
                notas2 + 
                " - "+
                media +
                " - "+
                passou(media));

}