//this is the main form
import React, { useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import IconButton from './IconButton';


const CitySelector = ({ onSelectCity }) => {
  const [city, setCity] = useState('');

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  //this is to get snd show the current date before form
  const getCurrentDate = () => {
    const today = new Date();
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }; //i chose the format
    return today.toLocaleDateString('en-US', options);
  };

  return (
    <Form>
      <InputGroup className="mb-3">
        <InputGroup.Text>{getCurrentDate()}</InputGroup.Text>
        <Form.Control
          type="text"
          placeholder="...Where?"
          value={city}
          onChange={handleCityChange}
          style={{ outline: 'none', boxShadow: 'none' }}
        />
      </InputGroup>

      <div className="d-flex justify-content-center">
        <IconButton onSelectCity={() => onSelectCity(city)} />
      </div>
    </Form>
  );
};

export default CitySelector;
