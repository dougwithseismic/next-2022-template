import { SiteProvider } from '@context/siteContext'
import '../styles/globals.css'
import analytics from '@utility/initAnalytics'
import { useEffect } from 'react'


// Top-level Rendering. 
function MyApp({ Component, pageProps }) {
    useEffect(() => {
        analytics.page()
        analytics.track("Test Event")

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
