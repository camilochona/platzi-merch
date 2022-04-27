import React, {useContext} from 'react';
import AppContext from '../context/AppContext';
import { PayPalButton } from 'react-paypal-button-v2';
import '../styles/components/Payment.css';
import { useNavigate } from 'react-router-dom';

const Payments = () => {
  const {state, addNewOrder} = useContext(AppContext);
  const {cart, buyer} = state;
  const paypalOptions ={
    clientId: 'ATN4MgsCVKSXinkSTL1YqlANTikW5fXyo5C7TkyVUG7JB0DTr1G2aabkWFF9Uz6kKo61tL48cfWpomc4',
    intent: 'capture',
    currency: 'USD'
  };
  const buttonStyles= {
    layout: 'vertical',
    shape: 'rect'
  };
  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };
  const navigate = useNavigate();
  const handlePaymentSuccess = (data) => {
    if(data.status === 'COMPLETED'){
      const newOrder = {
        buyer: buyer,
        product: cart,
        payment: data
      }
      addNewOrder(newOrder, navigate('/checkout/success'));
    }
  }
  return (
    <section className="Payment">
      <section className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {cart.map((item)=>(
            <section className='Payment-item' key={item.title}>
              <section className='Payment-element'>
                <h4>{item.title}</h4>
                <span>
                  {' '}
                  ${' '}{item.price}
                </span>
              </section>
            </section>
        ))}
        <section className="Payment-button">
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal()}
            onPaymentStart={() => console.log('START PAYMENT')}
            onSuccess={handlePaymentSuccess}
            onError={error => console.log(error)}
            onCancel={data => console.log(data)}
          />
        </section>
      </section>
      <section></section>
    </section>
  );
};

export default Payments;