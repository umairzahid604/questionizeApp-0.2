import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const ReviewBox = ({ review }) => {

    return (

        <div className="post-box review-box">
            <div className="review"><i>“{review.review}”</i></div>
            <div className="name">- {review.name}  ⭐⭐⭐⭐⭐</div>
        </div>

    )
}
