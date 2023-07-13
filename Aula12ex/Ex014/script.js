function loading() {
  var msg = window.document.getElementById("msg")
  var img = window.document.getElementById("FirstPhoto")
  var data = new Date()
  var hora = data.getHours()
  msg.innerHTML = `Agora são ${hora} horas.`
  if(hora>=0 && hora <12){
    //Good morning :)
    img.src = "MorningPhoto.jpg"
    document.body.style.background = "#fbf398"
  } else if(hora>=12 && hora<18){
    //Good afternoon :)
    img.src = "SunshinePhoto.jpg"
    document.body.style.background = "#e5a930"
  } else {
    //Good night :)
    img.src = "NightPhoto.jpg"
    document.body.style.background = "#484848"
  }
} 

