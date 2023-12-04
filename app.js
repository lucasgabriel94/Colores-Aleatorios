let paragraph = document.getElementById("paragraph");

let boton = document.getElementById('boton');


function changeColor() {
  let digitos = '0123456789ABCDEF'
  let colorHex = '#'


for (let i = 0; i < 6; i++) {
  let indiceAleatorio = Math.floor(Math.random() * 16);
  colorHex += digitos[indiceAleatorio];

  
}
return colorHex;
}

boton.addEventListener("click",()=>{
  let generarColor = changeColor();
  paragraph.textContent = generarColor;
  document.body.style.backgroundColor = generarColor;
})
