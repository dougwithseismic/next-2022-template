import { SiteProvider } from '@context/siteContext'
import analytics from '@utility/initAnalytics'
import { useEffect } from 'react'
import '../styles/globals.css'


// Top-level Rendering. 
function MyApp({ Component, pageProps }) {

    useEffect(() => {
        analytics.page()
    }, [])

    return (
        <>
            <SiteProvider>
                <Component {...pageProps} />
            </SiteProvider>
        </>
    )
}

export default MyApp
