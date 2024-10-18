import React from 'react';

function OrderInfo({ product, quantity, total }) {
  return (
    <div>
      <h2>Order info</h2>
      <table border="1" style={{ margin: '0 auto', textAlign: 'center' }}>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{product.name}</td>
            <td>{quantity}</td>
            <td>{total}€</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default OrderInfo;
