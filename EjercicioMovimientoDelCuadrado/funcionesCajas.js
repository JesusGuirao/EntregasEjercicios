/*By jesús */
function getMousePosition(event) {
  // event.preventDefault();
  console.log(event.clientY, event.clientX);
  let divcaja = document.getElementById('divcaja');

  if (event.clientY <= 100) {
    divcaja.style.top = `0`;
  } else {
    divcaja.style.top = `calc(${event.clientY}px - 100px)`;
  }
}

document.addEventListener('click', getMousePosition);
