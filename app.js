const input = document.querySelector('.input');
const search = document.querySelector('.searchButton');
const temprature = document.querySelector('.temprature');
const cityname = document.querySelector('.city');
const humidity = document.querySelector('.humidity');
const windspeed = document.querySelector('.wind');
const main = document.querySelector('.main');
const Icon = document.querySelector('.WeatherIcon');


const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";



async function fectweather(city){

   try{
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const information = await response.json();

    console.log(information);

    temprature.textContent =` ${information?.main?.temp} deg`;

    cityname.textContent = information?.name ;

    windspeed.textContent =  `${information?.wind?.speed} km/h`;

    humidity.textContent = `${information?.main?.humidity}%`;

    //  Icon.src = `http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;

    // main.classList.add(active);



   }

   catch(error){

    temprature.textContent = "Invalid";
    cityname.textContent = "City Name" ;

   }
};

search.addEventListener('click',()=>{

    fectweather(input.value);

});

input.addEventListener('keypress',(e)=>{
    if(e.key === 'Enter'){

        fectweather(input.value);
    }
});
