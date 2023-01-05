import '../styles/globals.css'
import type { AppProps } from 'next/app'
import  ClickedProvider  from "../components/context/ClickedContext";

function MyApp({ Component, pageProps }: AppProps) {

  return (

    <ClickedProvider>
      <Component {...pageProps} />
    </ClickedProvider>

  )
  
  
}

export default MyApp
