console.log('hola');

let caja = document.querySelector('#divcaja');

console.log(caja);

function cajaAbajo() {
  caja.style.top = '300px';
}

function cajaArriba() {
  caja.style.top = '1px';
}

caja.addEventListener('click', function () {
  if (caja.id == 'divcaja') {
    caja.id = 'cajaArriba';
    cajaAbajo();
    console.log(caja.id);
  } else {
    caja.id = 'divcaja';
    cajaArriba();
    console.log(caja.id);
  }
});
