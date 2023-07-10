import React, { useState } from 'react';

import './products.css';
const ProductOptions = ({ options }) => {
    const [hoveredOption, setHoveredOption] = useState(null);
  
    const handleOptionHover = (optionId) => {
      setHoveredOption(optionId);
    };
  
    const handleOptionLeave = () => {
      setHoveredOption(null);
    };
  
    return (
      <div className="bigflex">
        <div className="product-options">
          {options.map((option) => (
            <div
              key={option.id}
              className="product-option"
              onMouseEnter={() => handleOptionHover(option.id)}
              onMouseLeave={handleOptionLeave}
            >
              <img
                src={hoveredOption === option.id ? option.imageHovered : option.image}
                alt={option.name}
                className={`option-image ${hoveredOption === option.id ? 'fade-in' : 'fade-out'}`}
              />
              <div className="text">
                <span className="option-line1">{option.line1}</span>
                <br />
                <span className="option-line2">{option.line2}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  
  
export default ProductOptions;