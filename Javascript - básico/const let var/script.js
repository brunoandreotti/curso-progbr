 var numero1 = 4
 let numero2 = 5
 const numero3 = 6

 console.log(numero1)
 console.log(numero2)
 console.log(numero3)

//const funciona igual uma variável porém é uma constante, não é possivel reatribuir outro valor a ela, ela recebe o valor apenas uma vez. O valor pode mudar, porém só é possível ter um valor atribuído a ela.

// a diferença de let e var é que a let existe somente dentro de um bloco, fora dele ela não existe, diferentemente da var que é global"
// ex:
// {

// var numero1
// let numero2

// }

// console.log(numero1)
// console.log(numero2)

// nesse caso que o "console.log" está fora do bloco de comando somente a "var numero1" funcionaria pois é global enquanto a "let numero2" é "local" e só existe dentro do bloco, para o "console.log(numero2)" funcionar ele precisaria ser colocado dentro do bloco que existe a "let = numero2"