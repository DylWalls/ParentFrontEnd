import React, { useState } from "react";
import ReactDOM from "react-dom"

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

const PayPal = (user)=> {
  const [price, setPrice] = useState(162.50);
  
  const createOrder= (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: price,
          },
        },
      ],
    });
  }

  const onApprove= (data, actions) => {
    console.log(data);
    return actions.order.capture();
  }
  return (
    <div className="app">
      <div className="wrapper">
        <h1>Enter a amount you would like to pay!</h1>
          <h1>For Weekly enter:162.50</h1>
          <h1>For Bi-Weekly:325</h1>
          <h1>For Monthly:650</h1>
        <input type="text" onChange={e=> setPrice(e.target.value)} value={price}/>
       <PayPalButton
      createOrder={(data, actions) => createOrder(data, actions)}
      onApprove={(data, actions) => onApprove(data, actions)}
    />
    </div>
    </div>
  );
}

export default PayPal;