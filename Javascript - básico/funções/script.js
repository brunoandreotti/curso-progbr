

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

// var alunos = ["Bruno", "João", "Maria"]
// var resultadoProva1 = [8.5, 7.5, 6.0]
// var resultadoProva2 = [7.0, 6.5, 8.0]

// function mediaEscolar (n1, n2) {
//     return (n1 + n2) / 2
// }

// function aprovadoReprovado(mediaEscolar) {
//     if (mediaEscolar >= 7) {
//         return "Aprovado"
//     } else {
//         return "Reprovado"
//     }
// }

// for (var index in alunos) {
//     listaAlunos = alunos[index]
//     notasProva1 = resultadoProva1[index]
//     notasProva2 = resultadoProva2[index]
//     mediaFinal = mediaEscolar(notasProva1, notasProva2)

//     console.log(listaAlunos, " - ", notasProva1, " - ", notasProva2, " - ", mediaFinal, "- ", aprovadoReprovado(mediaFinal))
// }

// Nome do aluno - nota 1 - nota 2 - média - aprovado/reprovado

var alunos = ["Bruno", "João", "Maria"]
var resultadoP1 = [7.0, 6.5, 4]
var resultadoP2 = [4.0, 8.5, 9.0]

function mediaProvas (notaP1, notaP2) {
    return (notaP1 + notaP2) / 2
}

function aprovadoReprovado (mediaProvas) {
    if (mediaProvas >= 6) {
        return "Aprovado"
    } else {
        return "Reprovado"
    }
}

for (var index in alunos) {
    nomeAlunos = alunos[index]
    notasP1 = resultadoP1[index]
    notasP2 = resultadoP2[index]
    mediaFinal = mediaProvas(notasP1, notasP2)

    console.log(nomeAlunos, "-", notasP1, "-", notasP2, "-", mediaFinal, "-", aprovadoReprovado(mediaFinal) )
}