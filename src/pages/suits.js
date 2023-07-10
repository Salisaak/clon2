import React from 'react';
import Products from '../components/products/products.js';
import pic1 from "../images/case.jpg";
import pic2 from "../images/RECORD.jpg";
import pic3 from "../images/blue-plaid.jpg";
import pic4 from "../images/01.jpg";
import pic5 from "../images/tux-2.jpg";
import pic6 from "../images/tie.jpg";
import pic7 from "../images/shirt.jpg";
import pic8 from "../images/the-line-s.jpg";


const App = () => {
    const options = [
        {
            id: 1,
            image: pic1,
            imageHovered: pic2,
            line1: 'Option 1',
            line2: '$29.99'
          },
     
      ];
      

  return (
    <div className="app">
      
      <Products options={options} />
    </div>
  );
};

export default App;