//this is needed for the cards showing the weather data
import React from 'react';
import { Card } from 'react-bootstrap';
import { FaSun, FaCloud, FaTint, FaWind } from 'react-icons/fa';

//everycard will have the same properties if not specifically changed
const WeatherCard = ({ title, value, unit, icon, customBackgroundStyle }) => (
  <Card style={{ marginTop: '10px', backgroundColor: 'rgba(255, 255, 255, 0.7)',  }}>
    <Card.Body style={{ height: '100px', overflow: 'hidden', textOverflow: 'ellipsis', textAlign: 'center' }}>
      {icon && <div>{icon}</div>}
      <Card.Title>{title}</Card.Title>
      <Card.Text>{value !== null && `${value} ${unit}`}</Card.Text>
    </Card.Body>
  </Card>
);

export default WeatherCard;
