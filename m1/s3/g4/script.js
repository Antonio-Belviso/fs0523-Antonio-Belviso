let tombola = document.querySelector('.tombola');
let numeri = document.querySelector('.numeri');

for(let i = 1; i < 77; i++){
let numero = document.createElement('div');
numero.classList.add('numero');
numero.innerText = i;
numeri.appendChild(numero);
}


    