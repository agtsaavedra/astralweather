// Constante API
const APIweather = {
    key: "0d508485b2042924a6316ec696440756",
    url: "https://api.openweathermap.org/data/2.5/weather",
    geoUrl: "https://api.openweathermap.org/geo/1.0/direct"
}

// Definiciones de elementos del DOM
const searchbox = document.getElementById('search-box');
const suggestions = document.getElementById("suggestions");
const temp = document.getElementById("temp");
const tempmax = document.getElementById("tempmax");
const tempmin = document.getElementById("tempmin");
const details = document.getElementById("details");
const city = document.getElementById("city");
const btnSumbit = document.getElementById("search-btn");
const btnRadioF = document.getElementById("radioF");
const btnRadioC = document.getElementById("radioC");
const weatherIcon = document.getElementById("weather-icon");
const languageToggle = document.getElementById("language-toggle");
const languageLabel = document.getElementById("language-label");

// Elementos de texto para actualizar según el idioma
const tempLabel = document.getElementById("temp-label");
const weatherHeader = document.getElementById("weather-header");
const maxLabel = document.getElementById("max-label");
const minLabel = document.getElementById("min-label");

// Variables globales
let weatherData = null;
let currentUnit = 'metric';
let currentLanguage = 'es';

// Inicializa el idioma desde localStorage
function initializeLanguage() {
    currentLanguage = localStorage.getItem("language") || 'es';
    languageToggle.checked = currentLanguage === 'en';
    updateLanguageText();
}

// Actualiza el texto de la interfaz según el idioma
function updateLanguageText() {
    languageLabel.textContent = currentLanguage === 'es' ? 'Español' : 'English';
    weatherHeader.textContent = currentLanguage === 'es' ? 'Revisa el clima hoy!' : 'Check today\'s weather!';
    tempLabel.innerHTML = currentLanguage === 'es' ? 'Temperatura Actual:' : 'Current Temperature:';
    maxLabel.textContent = currentLanguage === 'es' ? 'Max:' : 'High:';
    minLabel.textContent = currentLanguage === 'es' ? 'Min:' : 'Low:';
}

// Cambia el idioma cuando el usuario cambia el toggle
languageToggle.addEventListener("change", () => {
    currentLanguage = languageToggle.checked ? 'en' : 'es';
    localStorage.setItem("language", currentLanguage);
    updateLanguageText();
    if (weatherData) {
        searching(weatherData.name); // Actualiza el clima en el nuevo idioma
    }
});

// Función para obtener el clima
async function searching(query) {
    try {
        const response = await fetch(`${APIweather.url}?q=${query}&appid=${APIweather.key}&units=${currentUnit}&lang=${currentLanguage}`);
        const dataW = await response.json();
        weatherData = dataW;
        displayWeatherData(dataW);

        localStorage.setItem("lastCity", query);
        searchbox.value = query;
        clearSuggestions();
    } catch (error) {
        console.log(error);
        Swal.fire({
            icon: 'error',
            title: currentLanguage === 'es' ? 'Ups' : 'Oops',
            text: currentLanguage === 'es' ? 'Hubo un error al cargar la ciudad' : 'There was an error loading the city',
        });
    }
}

// Mostrar datos del clima
function displayWeatherData(data) {
    const tempUnit = currentUnit === 'metric' ? 'C' : 'F';
    const description = capitalizeFirstLetter(data.weather[0].description);

    city.innerHTML = `${data.name}, ${data.sys.country}`;
    temp.innerHTML = `${Math.round(data.main.temp)}° ${tempUnit}`;
    details.innerHTML = description;
    tempmax.innerHTML = `${Math.round(data.main.temp_max)}° ${tempUnit}`;
    tempmin.innerHTML = `${Math.round(data.main.temp_min)}° ${tempUnit}`;
    
    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    weatherIcon.src = iconUrl;
}

// Capitalizar primera letra
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Autocompletar ciudades
async function fetchCitySuggestions(query) {
    if (query.length < 3) {
        clearSuggestions();
        return;
    }
    try {
        const response = await fetch(`${APIweather.geoUrl}?q=${query}&limit=5&appid=${APIweather.key}&lang=${currentLanguage}`);
        const suggestionsData = await response.json();
        displaySuggestions(suggestionsData);
    } catch (error) {
        console.log("Error fetching city suggestions:", error);
    }
}

// Mostrar sugerencias
function displaySuggestions(suggestionsData) {
    clearSuggestions();
    suggestionsData.forEach(city => {
        const suggestionItem = document.createElement("li");
        suggestionItem.classList.add("list-group-item", "list-group-item-action");
        suggestionItem.innerText = `${city.name}, ${city.country}`;
        suggestionItem.onclick = () => {
            searchbox.value = city.name;
            searching(city.name);
            clearSuggestions();
        };
        suggestions.appendChild(suggestionItem);
    });
}

// Limpiar sugerencias
function clearSuggestions() {
    suggestions.innerHTML = "";
}

// Evento para el autocompletado
searchbox.addEventListener("input", () => {
    fetchCitySuggestions(searchbox.value);
});

// Evento para el botón de búsqueda
btnSumbit.onclick = function formSumbit(event) {
    event.preventDefault();
    searching(searchbox.value);
}

// Cambiar unidades de temperatura
btnRadioC.onchange = btnRadioF.onchange = function() {
    const selectedUnit = btnRadioC.checked ? 'metric' : 'imperial';
    if (selectedUnit !== currentUnit) {
        currentUnit = selectedUnit;
        if (weatherData) {
            searching(weatherData.name);
        }
    }
}

// Configuración inicial de la página
window.onload = () => {
    btnRadioC.checked = true;
    currentUnit = 'metric';
    initializeLanguage();
    const lastCity = localStorage.getItem("lastCity");
    if (lastCity) {
        searchbox.value = lastCity;
        searching(lastCity);
    }
}
