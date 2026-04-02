import { createContext, useState } from 'react';
import { loadWeather } from '../../api';

const WeatherContext = createContext();

const WeatherContextProvider = props => {
  const [weather, setWeather] = useState('');

  const getWeather = async () => {
    try {
      const weather = await loadWeather();
      setWeather(weather);
    } catch (e) {
      alert(e);
    }
  };

  return (
    <WeatherContext.Provider value={{ weather, getWeather }}>
      {props.children}
    </WeatherContext.Provider>
  );
};

export { WeatherContext, WeatherContextProvider };
