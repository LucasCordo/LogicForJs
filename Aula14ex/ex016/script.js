function cont() {
  let start = document.getElementById('str')
  let end = document.getElementById('end')
  let step = document.getElementById('stp')

  let res = document.getElementById('res')

  if(start.value.length==0 || end.value.length==0 || step.value.length==0){
    //Exibir mensagem de erro, dados insuficientes!
    res.innerHTML= "Impossível contar!"
   // window.alert("[ERRO] Dados insuficientes!")
  } else {
    res.innerHTML = `Contando...👀<br>`
    let s = Number(start.value)
    let e = Number(end.value)
    let st = Number(step.value)
    if(st <=0){
      window.alert("Passo inválido! Considerando Passo 1.")
      st = 1
    }
    if(s<e) {
      //Contagem crescente
      for(let cont = s; cont<=e; cont+=st){
        res.innerHTML+= `${cont} \u{1F449}`
      }
    } else {
      //Contagem regressiva
      for(let cont = s; cont>=e; cont-=st){
        res.innerHTML+= `${cont} \u{1F449}`
      }
    }
    res.innerHTML += `\u{1F3C1}` 
  }

}