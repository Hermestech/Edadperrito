



  
document.querySelector(".js-go").addEventListener('click', function() {

  let h1 = document.querySelector("h1")
  h1.innerHTML = "La edad de tu perrito es:"
  console.log(document.querySelector("h1"));
 
  var input = parseInt(document.getElementById("Perro1").value);
  var age = parseInt(16*Math.log(input)+31);
  
  document.getElementById('Perro1').style.display = 'none';
  document.getElementById('boton').style.display = 'none';

  document.getElementById('resultado1').innerHTML = "Aproximadamente " + age + " años.";
  console.log(input == "")

});


