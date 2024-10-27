import React from 'react'
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer'
import { useState } from 'react';
import Head from 'next/head';
import { BoxSwiper } from '@/components/postswiper';
import Banner from '@/components/Banner';


export default function page({ data }) {
    const { posts } = data
    const categories = Array.from(new Set(posts.map((post) => post.category)))

    function capitalizeAsHeading(text) {
        return text.split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }

    return (
        <>
            <Head>
                <title>Blog - NerdyQAi</title>
                <meta name="description" content="" />

            </Head>
            <Navbar apiKey={"asd"} />
            <div className="container">
            <Banner/>
               
                <h1 className='post-category-heading'>Latest Posts</h1>
                <div className="post-box-wrapper">
                    <BoxSwiper type="blog" Boxes={posts} />
                </div>
                {categories.map((category,i) => {
                    return (

                        <React.Fragment key={i}>
                        <Banner/>
                            <h1 className='post-category-heading'>{capitalizeAsHeading(category)}</h1>
                            <div className="post-box-wrapper">
                                <BoxSwiper type="blog" Boxes={posts.filter((post)=> post.category == category)} />
                            </div>
                        </React.Fragment>
                    )


                })}

            </div>
            <Footer />
        </>

    );
}



export async function getServerSideProps(context) {
    // Fetch data from external API

    const isProd = process.env.NODE_ENV == "production" ? true : false

    const host = context.req.headers.host

    let data = await fetch(`${isProd ? "https://" : "http://"}${host}/api/blog/getposts`)

    data = await data.json()
    // Pass data to the page via props
    return { props: { data } }
}
