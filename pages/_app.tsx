import type { AppProps } from 'next/app'
import Head from 'next/head'
import Image from 'next/image'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>SeongBin</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
