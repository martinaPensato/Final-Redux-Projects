//this is needed for the initial loading message
//used in weatherinfo
//the word weather is capitalized differently because there is a joke in the text 
import React from 'react';

const LoadingMessage = ({ text, color, fontSize }) => {
  return (
    <p style={{ color, fontSize }}>
      {text.split(' ').map((word, index) => (
        word.toLowerCase() === 'weather' ? (
          <i key={index}>{word}</i>
        ) : (
          <span key={index}>{word}</span>
        )
      ))}
    </p>
  );
};

export default LoadingMessage;