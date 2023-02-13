
function menuPrincipal () {
    let endProgram;
    let name = prompt("BIENVENIDO APP Clima! Ingrese su nombre");
    

    
    while(endProgram != "No"){
       
        let ciudadPrompt = prompt(`Hola ${name}, Indique el numero segun la ciudad \n 
        1-Mar del Plata,\n
        2-Buenos Aires \n 
        3-Rosario \n 
        4-Bahia Blanca`);  
    
        while (ciudadPrompt != "1" && ciudadPrompt != "2" && ciudadPrompt != "3" && ciudadPrompt != "4"){
            ciudadPrompt = prompt (`Por favor ${name}, Indique un numero de ciudad valido \n 
            1-Mar del Plata,\n
            2-Buenos Aires \n 
            3-Rosario \n 
            4-Bahia Blanca`);
        }
        calculoTemperatura(ciudadPrompt);

        

        while (endProgram != 'Si' && endProgram != 'No') {
        endProgram = prompt(`Desea hacer otra consulta:\n Si / No`);
        } 
    }

    

   
}


function calculoTemperatura (ciudadPrompt){

    //Defincion de objeto ciudades
    function city(ciudad, temperatura, viento, presion) {
        this.ciudad = ciudad;
        this.temperatura = temperatura;
        this.viento = viento;
        this.presion = presion;
      }
      //Creacion de objetos con distintas propiedades segun ciudades
    var mdq = new city ("Mar del Plata", "27 Grados Celcius", "35 KM/H", "1003 hPa");
    var bsas = new city ("Buenos Aires", "34 Grados Celcius", "21 KM/H", "1123 hPa");
    var ros = new city ("Rosario", "23 Grados Celcius", "11 KM/H", "1220 hPa");
    var bb = new city ("Bahia Blanca", "19 Grados Celcius", "54 KM/H", "1020 hPa");  

    const arrayCitys = (mdq, bsas, ros, bb);
    //Muestra de objeto con alert

    switch (ciudadPrompt){
        case "1": alert("La temperatura en " + mdq.ciudad + " es de " + mdq.temperatura + "\n el viento es de " + mdq.viento + "\n y la presion es de " +mdq.presion);
        break;
        case "2": alert("La temperatura en " + bsas.ciudad + " es de " + bsas.temperatura + "\n el viento es de " + bsas.viento + "\n y la presion es de "  +bsas.presion);
        break;
        case "3": alert("La temperatura en " + ros.ciudad + " es de " + ros.temperatura + "\n el viento es de " + ros.viento + "\n y la presion es de " +ros.presion);
        break;
        case "4": alert("La temperatura en " + bb.ciudad + " es de " + bb.temperatura + "\n el viento es de " + bb.viento + "\n y la presion es de " +bb.presion);
        break;
        
    }

}   

menuPrincipal();