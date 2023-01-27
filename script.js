

function calculoDivisa() {

    //Ingresa y solicita nombre
    let name = prompt("Ingrese su nombre");
    let endProgram;
    

    //Se ejecuta siempre que endProgram sea Si o distinto de No

    while(endProgram != "No"){
        let moneda = prompt(`Hola ${name}, Indique moneda \n Euro, Dolar, Real`);
        while (moneda != "Euro" && moneda != "Dolar" && moneda != "Real")
            {
            moneda = prompt ("Debe ingresar una moneda valida \n Euro, Dolar, Real");   
            }
    
            let valor = prompt("Ingrese un valor que quiera convertir (PESOS)")
            while(isNaN(valor)){
                valor = prompt("Por favor ingrese un numero valido");
            }  
            //Llama a funcion que realiza la conversion
        operacionDivisa(valor, moneda);
        endProgram = prompt(`Desea hacer otra conversion:\n Si / No`);
            while (endProgram != 'Si' && endProgram != 'No') {
        endProgram = prompt(`Desea hacer otra conversion:\n Si / No`);
            }
    }  
    
}
function operacionDivisa (valor, moneda){
    switch (moneda){
        case "Euro": alert("La cantidad de $"+ valor +"  equivale a  $"+ valor*207,80);
        break;
        case "Dolar": alert("La cantidad de $"+ valor +"  equivale a  $"+ valor*380,80);
        break;
        case "Real": alert("La cantidad de $"+ valor +"  equivale a  $"+ valor*150,80);
        break;
    }

}
calculoDivisa();
