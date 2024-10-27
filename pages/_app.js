import '@/styles/globals.css'
import { Analytics } from '@vercel/analytics/react';
import NextNProgress from 'nextjs-progressbar';



export default function App({ Component, pageProps }) {
  return (
    <>
        <NextNProgress />
        <Component {...pageProps} />
        <Analytics />
     
    </>
  )

}
