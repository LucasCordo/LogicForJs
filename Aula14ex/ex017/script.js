function generate() {
  //Structure
  let num = document.getElementById("txtn")
  let tab = document.getElementById("selTab")
  if(num.value.length == 0){
    window.alert("Por favor, digite um número!")
  } else {
    let ntn = Number(num.value)
    tab.innerHTML = ""
    for(let cont = 1; cont<=10; cont++){
      //Element 
      let item = document.createElement('option')
      item.text = `${ntn} x ${cont} = ${ntn*cont}`
      //Ordenando os valores de cada option (Para o JS não faz tanto sentido)
      item.value = `tab${cont}`
      tab.appendChild(item)
    }
  }

  
}