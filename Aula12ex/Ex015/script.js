function verificar (){
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById("txtano")
  var res = document.getElementById("res")
  if(fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert("ERROR! Verify data value again")
  } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var gênero = ""
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    img.setAttribute("style", "border-radius: 50%")
    img.setAttribute("width", "250")
    img.setAttribute("heigth", "250")
    if(fsex[0].checked){
      gênero = 'Homem'
      if(idade>=0 && idade<10){
        //Criança
        img.setAttribute("src", "foto-bebe-m.png")
      } else if (idade <21){
        //Jovem
        img.setAttribute("src", "foto-jovem-m.png")
        
      } else if (idade < 50 ){
        //Adulto
        img.setAttribute("src", "foto-adulto-m.png")
        
      } else {
        //Idoso
        img.setAttribute("src", "foto-idoso-m.png")
        
      }
      
    } else if (fsex[1].checked){
      gênero = 'Mulher'
      if(idade>=0 && idade<10){
        //Criança
        img.setAttribute("src", "foto-bebe-f.png")
        
      } else if (idade <21){
        //Jovem
        img.setAttribute("src", "foto-jovem-f.png")
        
      } else if (idade < 50 ){
        //Adulto
        img.setAttribute("src", "foto-adulto-f.png")
        
      } else {
        //Idoso
        img.setAttribute("src", "foto-idoso-f.png")

      }
      
    }
    res.style.textAlign = 'center'
    res.style.lineHeight = '2cm'
    res.style.fontSize = '120%'
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    res.appendChild(img)
  }

}