//Funcion que captura datos del formulario.

function captura(){
  var nombrecap=document.getElementById("nombre").value;
  var apellidocap=document.getElementById("apellido").value;
  var emailcap=document.getElementById("email").value;
  var celularcap=document.getElementById("celular").value;
  var mensajecap=document.getElementById("mensaje").value;

  if (nombrecap==""){alert("El nombre es obligatorio digitarlo");
  document.getElementById("nombre").focus();
}else{
  if (apellidocap==""){alert("El apellido es obligatorio digitarlo");
  document.getElementById("apellido").focus();}
}
  if (emailcap==""){alert("El email es obligatorio digitarlo");
  document.getElementById("email").focus();}
else{
  if (celularcap==""){alert("El número de celular es obligatorio digitarlo");
  document.getElementById("celular").focus();}
}
  if (mensajecap==""){alert("El mensaje es obligatorio digitarlo");
  document.getElementById("mensaje").focus();}

  else{
    console.log(nombrecap +" "+ apellidocap +" "+ emailcap +" "+ celularcap +" "+ mensajecap);
    document.getElementById("nombre").value="";
    document.getElementById("apellido").value="";
    document.getElementById("email").value="";
    document.getElementById("celular").value="";
    document.getElementById("mensaje").value="";
    document.getElementById("nombre").focus();
}

}

var titular = document.querySelector("#nom");
console.log(titular);

var profesion = document.querySelector("#prof");
console.log(profesion);