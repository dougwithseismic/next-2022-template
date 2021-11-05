import React from 'react'
// import { Header } from '@components/Header'
// import { Footer } from '@components/Footer'
import Head from 'next/head'

export const Layout = ({ children, title = "Give me a title" }) => {
    // This is a HOC component that we can use to wrap everything in a navbar and footer. The classes come from tailwind. 
    // Pass layout a title eg <Layout title="This is a title"> to the page a title. TODO: Add metatags etc.
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta property='og:title' content='···' />
                <meta name='twitter:title' content='···' />
                <link rel='canonical' href='http://···' />
                <meta property='og:url' content='http://···' />
                <meta name='twitter:url' content='http://···' />
                <meta name='description' content='···' />
                <meta property='og:description' content='···' />
                <meta name='twitter:description' content='···' />
                <meta property="og:image" content="http://···" />
                <meta name="twitter:image" content="http://···" />
            </Head>
            <div className="flex flex-col h-screen justify-between">
                {/* <Header /> */}
                <main className="mb-auto">{children}</main>
                {/* <Footer /> */}
            </div>
        </>
    )
}

