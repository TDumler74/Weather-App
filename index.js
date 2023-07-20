//https://get.geojs.iov1/ip/geo/{ip address}.json
const cityElement = document.getElementById("city");
const temperatureElement = document.getElementById("temperature");
const windElement = document.getElementById("wind");
const descriptionElement = document.getElementById("description");
 

async function loadLocation(){
const res = await fetch(`https://get.geojs.io/v1/ip/geo.json`);
const obj = await res.json();  
 const {country,city,longitude,latitude } = obj;
//console.log(country);
//console.log(city);
//console.log(longitude);
//console.log(latitude);
const resMet = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`)
    const objMet = await resMet.json();
     const {current_weather} = objMet;
     //console.log(current_weather);
    const { temperature , windspeed ,  winddirection , weathercode,  is_day, time}= current_weather;
    //console.log(temperature);
    //console.log(windspeed);
    //console.log(weathercode);
   
    cityElement.textContent += city;
  temperatureElement.textContent += temperature+"°C";
  windElement.textContent += windspeed +"km/h ";
  descriptionElement.textContent += getWeatherDescription(weathercode);



}
loadLocation();

  function getWeatherDescription(code){ switch(code){
    case 0 :return "Clear sky";
    case 1 :return "Mainly clear, partly cloudy, and overcast";
    case 2 :return "Mainly clear, partly cloudy, and overcast";
    case 3 :return "Mainly clear, partly cloudy, and overcast";
    case 45:return "Fog and depositing rime fog";
    case 48:return "Fog and depositing rime fog";
    case 51:return "Drizzle: Light, moderate, and dense intensity";
    case 52:return "Drizzle: Light, moderate, and dense intensity";
    case 53:return "Drizzle: Light, moderate, and dense intensity";
    case 56:return "Freezing Drizzle: Light and dense intensity"; 
    case 57:return "Freezing Drizzle: Light and dense intensity";
    case 61:return	"Rain: Slight, moderate and heavy intensity"; 
    case 63:return	"Rain: Slight, moderate and heavy intensity";
    case 65:return	"Rain: Slight, moderate and heavy intensity";
    case 66:return 	"Freezing Rain: Light and heavy intensity"; 
    case 67:return 	"Freezing Rain: Light and heavy intensity";
    case 71:return	"Snow fall: Slight, moderate, and heavy intensity";
    case 73:return	"Snow fall: Slight, moderate, and heavy intensity";
    case 75:return	"Snow fall: Slight, moderate, and heavy intensity";
    case 77:return"Snow grains";
    case 80:return	"Rain showers: Slight, moderate, and violent";
    case 81:return	"Rain showers: Slight, moderate, and violent"; 
    case 82:return	"Rain showers: Slight, moderate, and violent";
    case 85:return"Snow showers slight and heavy"; 
    case 86:return"Snow showers slight and heavy";
    case 95:return"Thunderstorm: Slight or moderate";
    case 96:return "Thunderstorm with slight and heavy hail";
    case 99:return "Thunderstorm with slight and heavy hail";
    default: 
    return console.log(" ");
}}


 




    






