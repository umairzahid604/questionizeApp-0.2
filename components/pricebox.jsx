import React from 'react'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { CheckoutForm } from "@/components/CheckoutFormContent";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);
import { Elements } from "@stripe/react-stripe-js";

export const PriceBox = ({ plan }) => {
    const [showCard, setShowCard] = useState(false)

    const options = {
        mode: 'payment',
        amount: plan.amount,
        currency: 'usd',
        payment_method_types: ['card']

    };

    return (

        <div className="price-box">
            <div className="price-tag">
                <br />
                <h2>{plan.name}</h2>
                <h3>{plan.credits}</h3>
            </div>
            {!showCard &&
                <>
                    <div className="features">
                        {plan.features.map((feature,i) => {
                            return (
                                <p key={i}><span>{feature.symbol}</span>{feature.text}</p>
                            )
                        })}

                    </div>
                    <button onClick={() => setShowCard(showCard ? false : true)} className='buy-button'>Buy Credits</button>
                </>

            }
            {showCard &&
                <Elements stripe={stripePromise} options={options}>
                    <CheckoutForm setShowCard={setShowCard} plan={plan.plan} credits={plan.creditNum} amount={plan.amount} />
                </Elements>
            }


        </div>

    )
}
