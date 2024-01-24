import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CitySelector from './components/CitySelector';
import WeatherInfo from './components/WeatherInfo';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// function to check and keep track of the city selected
function App() {
  const [selectedCity, setSelectedCity] = useState(null);

//This is the main app body
//Centered and vertically aligned 
//it will show app title, date, form and button

  return (
    <div className="App">
      <Container fluid>
        <Row className="justify-content-center align-items-center" style={{ height: '100%' }}>
          <Col xs={12} md={12}>
            <h1 className="white-text text-center">It's raining... oh, man!</h1>
            <CitySelector onSelectCity={setSelectedCity} /> {/* CitySelector allowa the user to type and select a city */}
            {selectedCity && <WeatherInfo city={selectedCity} />} {/* this will display WeatherInfo if a city is selected */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

