const button = document.querySelector('#myBtn');


let weather = {
    apiKey: '6d2c5466092de2babc8fd56a62672dee',
     fetchWeather: function (city, state, country){
        fetch("https://api.openweathermap.org/geo/1.0/direct?q=" 
        + city 
        + state 
        + country
        + "&limit=1&appid=" 
        + this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.directionWeather(data));
    },
    directionWeather: function(data) {
        const direct = [
            {
              "name": "",
              "local_names": {
                "en": "",
                "ru": "",
                "uk": ""
              },
              "lat": "",
              "lon": "",
              "country": "",
              "state": ""
            }
          ]
          console.log(direct);
        //   const flattenedData = {
        //     name: data[0].name,
        //     en: data[0].local_names.en,
        //     ru: data[0].local_names.ru,
        //     uk: data[0].local_names.uk,
        //     lat: data[0].lat,
        //     lon: data[0].lon,
        //     country: data[0].country,
        //     state: data[0].state
        //   };
        // const {lat, lon} = data.direct[0];
        // console.log(lat,lon)
        // const endPointApi = 'api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon${lon}&appid=6d2c5466092de2babc8fd56a626'
        // fetch(endPointApi, {lat, lon})
        // .then((response) => response.json())
        // .then((data) => console.log(data));
    }
  
    





// function searchBtn () {
//     console.log('button clicked');

}

// button.addEventListener('click', searchBtn)