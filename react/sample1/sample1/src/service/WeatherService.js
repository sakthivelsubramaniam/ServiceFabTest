//npm install axios

let weatherItems =  [
    {
        "id":1,
        "date": "2024-01-22",
        "city": "Bangalore",
        "temperatureC": 51,
        "summary": "Chilly",
        "temperatureF": 123
    },
    {

        "id":2,
        "date": "2024-01-23",
        "city": "Chennai",
        "temperatureC": -11,
        "summary": "Scorching",
        "temperatureF": 23 
    },
    {

        "id":3,
        "date": "2024-01-24",
        "city": "Delhi",
        "temperatureC": -1,
        "summary": "Chilly",
        "temperatureF": 31
    },
    {

        "id":4,
        "date": "2024-01-25",
        "city": "Hyderabad",
        "temperatureC": -15,
        "summary": "Cool",
        "temperatureF": 20
    },
    {
        "id":5,
        "date": "2024-01-26",
        "city": "Cochin",
        "temperatureC": -9,
        "summary": "Scorching",
        "temperatureF": 16
    }
];

const GetWeather = () => {
    
    return weatherItems;

};

const GetWeatherItem = (id) => {

    return weatherItems.filter(item => item.id == id)[0];
}; 

var WeatherService = {

getList: GetWeather,
get: GetWeatherItem
}

export default WeatherService 




