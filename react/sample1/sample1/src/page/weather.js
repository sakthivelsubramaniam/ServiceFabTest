
import WeatherServiceProxy from "../service/WeatherService";
import './weather.css';


const Weather = () => {
    var weatherItems = WeatherServiceProxy.getList();
    var weatherItem = WeatherServiceProxy.get(2);
    return (
        <>
            <div className="page-content">
            <h1>Weather</h1>
            {weatherItems.map((item) => (
                <div className="" key={item.id}>
                    <h4>{item.summary}</h4>
                    <p>{item.temperatureC}</p>
                </div>
            ))}

                 <div> Date : {weatherItem.date}</div>
                <div> Summary : {weatherItem.summary}</div>
                <div> TemperatureC : {weatherItem.temperatureC}</div>
                <div> temperatureF : {weatherItem.temperatureF}</div>
            </div>
        </> )


};

export  default Weather;