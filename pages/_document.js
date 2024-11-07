import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
import Link from 'next/link'
export default function Document() {
  return (
    <Html lang="en">
      {/* <Head /> */}
      <Head>
        <meta name='author' content='' />
        <meta name="google-site-verification" content="ZHh3yZs2_voQefMs39OTT08JNi8JCRLtpxHHBHbINN0" />

        <meta name="msvalidate.01" content="353536C2E6F297E4C44662168C473C36" />
       
        {/* ADSTEERA */}
        
        {/* ADSTEERA */}

        {/* ADSENSE */}
        <meta name="google-adsense-account" content="ca-pub-2788879101688983" />

        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2788879101688983"
          strategy="afterInteractive"
          crossOrigin='anonymous'
        />
        {/* ADSENSE */}

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6257S0VYV1"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
  
             gtag('config', 'G-6257S0VYV1');
            `}
        </Script>

        <Script type="text/javascript" strategy="afterInteractive">
          {`
           (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "itdvxnlmuo");
            `}
        </Script>


        <link href={"https://unpkg.com/aos@2.3.1/dist/aos.css"} rel="stylesheet" />
      </Head>
      <body>
        
        <Main />
        
        {/* <div id="container-87234f9f11d0a4ebdec6b1804bcc825e"></div>
        <script async="async" data-cfasync="false" src="//pl22218935.toprevenuegate.com/87234f9f11d0a4ebdec6b1804bcc825e/invoke.js"></script>
         */}
        <NextScript />
      </body>
    </Html>
  )
}
