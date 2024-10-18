import React from 'react';

function OrderForm({ product, quantity, setQuantity }) {
  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <label><strong>Select product</strong></label>
      <br />
      <label>
        Product: {product.name} ({product.price}€)
      </label>
      <br />
      <label>
        Quantity:
        <button onClick={handleDecrease}>-</button>
        <span style={{ margin: '0 10px' }}>{quantity}</span>
        <button onClick={handleIncrease}>+</button>
      </label>
    </div>
  );
}

export default OrderForm;
