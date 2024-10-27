// PayoneerComponent.js
import React, { useState } from 'react';

const PayoneerComponent = () => {
  const [amount, setAmount] = useState('');

  const handlePayment = async () => {
    try {
      const response = await fetch('https://api.payoneer.com/v1/payments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer YOUR_PAYONEER_API_KEY`,
        },
        body: JSON.stringify({
          amount,
          // other required parameters
        }),
      });

      // Check if the request was successful (status code 2xx)
      if (response.ok) {
        const responseData = await response.json();
        // Handle the response from Payoneer
        console.log(responseData);
      } else {
        // Handle errors
        const errorData = await response.json();
        console.error('Error making payment:', errorData);
      }
    } catch (error) {
      // Handle network errors
      console.error('Network error:', error);
    }
  };

  return (
    <div>
      <h2>Pay with Payoneer</h2>
      <input
        type="text"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handlePayment}>Pay</button>
    </div>
  );
};

export default PayoneerComponent;
