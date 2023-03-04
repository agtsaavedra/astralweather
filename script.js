//Constructor de objeto ciudad
function city(ciudad, temperatura, viento, presion) {
    this.ciudad = ciudad;
    this.temperatura = temperatura;
    this.viento = viento;
    this.presion = presion;
}
//Creacion de objetos con distintas propiedades segun ciudades

var mdq = new city("Mar del Plata", "27 Grados Celcius", "35 KM/H", "1003 hPa");
var bsas = new city("Buenos Aires", "34 Grados Celcius", "21 KM/H", "1123 hPa");
var ros = new city("Rosario", "23 Grados Celcius", "11 KM/H", "1220 hPa");
var bb = new city("Bahia Blanca", "19 Grados Celcius", "54 KM/H", "1020 hPa");

const cardMdq = document.getElementById("cardMdq");
const cardBsas = document.getElementById("cardBsas");
const cardRos = document.getElementById("cardRos");
const cardbb = document.getElementById("cardBb");

const citycards = [cardMdq, cardBsas, cardRos, cardbb]
const ciudades = [mdq, bsas, ros, bb]

//Titulos

cardMdq.innerHTML = `<h2>${mdq.ciudad}</h2>`

cardBsas.innerHTML = `<h2>${bsas.ciudad}</h2>`

cardRos.innerHTML = `<h2>${ros.ciudad}</h2>`

cardbb.innerHTML = `<h2>${bb.ciudad}</h2>`

//Eventos

cardMdq.addEventListener("mouseover", mdqClima);
cardBsas.addEventListener("mouseover", bsasClima);
cardRos.addEventListener("mouseover", rosClima);
cardbb.addEventListener("mouseover", bbClima);

// Funciones que modifican luego de un Hover en las tarjetas

function mdqClima() {
    cardMdq.innerHTML = `
    <h2>Mar del Plata</h2>
    <h3>Temperatura: ${mdq.temperatura}</h3>
    <p>Presion: ${mdq.presion}</p>
    <p>Viento: ${mdq.viento}</p>
     `
}

function rosClima() {
    cardRos.innerHTML = `
    <h2>Rosario</h2>
    <h3>Temperatura: ${ros.temperatura}</h3>
    <p>Presion: ${ros.presion}</p>
    <p>Viento: ${ros.viento}</p>
     `
}
function bsasClima() {
    cardBsas.innerHTML = `
    <h2>Buenos Aires</h2>
    <h3>Temperatura: ${bsas.temperatura}</h3>
    <p>Presion: ${bsas.presion}</p>
    <p>Viento: ${bsas.viento}</p>
     `
}
function bbClima() {
    cardbb.innerHTML = `
    <h2>Bahia Blanca</h2>
    <h3>Temperatura: ${bb.temperatura}</h3>
    <p>Presion: ${bb.presion}</p>
    <p>Viento: ${bb.viento}</p>
     `
}

