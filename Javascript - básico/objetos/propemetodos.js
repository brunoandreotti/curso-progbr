// >======OBJETOS======<
// =====PROPRIEDADES=====

// var aluno = {
//     nome: "Bruno", notas: [7.5, 8.5]
// }

// var novaProp = "sobrenome"


// aluno[novaProp] = "Andreotti"
// aluno.matricula = 12345


// console.log(aluno.sobrenome)

// =====MÉTODOS=====

function calcMedia () {
    return (this.notas[0] + this.notas[1]) / 2
}

var aluno = {
    nome: "Bruno",
    notas: [7.0, 8.0],

    media: calcMedia
   
}


var aluno1 = {
    nome: "João",
    notas: [3.0, 9.0],

    media: calcMedia
}

console.log(aluno.nome)
console.log(aluno.media(aluno.notas[0], aluno.notas[1]))
console.log(aluno.media())

console.log(aluno1.nome)
console.log(aluno1.media(aluno1.notas[0], aluno1.notas[1]))
console.log(aluno1.media())


// console.log(aluno.media(5, 8))

// porém dessa maneira, se mudarmos as notas no objeto, a media não mudaria, para isso é necessario usar:
// console.log(aluno.media(aluno.notas[0], aluno.notas[1]))

// se o calculo da média mudasse, seria necessario mudar para os dois alunos, se tivesse 50 alunos, seria necessario mudar um por um, para resolver isso é possivel criar uma variável com função ou somente função "calcMedia" fora dos objetos, atribuir o calculo da media a ela e inserir no objeto

// porém para calcular a média é precisa usar "aluno.media(aluno.notas[0], aluno.notas[1]" e essa forma de escrita é muito grande, um jeito mais fácil seria: "aluno.media()" 
// para isso é possivel retirar os argumentos da "função calcMedia"
//   function calcMedia (n1, n2) {
//     return (n1 + n2) / 2
// }

//ficando

// function calcMedia () {
//     return (notas[0] + notas[1]) / 2
// }

// porém desse modo o JS não consegue saber quais notas são, para resolver isso utilizasse o "this" para especificar que são as notas dentro daquele objeto, ficando:

// function calcMedia () {
//     return (this.notas[0] + this.notas[1]) / 2
// }



