import React from 'react';
import {
    PlasmicComponent,
    PlasmicRootProvider
} from '@plasmicapp/loader-nextjs';
import Error from 'next/error';
import { PLASMIC } from '@utility/initPlasmic';
import { Layout } from '@components/Layout';
import Head from 'next/head';

/**
 * Actually render the page!
 */
const CatchallPage = ({ plasmicData }) => {
    if (!plasmicData || plasmicData.entryCompMetas.length === 0) {
        return <Error statusCode={404} />;
    }

    return (
        // Pass in the dat a fetched in getStaticProps as prefetchedData
        <div className="main">
            <Head>
                <title>{`Here's an example, just a little sample`}</title>
            </Head>
            <Layout>
                <PlasmicRootProvider loader={PLASMIC} prefetchedData={plasmicData}>
                    <PlasmicComponent component={plasmicData.entryCompMetas[ 0 ].name} />
                </PlasmicRootProvider>
            </Layout>

        </div>

    );
}

export default CatchallPage

/**
 * Use fetchPages() to fetch list of pages that have been created in Plasmic
 */
export const getStaticPaths = async () => {

    //             params: { catchall: page.path.substring(1).split('/') }

    const pages = await PLASMIC.fetchPages();
    return {
        paths: pages.map((page) => ({
            params: { catchall: page.path.substring(1).split('/') }
        })),
        fallback: false
    };
};

/**
 * For each page, pre-fetch the data we need to render it
 */
export const getStaticProps = async (context) => {
    const { catchall } = context.params ?? {};

    console.log('catchall :>> ', catchall);

    // Convert the catchall param into a path string
    const plasmicPath =
        typeof catchall === 'string' ? catchall : Array.isArray(catchall) ? `/${catchall.join('/')}` : '/';
    const plasmicData = await PLASMIC.maybeFetchComponentData(plasmicPath);

    if (!plasmicData) {
        return { notFound: true }
    }

    console.log("Page data found: ", plasmicPath)
    return {
        props: { plasmicData },
        revalidate: 1
    };

};

