let num = [45, 67, 89]

//Exibir todos os elementos do array | Chamado de percurso de exbibição
/*for(let cont = 0; cont<num.length; cont++){
  console.log(`A posição ${cont} tem o valor ${num[cont]}`)
}

for(let cont in num){
  console.log(num[cont])
}*/

let pos = num.indexOf(45)
if(pos==-1){
  console.log("O valor digitado não está dentro do vetor.")
} else {
  console.log(`O valor está na posição ${pos}`)
}

//Acrescentar algum elemento no vetor ".push"
//Colocar em ordem crescente o array ".sort"
//Para buscar algum valor dentro do array vamos utilizar ".indexOf()"

//console.log(`O nosso vetor é ${num}`) -> Exibir o array
//console.log(`E possui ${num.length} elementos`) -> Tamanho do vetor