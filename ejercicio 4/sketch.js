let subtitulo;
let contador = 0;

function setup() {
  select('body').style('background-color','yellow');
  select('#uno').addClass('fondoazul');
  select('#dos').addClass('fondorojo');
  select('#tres').addClass('fondoverde');
  select('#cuatro').addClass('fondovioleta');
  
  subtitulo = createElement('h3', 'numeros que suben:');
  subtitulo.parent('container');
}

function draw() {
  contador = contador + 1;

  subtitulo.html("numeros que suben: " + contador);

  if (contador > 500 && contador <= 800) {
    select('#uno').addClass('rotate');
  } else if (contador > 800 && contador < 1000) {
    select('#uno').removeClass('rotate');
  } else if (contador >= 1000) {
    contador = 0;
  }
}
