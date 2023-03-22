//Constante API
const APIweather = {
    key: "0d508485b2042924a6316ec696440756",
    url: "https://api.openweathermap.org/data/2.5/weather"
}

const temp = document.getElementById("temp");
const maxmin = document.getElementById("maxmin");
const details = document.getElementById("details");
const date = document.getElementById("date")
const city = document.getElementById("city");

async function searching(query) {
    try {
        const response = await fetch(`${APIweather.url}?q=${query}&appid=${APIweather.key}&lang=es`);
        const dataW = await response.json();
        console.log(dataW);

        city.innerHTML = `${dataW.name}, ${dataW.sys.country}`;
        temp.innerHTML = dataW.main.temp;
        details.innerHTML = dataW.weather[0].description;
        
    } catch (error) {
        console.log(error);

        Swal.fire({
            icon: 'error',
            title: 'Ups',
            text: 'Hubo un error al cargar la ciudad',
            
        })
    }
}
function formSumbit(event) {
    event.preventDefault();
    searching(searchbox.value);

}

const form = document.getElementById('search-form');
const searchbox = document.getElementById('search-box');

form.addEventListener("submit", formSumbit);