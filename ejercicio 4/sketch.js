let subtitulo;
let contador = 0;
let sonido;

function setup() {
  select('body').style('background-color','yellow');
  select('#uno').addClass('fondoazul');
  select('#dos').addClass('fondorojo');
  select('#tres').addClass('fondoverde');
  select('#cuatro').addClass('fondovioleta');

  select('#dos').mousePressed(agregarAnimacion);

  sonido = loadSound('sonidos/xp_startup.mp3')
  select('#cuatro').mousePressed(playSonido)


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

 if(winMouseX > windowWidth / 2){
 select('#mouse').html('👉​');
 } else {
select('#mouse').html('👈​');
 }

 select('#tres').mousePressed(nuevaPosicion);

}

function agregarAnimacion() {
  select('#dos').addClass('desplazamiento');
}


function keyPressed() {
  select('#dos').removeClass('desplazamiento');
}

function nuevaPosicion() {
  select('#tres').position(random(0,windowWidth),random(0,windowHeight));
}

function playSonido() {
if (sonido.isPlaying()) {
 sonido.stop();
 } else {
sonido.rate(random(0.1,2));
sonido.play();
 }

}