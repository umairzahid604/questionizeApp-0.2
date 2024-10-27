import React from 'react'
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer'
import Link from 'next/link';
import Head from 'next/head';
import Aos from 'aos';
import Script from 'next/script';
import { useEffect } from 'react';
import Image from 'next/image'
import Banner from '@/components/Banner';

export default function about() {
    useEffect(() => {
        Aos.init({
            offset: 100,
            duration: 500,
            easing: 'ease-in-sine',
            delay: 0,
            once: true
        })
    }, [])
        ;


    return (
        <>
            <Head>
                <title>About Us - NerdyQAi</title>
                <meta name="description" content="Hi, I'm Umair Zahid founder and creator of NerdyQAi.com. Experienced and proficient web developer with over +5 years of expertise" />

            </Head>
            <Navbar apiKey={"asd"} />
            <div className="container">
                <div className="about">
                    <div className="content-box">
                        <div className="content">
                            <h2 data-aos="fade-up">About Us</h2>
                            <p data-aos="fade-up" className='para'>Welcome to NerdyQAi.com, the brainchild of Umair Zahid - an accomplished and skilled web developer with an impressive track record spanning over 5 years.</p>
                            <p data-aos="fade-up" >Together with my dedicated development team, we have successfully undertaken a wide array of projects, catering to the needs of both small-scale enterprises and large corporations.</p>
                            <p data-aos="fade-up" >Our commitment to excellence has consistently resulted in delivering top-notch solutions that surpass expectations.</p>
                            <Banner />

                        </div>
                        <div className="image"><Image src={"/about-me.png"} width={500} height={500} alt='picture is not available'></Image></div>
                    </div>

                    <div className="content-box">
                        <div className="content order-1">
                            <h2 data-aos="fade-up">NerdyQAi's Vision</h2>
                            <p data-aos="fade-up" className='para'>At NerdyQAi.com, our vision is rooted in providing a premium experience to everyone, completely free of charge. </p>
                            <p data-aos="fade-up" className='para'>Our primary focus is on serving students, non-profit organizations, startups, and small businesses, ensuring they have access to powerful tools and features without any cost barriers.  </p>
                            <p data-aos="fade-up" className='para'>We believe in making technology accessible to all, fostering growth and innovation across various domains.</p>


                        </div>
                        <div className="image order-0"><Image src={"/robot-vision.png"} width={500} height={500} alt='picture is not available'></Image></div>
                    </div>

                    <div className="content-box">
                        <div className="content">
                            <h2 data-aos="fade-up">Embrace the Journey of Innovation</h2>
                            <p data-aos="fade-up" className='para'>With an unyielding passion for development, we are continuously working on enhancing NerdyQAi.com, introducing new and valuable resources for our users.</p>
                            <p data-aos="fade-up" className='para'>Exciting developments are on the horizon, and we invite you to stay connected as we embark on this remarkable journey together.</p>
                            <p data-aos="fade-up" className='para'>Together, let's embrace the power of knowledge and progress toward a brighter future!</p>


                        </div>
                        <div className="image"><Image src={"/innovation-journey.png"} width={500} height={500} alt='picture is not available'></Image></div>
                    </div>

                </div>



            </div>
            <Footer />
            <Script src="https://unpkg.com/aos@2.3.1/dist/aos.js" />

        </>
    )
}
