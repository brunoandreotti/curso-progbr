// =====CONSTRUTORES=====


var calcMedia = function() {
    return (this.nota1 + this.nota2) / 2
}

// var alunos = [
//     {
//         nome: "Bruno",
//         nota1: 9.0,
//         nota2: 8.0,
//         media: calcMedia
//     },
//     {
//         nome: "João",
//         nota1: 7.5,
//         nota2: 6.0,
//         media: calcMedia

//     }
     
// ]

// var aluno = alunos[1]
// console.log(aluno)
// console.log(aluno.media())

// usando esse modo para construir uma turma/alunos, seria muito fácil de ocorrer um erro de digitação, para resolver isso seria possível criar uma função para criar um aluno, ao invés de adicionar o aluno manualmente

// function criarAluno(nome, n1, n2) {
//     return {
//         nome: nome,
//         nota1: n1,
//         nota2: n2,
//         media: calcMedia
//     }
// }

// var alunos = [
//     criarAluno("Bruno", 8.0, 7.5),
//     criarAluno("João", 8.0, 4.0),
//     criarAluno("Marcela", 9.0, 10.0)



// ]


// for (index in alunos) {
//     console.log(alunos[index])
//     console.log(alunos[index].media())

// }

// há outra maneira de criar (nesse caso instânciar) um objeto (nesse caso um aluno). Utilizando "this" (contrutor) ao invez do "return na função"

function aluno(nome, n1, n2) {
    this.nome = nome,
    this.nota1 = n1,
    this.nota2 = n2,

    this.media = function() {
        return (this.nota1 + this.nota2) / 2
    }
}

// para criar um objeto utilizando esse método é necessario usar:
// var nome da variavel = new nome da função(nome, n1, n2), nesse caso
// var aluno1 = new aluno("Bruno", 9.0, 7.0)
 
var alunos = [
    aluno1 = new aluno("Bruno", 9.0, 8.0),
    aluno2 = new aluno ("João", 7.0, 6.5)
]

for (var index in alunos) {
    console.log(alunos[index])
    console.log(alunos[index].media())
}