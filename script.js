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
            city.innerHTML = `${dataW.name}, ${dataW.sys.country}`;
            temp.innerHTML = toCelsius(dataW.main.temp);
            details.innerHTML = dataW.weather[0].description;
            tempmax.innerHTML = toCelsius(dataW.main.temp_max);
            tempmin.innerHTML = toCelsius(dataW.main.temp_min);

        } else {
            city.innerHTML = `${dataW.name}, ${dataW.sys.country}`;
            temp.innerHTML = dataW.main.temp;
            details.innerHTML = dataW.weather[0].description;
            tempmax.innerHTML = dataW.main.temp_max;
            tempmin.innerHTML = dataW.main.temp_min;
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

btnSumbit.onclick = function formSumbit(event) {
    event.preventDefault();
    searching(searchbox.value);
}


function toCelsius(input) {
    return Math.round(input - 273.15);

}


const clearField = () => {
    searchbox.value = "" ;
}

