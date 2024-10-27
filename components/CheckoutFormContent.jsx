import React, { useState } from 'react';
import {
    PaymentElement,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';

import { useRouter } from 'next/router';

export const CheckoutForm = ({ plan, amount, credits, setShowCard }) => {
    const stripe = useStripe();
    const elements = useElements();
    const router = useRouter()
    const [isVerifing, setVerifing] = useState(false)
    const [errorMessage, setErrorMessage] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setVerifing(true)


        if (elements == null) {
            setVerifing(false)

            return;
        }

        // Trigger form validation and wallet collection
        const { error: submitError } = await elements.submit();



        if (submitError) {
            // Show error to your customer
            setVerifing(false)
            setErrorMessage(submitError.message);
            return;
        }

        // Create the PaymentIntent and obtain clientSecret from your server endpoint
        const res = await fetch('./api/create-intent', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ amount })
        });

        const { clientSecret, id } = await res.json();

        const { error } = await stripe.confirmPayment({
            //`Elements` instance that was used to create the Payment Element
            elements,
            clientSecret: clientSecret,
            redirect: 'if_required'

        });

        if (error) {
            // This point will only be reached if there is an immediate error when
            // confirming the payment. Show error to your customer (for example, payment
            // details incomplete)
            setVerifing(false)
            setErrorMessage(error.message);
        } else {
            // Your customer will be redirected to your `return_url`. For some payment
            // methods like iDEAL, your customer will be redirected to an intermediate
            // site first to authorize the payment, then redirected to the `return_url`.
            let data = await fetch(`./api/setcredits`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ id, credits, plan })
            })

            data = await data.json()
            if (!data.error) {
                setVerifing(false)
                setShowCard(false)
                router.push("./?v=true")
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <PaymentElement />
            <br />
            <button className='buy-button' type="submit" disabled={!stripe || !elements}>
                {isVerifing ? "Verifing..." : "Confirm"}
            </button>
            {/* Show error message to your customers */}
            {errorMessage && <div>{errorMessage}</div>}
        </form>
    );
};