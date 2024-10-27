import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { useState, useEffect } from 'react'
import { setCookie, getCookie } from 'cookies-next';
import { TopPopup } from '@/components/topPopup';
import { Popup } from '@/components/popup';
import { Navbar } from '@/components/navbar';
import { Question } from '@/components/Question'
import { AboutTool } from '@/components/abouttool.jsx';
import { Footer } from '@/components/footer'
import Aos from 'aos';
import Script from 'next/script';
import { BoxSwiper } from '@/components/postswiper';
// import { Pricing } from '@/components/Pricing';
import { Tools } from '@/utils/constants';
import { NerdyTool } from '@/components/nerdytool';
import { verifyToken } from '@/utils/auth';
import { useRouter } from 'next/router';
import { Reviews } from '@/utils/constants';
import Banner from '@/components/Banner';
import MobileBanner from '@/components/MobileBanner';
// import CheckoutFormContent from '@/components/CheckoutFormContent';


export default function Home({ data }) {
  const router = useRouter()
  const { posts, planData } = data

  const [limitWords, setlimitWords] = useState(1000)
  const [Words, setWords] = useState(0)

  const [apiKeyInput, setapiKeyInput] = useState("")
  const [apiKey, setapiKey] = useState("")
  const [showPopup, setshowPopup] = useState(false)
  const [Qgenerating, setQgenerating] = useState(false)
  const [configureApi, setconfigureApi] = useState(false)


  // Top Popup
  const [showTopPopup, setshowTopPopup] = useState(false)
  const [TopPopupmsg, setTopPopupmsg] = useState("")
  const [TopPopupError, setTopPopupError] = useState(false)


  // const [showSmallNav, setshowSmallNav] = useState(false)



  function topPopupHandler(error, show, msg) {
    setshowTopPopup(show)
    setTopPopupmsg(msg)
    setTopPopupError(error)
  }

  function ApiKeyConfiguredHandler() {
    setconfigureApi(true)
    alert(apiKeyInput)
    fetch("./api/authApiKey",
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ apiKey: apiKeyInput })
      }).then(data => data.json()).then(data => {

        if (data.status == 200) {
          setapiKey(apiKeyInput)
          setshowPopup(false)
          topPopupHandler(false, true, data.message)
          setlimitWords(1000)
          setCookie("auth", data.cookie, { maxAge: 1296000 })
        }

        if (data.status == 401) {
          setshowPopup(false)

          topPopupHandler(true, true, data.message)

        }

        if (data.status == 500) {
          setshowPopup(false)
          topPopupHandler(true, true, data.message)

        }
        setconfigureApi(false)
      }
      )

  }

  useEffect(() => {
    if (router.query?.v || router.query?.k) {
      setTimeout(() => {
        router.replace("./", undefined, { shallow: false })
        // router.push("./")
      }, 2000);
    }
  }, [router.query])



  useEffect(() => {
    setTimeout(() => {
      setshowTopPopup(false)
    }, 5000);

  }, [TopPopupError])


  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 500,
      easing: 'ease-in-sine',
      delay: 0,
      once: true
    });
    if (!getCookie("auth")) return
    fetch("./api/login",
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token: getCookie("auth") })
      }).then(data => data.json()).then(data => {
        if (data.status == 200) {
          setapiKey(data.apiKey)
          setlimitWords(1000)

        }

      }
      )

  }, [])








  return (
    <>
      <Head>
        <title>Ai Question Answer Generator From Text (free forever!) No Sign-Up/Card Required</title>
        <meta name="description" content="NerdyQAi is an free AI-powered Question Answer Generator tool that has been designed to help individuals and organizations generate relevant questions from their long-form content, texts, articles, essays, and blog posts." />
        <meta name="keywords" content="qa generator, question answer, Question Answer Generator tool, AI-powered Question Answer Generator tool, online, free," />



      </Head>
      <Navbar apiKey={apiKey} />
      <div className='container'>
        <TopPopup showTopPopup={showTopPopup} setshowTopPopup={setshowTopPopup} TopPopupError={TopPopupError} TopPopupmsg={TopPopupmsg} />

        {/* POPUP */}
        <Popup showPopup={showPopup} setshowPopup={setshowPopup} TopPopupError={TopPopupError} setapiKeyInput={setapiKeyInput} ApiKeyConfiguredHandler={ApiKeyConfiguredHandler} />

        {router.query?.v &&
          <h2 data-aos="fade-up" className='pay-verified'>Payment Verified ✔️ </h2>
        }
        {router.query?.k &&
          <h2 data-aos="fade-up" className='pay-verified'>ApiKey configured successfully ✔️ </h2>

        }

      
     

        <Banner />
        {/* <Banner /> */}

        <div className="heading-wrapper">
          <h2 data-aos="fade-up" className='main-heading'>Questionize At One Click!</h2>
          <p className='tag-line' data-aos="fade-up">Articles, Blog posts, Stories, Essays, Poems and More!</p>

          

        </div>

        

    
        {/* <MobileBanner /> */}



        < NerdyTool planData={planData} />


        <AboutTool planData={planData} />

        {/* <Pricing /> */}

        {/* <h2 className='swiper-heading'>What People Say About NerdyQAi</h2>
        <BoxSwiper Boxes={Reviews} type="review" />

        <h2 className='swiper-heading'>Supporting Tools</h2>
        <BoxSwiper Boxes={Tools} type="tool" /> */}

        {/* <h2 className='swiper-heading'>Latest Posts</h2>
        <BoxSwiper Boxes={posts} type="blog" /> */}



        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={`
         {
          "@context": "https://schema.org/",
        "@type": "WebSite",
        "name": "NerdyQAi",
        "url": "https://nerdyqai.com",
        "potentialAction": {
          "@type": "SearchAction",
        "target": "{search_term_string}",
        "query-input": "required name=search_term_string"
        }
        }
         `}
          key="product-jsonld"
        />
      </div >
      <Footer />
      <Script src="https://unpkg.com/aos@2.3.1/dist/aos.js" />
    </>

  )
}

export async function getServerSideProps(context) {
  // Fetch data from external API

  const isProd = process.env.NODE_ENV == "production" ? true : false

  const host = context.req.headers.host

  const cookies = getCookie(process.env.PLAN_COOKIE, { req: context.req, res: context.res });

  let data = await verifyToken(cookies)


  let auth = data.error ? false : true

  // let data = await fetch(`${isProd ? "https://" : "http://"}${host}/api/blog/getposts?num=5`)

  // data = await data.json()
  if (!data.error) {
    return { props: { data: { posts: [], planData: { n: data.payload.n, t: data.payload.t, k: data.payload.k, auth } } } }
  }
  else {
    return { props: { data: { posts: [], planData: { auth } } } }

  }
}