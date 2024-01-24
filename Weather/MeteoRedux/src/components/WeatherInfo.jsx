// WeatherInfo.jsx// WeatherInfo.jsx
import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import WeatherCard from './WeatherCard';
import WeatherChart from './WeatherChart';
import { useDispatch, useSelector } from 'react-redux';
import { setError, clearError } from '../actions/errorAction';
import { setLoadingMessage, clearLoadingMessage } from '../actions/loadingMessageAction';  
import WeatherIcon from './WeatherIcon';
import LoadingMessage from './LoadingMessage';
import { FaSun, FaTint, FaWind, FaThermometerHalf, FaCloudRain, FaSnowflake } from 'react-icons/fa';

//this function contains state and redux hooks (imported above)
function WeatherInfo({ city }) {
  const [weatherData, setWeatherData] = useState(null);
  const dispatch = useDispatch();
  const error = useSelector((state) => state.error);
  const loadingMessage = useSelector((state) => state.loadingMessage);

  const fetchData = async () => {
    try {
      // API call to fetch weather data
      const apiKey = "01e48cc5f9ed4b4aa24b162806bf7256";
      const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
      const response = await fetch(apiUrl);

      // this if handles the response
      if (!response.ok) {
        dispatch(setError());
        return;
      }

      // here i'm parsing and filtering data
      // I use console.log to be sure api fetch is working fine
      const data = await response.json();
      console.log("Data from API:", data);

      const filteredData = filterDailyData(data.list);
      console.log("Filtered Data:", filteredData);

      // here i'm updating the state and clearing any error that might be there
      setWeatherData(filteredData);
      dispatch(clearError());
    } catch (error) {
      console.error(error);
      dispatch(setError(error.message));
    } finally {
      //I'm clearing the loading message when the loading is completed
      dispatch(clearLoadingMessage());
    }
  };

 // Effect hook that fetches data when the city selected changes
  useEffect(() => {
    if (city) {
      fetchData();
    }
  }, [city, dispatch]);

 //filtering data 
  const filterDailyData = (dataList) => {
    //checks for valid data
    if (!dataList || dataList.length === 0) {
      return [];
    }
    //extract data
    const cityData = dataList[0].city;
    // For each item, it creates a new object using the spread (...) operator
    return dataList.map((item) => ({
      ...item,
      city: {
        ...cityData,
      },
    }));
  };

  //this is the structure showing data
  //It will show the loading message and then the data fetched

  return (
    <Container>
      <Col>
        <div>
          {loadingMessage.text && (
            <LoadingMessage text="Loading... weather you like it or not!" color="white" fontSize="24px" />
          )}
          {/* this will display weather information if data is available */}
          {weatherData && weatherData.length > 0 && !loadingMessage.text ? (
            <>
              <Row>
                <Col>
                {/* here we have main card with city name */}
                  <WeatherCard
                    title="City"
                    value={city.toUpperCase()}
                    unit=""
                    className="text-center"
                  />
                </Col>
              </Row>
              <Row>
                {/* here we have all the cards with weather data */}
                <Col>
                  <WeatherCard
                    title="Temperature"
                    value={weatherData[0].main.temp}
                    unit="°C"
                    icon={<FaThermometerHalf />}
                  />
                </Col>
                <Col>
                  <WeatherCard
                    title="Weather Conditions"
                    value={weatherData[0].weather[0].description}
                    unit=""
                    icon={<WeatherIcon condition={weatherData[0].weather[0].main} />}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <WeatherCard
                    title="Humidity"
                    value={weatherData[0].main.humidity}
                    unit="%"
                    icon={<FaTint />}
                  />
                </Col>
                <Col>
                  <WeatherCard
                    title="Wind Speed"
                    value={weatherData[0].wind.speed}
                    unit="m/s"
                    icon={<FaWind />}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <WeatherChart data={weatherData} />
                </Col>
              </Row>
            </>
          ) : null}
        </div>
      </Col>
    </Container>
  );
}

export default WeatherInfo;
