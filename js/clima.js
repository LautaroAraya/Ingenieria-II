/*const name = segundarespuesta.name;
const main = segundarespuesta.main;
const temp = segundarespuesta.temp;*/


const miFormulario = document.getElementById("cityForm");
miFormulario.addEventListener("submit", (event) => {
event.preventDefault();

  const valorIngresado = document.getElementById("cityNameInput").value;
  const api_key = 'e885fd2c18d17ea805755f848fca8534';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${valorIngresado}&appid=${api_key}&lang=es&units=metric`;
  fetch(url)
    .then((respuesta)=>{
    return respuesta.json()
    })
    .then((segundarespuesta) => {
      const { name, main, weather } = segundarespuesta;
      const { temp } = main;
      const {description, icon } = weather[0];
      const imagenFinal = `https://openweathermap.org/img/wn/${icon}@2x.png`;
      const spanCityName = document.getElementById('resultCityName')
      spanCityName.textContent =name;
      const spanresultCitytemp = document.getElementById('resultCitytemp')
      spanresultCitytemp.textContent = temp;
      const spanresultWeatherDescription = document.getElementById('resultWeatherDescription')
      spanresultWeatherDescription.textContent = weather[0].description;
      const spanresultWeatherImage = document.getElementById('resultWeatherImage')
      spanresultWeatherImage.src = imagenFinal;
      
    })
    .catch((err)=>{
      console.log(err);
    })
}); 