const form = document.querySelector('form')
form.addEventListener('submit', contentForm)
const result = document.querySelector('.result')
const classification = document.querySelectorAll('.classification p')
const imcUsuario = document.querySelector('.imc')

function contentForm(evento){
   evento.preventDefault();
   const weight = document.querySelector('#weight');
   const height = document.querySelector('#height');
   let tipo;
   const imc = weight.value / (height.value**2);
   console.log(imc.toFixed(2));


   function removeColor(){
      for(res of classification){
         res.style.backgroundColor = 'white';
         res.style.fontWeight = 'normal';
      }
   }
   function executar(){
      removeColor();
      showImc();
   }
   function showImc(){
      
      imcUsuario.innerHTML = imc.toFixed(2);
   }

   if (imc < 18.5){
      tipo = 'Abaixo do peso';
      executar()
      classification[0].style.fontWeight= 'bold';
      classification[0].style.backgroundColor= 'aqua';
   } else if (imc >=18.5 && imc <= 24.9) {
      tipo = 'Peso Normal';
      executar()
      classification[1].style.fontWeight= 'bold';
      classification[1].style.backgroundColor= 'green';
   } else if (imc >=25 && imc <= 29.9) {
      tipo = 'Sobrepeso';
      executar()
      classification[2].style.fontWeight= 'bold';
      classification[2].style.backgroundColor= 'yellow';
   } else if (imc >=30 && imc <= 34.9) {
      tipo = 'Obesidade grau 1';
      executar()
      classification[3].style.fontWeight= 'bold';
      classification[3].style.backgroundColor= 'orange';
   } else if (imc >=35 && imc <= 39.9) {
      tipo = 'Obesidade grau 2';
      executar()
      classification[4].style.fontWeight= 'bold';
      classification[4].style.backgroundColor= 'orangered';
   } else if (imc >=40) {
      executar()
      classification[5].style.fontWeight= 'bold';
      classification[5].style.backgroundColor= 'red';
      tipo = 'Obesidade grau 3';
   }
   if (weight.value === ''){
      result.innerHTML = 'Peso Invalido!!';
      result.style.backgroundColor = 'red';
   } else if (height.value === ''){
      result.innerHTML = 'Altura Invalida!';
      result.style.backgroundColor = 'red';
   }
}


