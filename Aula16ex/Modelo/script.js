let num = document.querySelector("input#Num")
let lista = document.querySelector("select#flista")
let res = document.querySelector("div#res")
let group = []

function isNumero(n){
  if(Number(n) >= 1 && Number(n) <= 100) {
    return true
  } else {
    return false
  }
}

function inLista(n, g){
  if(g.indexOf(Number(n)) != -1) {
    return true
  } else {
    return false
  }
}

function add(){
  if(isNumero(num.value) && !inLista(num.value, group)){ 
    //Adicionar elemento no vetor
    group.push(Number(num.value))
    //Criando elemento dentro do option  
    let item = document.createElement('option')
    item.text = `Valor ${num.value} adicionado.`
    lista.appendChild(item)
    res.innerHTML=""
  } else{
    window.alert("Valor inválido ou já encontrado!")
  }
  
  num.value= ""
  num.focus()
}

function end(){
  if(group.length==0){
    window.alert("Adicione valores antes de finalizar!")
  } else{
    let tot = group.length

    //Teste de maior e menor com base no primeiro valor.
    /*Dessa forma também podemos obter o maior e o menor número
    let maior = Math.max.apply(null, group)
    let menor = Math.min.apply(null, group)
    */
    let maior = group[0]
    let menor = group[0]
    let soma = 0
    let media = 0

    for( let pos in group){
      soma += group[pos]
      if(group[pos]>maior)
        maior = group[pos]
      if(group[pos]<menor)
        menor = group[pos]
    }

    media = soma /tot
    res.innerHTML+= `<p>Ao todo, temos ${tot} números cadastrados.</p>`
    res.innerHTML+= `<p>O maior valor informado foi ${maior}.</p>`
    res.innerHTML+= `<p>O menor valor informado foi ${menor}.</p>`
    res.innerHTML+= `<p>Somando todos valores, temos ${soma}.</p>`
    res.innerHTML+= `<p>A média dos valores digitados foi ${media.toFixed(2)}.</p>`

  }
}