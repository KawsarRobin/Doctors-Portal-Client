import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CheckoutForm from './CheckoutForm ';

const stripePromise = loadStripe(
  'pk_test_51JvzHYHdFb6cbznJfFDgkHfPGUmc0hd7jQtJyatdQwvC9JnIYsXxrxtN7iRmovqRH3sybxDa0PfWMAEqlghJR8Ci003qMCwnh0'
);

const Payment = () => {
  const { appointmentId } = useParams();
  const [appointment, setAppointment] = useState({});

  useEffect(() => {
    fetch(
      `https://intense-cove-70929.herokuapp.com/appointments/${appointmentId}`
    )
      .then((res) => res.json())
      .then((data) => setAppointment(data));
  }, [appointmentId]);

  return (
    <div>
      <h2>
        Please Pay for: {appointment.patientName} for {appointment.ServiceName}
      </h2>
      <h4>Pay: ${appointment.price}</h4>

      {appointment.price && (
        <Elements stripe={stripePromise}>
          <CheckoutForm appointment={appointment} />
        </Elements>
      )}
    </div>
  );
};

export default Payment;
