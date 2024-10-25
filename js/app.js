// Definimos un limite de hasta 100 emojis en pantalla
const COUNT = 200;

// Definimos tamaños de emojis que se seleccionaran aleatorios en un arreglo
const SIZES = [
    'rainDrop--s',
	'rainDrop--s',
	'rainDrop--s',
	'rainDrop--s',
	'rainDrop--m',
	'rainDrop--m',
	'rainDrop--m',
	'rainDrop--m',
	'rainDrop--m',
	'rainDrop--l',
	'rainDrop--xl'
];

// Creamos un lista de los emojis que podrian salir en pantallla en un arreglo
const EMOJI = [
    '❤️',
    '❤️',
    '❤️',
    '❤️',
    '❤️',
    '❤️',
    '❤️',
    '❤️',
    '❤️',
    '❤️',
    '❤️',
    'MARYAN',
    'MARYAN',
    'MARYAN',
    'MARYAN'
];

// Seleccionamos nuestro contenedor
const rainContainer = document.querySelector('.rain-container');
// Generamos nuevas gotas de emoji
const genRainDrop = (size, xStart, xEnd, yStart, emoji)=>{
    // Creamos los nuevos elementos contenedores de nuestros emojis
    const r = document.createElement('div');
    r.innerText = emoji;
    r.classList.add('rainDrop', size);
    r.style.setProperty('--x-start', xStart + 'vw');
    r.style.setProperty('--x-end', xEnd + 'vw');
    r.style.setProperty('--y-start', yStart + 'vh');
    r.style.setProperty('--y-end', yStart + 200 + 'vh');

    return r;
}

//Creamos un ciclo para recorrer todos nuestros elementos
for(let i=0; i<COUNT; i++){
    // declaramos size y creamos la funcion para hacer el random de nuestros SIZES
    const size = randFromList(SIZES);
    // para buscar un randon en el inicio del eje X
    const xStart = getRamdomArbitrary(0,100);    
    // para buscar un randon en el fin del eje X
    const xEnd = getRamdomArbitrary(xStart - 20, xStart + 20);
    // ahora vamos a crear un rando para nuestros emojis usamos la funcion de SIZE
    const emoji = randFromList(EMOJI);
    // agregamos un ramdon para nuestro eje y
    const yStart = getRamdomArbitrary(-100,0);
    // llamamos a nuestro contenedor y le agregamos nuestros nuevos elementos
    rainContainer.appendChild(genRainDrop(size, xStart, xEnd, yStart, emoji));

}

// 1 función para hacer el randon de la lista de tamaños SIZES
function randFromList(items){
    // math.floor nos devolvera un numero entero de lo que saldra del math.ramdom
    return items[Math.floor(Math.random()*items.length)];
}

// función para el random
function getRamdomArbitrary(min,max) {
    return Math.random() * (max - min) + min;
}
const $days = document.getElementById('days'),
$hours = document.getElementById('hours'),
$minutes = document.getElementById('minutes'),
$seconds = document.getElementById('seconds'),
$finalMessage = document.querySelector('.final-sms');
//Fecha a futuro
const countdownDate = new Date('11 04, 2024 10:28:00').getTime();
let interval = setInterval(function(){
    //Obtener fecha actual y milisegundos
    const now = new Date().getTime();
    //Obtener las distancias entre ambas fechas
    let distance = countdownDate - now;
    //Calculos a dias-horas-minutos-segundos
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24 )) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60 )) / (1000));
    //Escribimos resultados
    $days.innerHTML = days;
    $hours.innerHTML = hours;
    $minutes.innerHTML = minutes;
    $seconds.innerHTML = ('0' + seconds).slice(-2);
    //Cuando llegue a 0
    if(distance < 0){
        clearInterval(interval);
        $finalMessage.style.transform = 'translateY(0)';
    }
}, 1000);