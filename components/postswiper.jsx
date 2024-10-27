import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import { useEffect, useState, useRef } from 'react';
// register Swiper custom elements
register();
import { ToolBox } from './toolbox';
import { PostBox } from './postbox';
import { ReviewBox } from './reviewbox';

export const BoxSwiper = ({ Boxes, type }) => {
    const swiperElRef = useRef(null);

    useEffect(() => {


        const swiperParams = {
            breakpoints: {
                350: {
                    slidesPerView: 1,
                },
                750: {
                    slidesPerView: 2,
                },
                1150: {
                    slidesPerView: 3,
                },
            },
        };

        // now we need to assign all parameters to Swiper element
        Object.assign(swiperElRef.current, swiperParams);

        // and now initialize it
        swiperElRef.current.initialize();
    }, []);



    return (

        <swiper-container
            ref={swiperElRef}
            pagination="true"
            // loop="true"
            init="false"
            
        >
            {Boxes.map((box, i) => {
                return (
                    <swiper-slide key={i}>
                        {type == "tool" &&
                            <ToolBox tool={box} />
                        }
                        {type == "blog" &&
                            <PostBox post={box} />
                        }
                        {type == "review" &&
                            <ReviewBox review={box} />
                        }
                    </swiper-slide>

                )
            })}

            {type == "review" &&
                <swiper-slide>
                    <div className="post-box review-box">
                        <div className="review">“Tell us how NerdyQAi helped you! Share your thoughts, ideas, and requests. Need assistance? We're here for you. Connect with us at the <Link href={"/contact"}> NerdyQAi contact </Link> and be a part of making it even better!”</div>
                    </div>
                </swiper-slide>
            }
        </swiper-container>

    )
}
