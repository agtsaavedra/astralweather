//Constante API
const APIweather = {
    key: "0d508485b2042924a6316ec696440756",
    url: "https://api.openweathermap.org/data/2.5/weather"
}

//Definiciones de elementos del DOM
const searchbox = document.getElementById('search-box');
const temp = document.getElementById("temp");
const tempmax = document.getElementById("tempmax");
const tempmin = document.getElementById("tempmin")
const details = document.getElementById("details");
const city = document.getElementById("city");
const btnSumbit = document.getElementById("search-btn");
const btnRadioK = document.getElementById("radioK");
const btnRadioC = document.getElementById("radioC");


//Funcion Fetch


async function searching(query) {
    try {
        const response = await fetch(`${APIweather.url}?q=${query}&appid=${APIweather.key}&lang=es`);
        const dataW = await response.json();
        console.log(dataW);

        if (btnRadioC.checked) {
            //Seteo si grados celsius es check en radio
            city.innerHTML = `${dataW.name}, ${dataW.sys.country}`;
            temp.innerHTML = toCelsius(dataW.main.temp);
            details.innerHTML = dataW.weather[0].description;
            tempmax.innerHTML = toCelsius(dataW.main.temp_max);
            tempmin.innerHTML = toCelsius(dataW.main.temp_min);
            checkedWarning(dataW.main.temp);

        } else {
            city.innerHTML = `${dataW.name}, ${dataW.sys.country}`;
            temp.innerHTML = dataW.main.temp;
            details.innerHTML = dataW.weather[0].description;
            tempmax.innerHTML = dataW.main.temp_max;
            tempmin.innerHTML = dataW.main.temp_min;
            checkedWarning(dataW.main.temp)
        }

        clearField();
    } catch (error) {
        console.log(error);
        Swal.fire({
            icon: 'error',
            title: 'Ups',
            text: 'Hubo un error al cargar la ciudad',

        })
    }
}
//Funcion que ejecuta al realizar un click en boton busqueda
btnSumbit.onclick = function formSumbit(event) {
    event.preventDefault();
    searching(searchbox.value);
}

//Funcion que convierte grados kelvin a celsius
function toCelsius(input) {
    return Math.round(input - 273.15);

}

//Funcion que reinicia campo busqueda
const clearField = () => {
    searchbox.value = "";
}


//Warning hecho con sweetAlert para informar que esta haciendo mucho calor o frio
const checkedWarning = (temp) => {
    const tempreal = temp - 273.15
    if (tempreal > 28) {

        Swal.fire({
            icon: 'warning',
            title: 'Alerta',
            text: 'Atencion, esta haciendo mucho calor',

        })
    }

    if (tempreal < 10) {
        Swal.fire({
            icon: 'warning',
            title: 'Alerta',
            text: 'Atencion, esta haciendo mucho frio',

        })

    }

}