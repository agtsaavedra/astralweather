function calculoDivisa() {
    let name = prompt("Ingrese su nombre");
    let moneda = prompt(`Hola ${name}, Indique moneda \n Euro, Dolar, Real`);

    while (moneda != "Euro" && moneda != "Dolar" && moneda != "Real")
    {
    moneda = prompt ("Debe ingresar una moneda valida \n Euro, Dolar, Real");   
    }

    let valor = prompt("Ingrese un valor que quiera convertir (PESOS)")
    while(valor === 'NaN'){
        valor = prompt("Por favor ingrese un numero valido");
        }  

        operacionDivisa(valor, moneda);
  
}
function operacionDivisa (valor, moneda){
    switch (moneda){
        case "Euro": alert("La cantidad de "+ valor +"equivale a"+ valor*207,80);
        case "Dolar": alert("La cantidad de "+ valor +"equivale a"+ valor*380,80);
        case "Real": alert("La cantidad de "+ valor +"equivale a"+ valor*150,80);
    }

}
calculoDivisa();