//this is needed for the home page search button
import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { FaUmbrella, FaSun, FaSnowflake, FaWind } from 'react-icons/fa';

//here i tell the button to use the icon i chose as the initial one 
const IconButton = ({ onSelectCity }) => {
  const [currentIcon, setCurrentIcon] = useState(<FaUmbrella />);

  //I'm using setinterval to change the icon every second
  useEffect(() => {
    const iconInterval = setInterval(() => {
      const icons = [<FaUmbrella />, <FaSun />, <FaSnowflake />, <FaWind />]; //i chose and imported the icons
      const randomIndex = Math.floor(Math.random() * icons.length); //they are randomly selected 
      setCurrentIcon(icons[randomIndex]);
    }, 1000); //timer

    return () => clearInterval(iconInterval);
  }, []);

  return (
    <Button
      variant="success"
      onClick={onSelectCity}
      className="rounded-circle btn-xl"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '80px',
        width: '80px',
        fontSize: '24px',
        transition: 'background-color 0.3s ease',
      }}
    >
      {currentIcon}
    </Button>
  );
};

export default IconButton;