import React, { useState } from 'react';
import { itemData } from './data';

export default function ItemDisplay() {
  const [displayItems, setDisplayItems] = useState(itemData);
  return (
    <div className='itemsection'>
      
      {displayItems.map((item, index) => (
        <div className='gallery' key={index}>
          <img src={item.item_img} alt={`Item ${index + 1}`}  />
        </div>
      ))}
    </div>
  );
}
