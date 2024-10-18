import React, { useState } from 'react';
import OrderForm from './OrderForm';
import OrderInfo from './OrderInfo';
import amd from '../pictures/amd.jpg'; // Corrected import path

function ComponentUi() {
  const [quantity, setQuantity] = useState(3);
  const product = { 
    name: 'AMD Ryzen 5 3600',
    price: 245,
    image: amd // Use the imported image
  };

  const total = product.price * quantity;

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginLeft: '20px' }}>
        <img src={amd} alt="AMD Ryzen 5 3600" style={{ width: '150px', height: '150px', marginRight: '20px' }} />
        <h1>Welcome to product page!</h1>
      </div>
      <OrderForm product={product} quantity={quantity} setQuantity={setQuantity} />
      <OrderInfo product={product} quantity={quantity} total={total} />
    </div>
  );
}

export default ComponentUi;
