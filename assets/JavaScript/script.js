const button = document.querySelector('#myBtn');
const apiKey = '{{ec6e87ea0164d3aa60c298a1d6b303c0}};'

const weatherContainer = document.getElementById('forecast');
const city = document.getElementById('city');
const error = document.getElementById('error');

const units ='imperial';
let temperatureSymbol = units == 'imperial' ? "°F" : "°C";

async function fetchForecast() {
    try {
        weatherContainer.innerHTML ='';
        error.innerHTML = '';
        city.innerHTML ='';

        const cnt = 6;
        const searchInputtedByUser = document.getElementById('searchinput').value;

        const apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={apiKey}&units=${units}&cnt=${cnt}';

        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(27, data);

        //Display error if user types invalid city or no city
        if (data.cod == '400' || data.cod =='404') {
            error.innerHTML = 'Not a valid city. Please input another city';
            return;
        }
        //Display weather data for each 3 hour increment
        data.list.forEach(data => {
            const dailyWeatherData = createWeatherDescription(data);
            weatherContainer.appendChild(dailyWeatherData)
        });
        //Display city name based on latitude and longitude
        city.innerHTML = 'Daily Weather for ${data.city.name}';

    } catch (error) {
        console.log(error);
    }

}




// function searchBtn () {
//     console.log('button clicked');

// }

// button.addEventListener('click', searchBtn);

