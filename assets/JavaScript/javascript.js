// fetch() method: It is defined on the window object, which we can use to perform request.
// This method will return a promise
// Promise will either be fullfilled or rejected
const key = '6d2c5466092de2babc8fd56a62672dee';

fetch("http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={6d2c5466092de2babc8fd56a62672dee}").then((data)=>{
    console.log(data);
})

