import React from 'react'
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer'
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image'
import Link from 'next/link';
import { SidePost } from '@/components/sidepost';
import { Tools } from '@/utils/constants';
import { SideTool } from '@/components/sideTool';
import Banner from '@/components/Banner';
export default function page({ data }) {
    const { post, relatedposts, moreposts } = data
    // const { title } = router.query;

    function formatDate(inputDate) {
        // Parse the input date string into a Date object
        const dateObj = new Date(inputDate);

        // Define month names to use in the output
        const monthNames = [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];

        // Get the components of the date
        const year = dateObj.getFullYear();
        const month = dateObj.getMonth();
        const day = dateObj.getDate();

        // Format the output as "Month, Day Year"
        const formattedDate = `${monthNames[month]}, ${day} ${year}`;

        return formattedDate;
    }

    // Example usage
    const inputDate = "2023-08-01T06:17:12.258+00:00";
    const formattedDate = formatDate(inputDate);



    return (
        <>
            {post &&
                <Head>
                    <title>{post.title}</title>
                    <meta name="description" content={post.title} />

                </Head>
            }
            <Navbar apiKey={"asd"} />
            <div className="post-container">
                {!post &&
                    <div className="post-notfound">
                        <h1>Oops! page not found! 😔</h1>
                        <h1><Link href={"/blog"}>Go to Blog 🚀</Link></h1>

                    </div>
                }
                {post &&
                    <>
                        <div className="blog-post">
                           <br />
                            <Banner />

                            <div className="author">
                                <Image src={post.author.avatar} width={100} height={100} alt='picture is not available'></Image>
                                <div className='author-info'>
                                    <h3>{post.author.name}</h3>
                                    <span>{post.author.skills}</span>
                                    <span>{formatDate(post.createdAt)}</span>
                                    <span>{post.readmins} Min Read</span>

                                </div>
                            </div>

                            <div className="content">
                                <h1>{post.title}</h1>
                                <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
                            <Banner/>
                            </div>

                        </div>
                        <div className="post-sidebar">
                            <div className='' dangerouslySetInnerHTML={{
                                __html: `<div><script type="text/javascript">
        atOptions = {
          'key' : '265a7f77e8a11a4ad754e18cff1ba2be',
        'format' : 'iframe',
        'height' : 90,
        'width' : 728,
        'params' : {}
  };
        document.write('<scr' + 'ipt type="text/javascript" src="//www.topcreativeformat.com/265a7f77e8a11a4ad754e18cff1ba2be/invoke.js"></scr' + 'ipt>');
    </script></div>`}}></div >
                            {relatedposts.length != 0 &&
                                <>
                                    <h2>Related Posts</h2>
                                    {relatedposts.map((post, i) => <SidePost key={i} post={post} />)}
                                </>
                            }
                            <br />
                            <div className='' dangerouslySetInnerHTML={{
                                __html: `<div><script type="text/javascript">
        atOptions = {
          'key' : '265a7f77e8a11a4ad754e18cff1ba2be',
        'format' : 'iframe',
        'height' : 90,
        'width' : 728,
        'params' : {}
  };
        document.write('<scr' + 'ipt type="text/javascript" src="//www.topcreativeformat.com/265a7f77e8a11a4ad754e18cff1ba2be/invoke.js"></scr' + 'ipt>');
    </script></div>`}}></div >
                            <h2>Related Tools</h2>
                            {Tools.map((tool, i) => <SideTool key={i} tool={tool} />)}

                            <br />
                            <div className='' dangerouslySetInnerHTML={{
                                __html: `<div><script type="text/javascript">
        atOptions = {
          'key' : '265a7f77e8a11a4ad754e18cff1ba2be',
        'format' : 'iframe',
        'height' : 90,
        'width' : 728,
        'params' : {}
  };
        document.write('<scr' + 'ipt type="text/javascript" src="//www.topcreativeformat.com/265a7f77e8a11a4ad754e18cff1ba2be/invoke.js"></scr' + 'ipt>');
    </script></div>`}}></div >
                            <h2>More Posts</h2>
                            {moreposts.map((post, i) => <SidePost key={i} post={post} />)}
                            <div style={{ flexDirection: "column", display: "flex" }}>
                                <div id="container-87234f9f11d0a4ebdec6b1804bcc825e"></div>
                                <script async="async" data-cfasync="false" src="//pl22218935.toprevenuegate.com/87234f9f11d0a4ebdec6b1804bcc825e/invoke.js"></script>
                            </div>

                        </div>
                    </>

                }

            </div>

            <Footer />
        </>

    );
}



export async function getServerSideProps(context) {
    // Fetch data from external API
    const { title } = context.query

    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ title })
    }

    const isProd = process.env.NODE_ENV == "production" ? true : false

    const host = context.req.headers.host

    let data = await fetch(`${isProd ? "https://" : "http://"}${host}/api/blog/getpost`, options)

    data = await data.json()
    // Pass data to the page via props
    return { props: { data } }
}







