import '../styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* Or, if you use PNG: */}
        {/* <link rel="icon" type="image/png" href="/favicon.png" /> */}
      </Head>
      <Component {...pageProps} />
    </>
  )
}
