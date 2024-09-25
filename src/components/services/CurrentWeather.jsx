import { useGetCurrentWeatherQuery } from '../../redux/api/serviceApi';
import Loader from '../layout/Loader';

const CurrentWeather = () => {
    const city = "hawaii";

    const { data, isLoading } = useGetCurrentWeatherQuery(city);

    if (isLoading) return <Loader />;

    let temp = (Number(data?.main.temp) - 273.15).toFixed(2);
    let location = data?.name;
    let feels_like = (Number(data?.main.feels_like) - 273.15).toFixed(2);

    return (
      <div className="App">
        <h1>Météo</h1>
        <p>It's {temp}°C and it feels like {feels_like}°C in {location}.</p>
    </div>
    );
};

export default CurrentWeather;
