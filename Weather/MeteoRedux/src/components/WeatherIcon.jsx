//this is needed to handle the icons used in the cards
import React from 'react';
import { FaSun, FaCloud, FaTint, FaWind, FaThermometerHalf, FaCloudRain, FaSnowflake } from 'react-icons/fa';


// I want to determine the appropriate icon based on the weather condition
// for expla: sunny will show the sun, rainy the rain drop icon etc.
const WeatherIcon = ({ condition }) => {
  const getWeatherIcon = (weatherCondition) => {
    switch (weatherCondition.toLowerCase()) {
      case 'clear':
        return <FaSun />;
      case 'clouds':
        return <FaCloud />;
      case 'rain':
        return <FaCloudRain />;
      case 'snow':
        return <FaSnowflake />;
      default:
        return null;
    }
  };

  return getWeatherIcon(condition);
};

export default WeatherIcon;