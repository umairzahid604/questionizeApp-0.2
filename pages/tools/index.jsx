import React from 'react'
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer'
import { useState } from 'react';
import Head from 'next/head';
import { ToolBox } from '@/components/toolbox';
import { Tools } from '@/utils/constants';
import Banner from '@/components/Banner';
export default function contact() {






  return (
    <>
      <Head>
        <title>Tools - NerdyQAi</title>
        <meta name="description" content="writing tools for professionals, content writers, and teachers to help them while writing" />
        <meta name="keywords" content="free writing tools, text generation tools, content writers, assistent writer" />
      </Head>
      <Navbar apiKey={"asd"} />
      <div className="container">
        <Banner />
        <h1 className='post-category-heading'>Tools</h1>
        <div className="post-box-wrapper">

          {Tools.map((tool, i) => {
            return (
              // <div key={i} className="box">
              //   <a href={tool.link}>
              //     <h3>{tool.name}</h3>
              //     <p className='para'>{tool.description}</p>
              //   </a>
              //   <span className={`${tool.status}`}>{tool.status}</span>
              // </div>
              <ToolBox key={i} tool={tool} />
            )
          })}

          <Banner />


        </div>

      </div>
      <Footer />
    </>

  );
}

