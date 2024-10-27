import React from 'react'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { PriceBox } from './pricebox'

export const Pricing = ({ }) => {

    const PlansInfo = [
        {
            amount: 100, //cents
            creditNum: 5,
            plan: "basic",
            name: "$1",
            credits: "5 Credits",
            features: [
                { symbol: "✔️", text: "Add Upto 300 Words" },
                { symbol: "✔️", text: "Generate Upto 5 Questions (per request)" },
                { symbol: "❌", text: "Generate Long Answers" },
                { symbol: "✔️", text: "Q/A Tone customization" }
            ]
        },
        {
            amount: 300, // cents
            creditNum: 15,
            plan: "medium",
            name: "$3",
            credits: "15 Credits",
            features: [
                { symbol: "✔️", text: "Add Upto 500 Words" },
                { symbol: "✔️", text: "Generate Upto 15 Questions (per request)" },
                { symbol: "✔️", text: "Generate Long Answers" },
                { symbol: "✔️", text: "Q/A Tone customization" }
            ]
        },
        {
            amount: 500, // cents
            creditNum: 35,
            plan: "max",
            name: "$5",
            credits: "25 Credits",
            features: [
                { symbol: "✔️", text: "+10 Bonus Credits" },
                { symbol: "✔️", text: "Add Upto 700 Words" },
                { symbol: "✔️", text: "Generate Upto 25 Questions (per request)" },
                { symbol: "✔️", text: "Generate Long Answers" },
                { symbol: "✔️", text: "Q/A Tone customization" },

            ]
        }

    ]

    return (
        <div  className="pricing-wrapper">
            <h2 id='pricing' className=''>OR Go as little as <span> $1</span></h2>
            <p className='note'><strong>Note:</strong> Do not clear NerdyQAi cache/cookies (as you may lose your credits), buy only needed credits, and avoid purchasing multiple plans simultaneously.</p>
            {PlansInfo.map((plan, i) => <PriceBox key={i} plan={plan} />)}
        </div>
    )
}
