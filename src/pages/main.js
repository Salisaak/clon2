import React from 'react';
import ClothingOptions from '../components/clothes/ClothingOptions';
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
          line1: 'Option 2',
          line2: '$29.99',
          line3: '$29.99'
        },
        {
          id: 2,
          image: pic2,
          line1: 'Option 2',
          line2: '$29.99',
          line3: '$29.99'
        },
        {
            id: 3,
            image: pic3,
            line1: 'Option 2',
            line2: '$29.99',
            line3: '$29.99'
          },
          {
            id: 4,
            image: pic4,
            line1: 'Option 2',
            line2: '$29.99',
            line3: '$29.99'
          },
          {
            id: 5,
            image: pic5,
            line1: 'Option 2',
            line2: '$29.99',
            line3: '$29.99'
          },
          {
            id: 6,
            image: pic6,
            line1: 'Option 2',
            line2: '$29.99',
            line3: '$29.99'
          },
          {
            id: 7,
            image: pic7,
            line1: 'Option 2',
            line2: '$29.99',
            line3: '$29.99'
          },
          {
            id: 8,
            image: pic8,
            line1: 'Option 2',
            line2: '$29.99',
            line3: '$29.99'
          },
     
      ];
      

  return (
    <div className="app">
      
      <ClothingOptions options={options} />
    </div>
  );
};

export default App;
