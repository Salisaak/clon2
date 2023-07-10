import React from 'react';
import './ClothingOptions.css';
const ClothingOptions = ({ options }) => {
  return (
    <div className='bigflex'>
    <div className="clothing-options">
      {options.map(option => (
        <div key={option.id} className="clothing-option">
          <img src={option.image} alt={option.name} className="option-image" />
          <div className='text'>
          <p className="option-line1">{option.line1}</p>
          <p className="option-line2">{option.line2}</p>
          <p className="option-line3">{option.line3}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default ClothingOptions;