import { Checkout } from '@components/Checkout'
import React from 'react'

import { PlasmicRootProvider, PlasmicComponent, } from '@plasmicapp/loader-nextjs'
import { PLASMIC } from '@utility/initPlasmic'

const CheckoutPage = ({ plasmicData }) => {
    return (
        <div>
            <PlasmicRootProvider loader={PLASMIC} prefetchedData={plasmicData} >
                <PlasmicComponent component="NavTopbar" />
                <div className="container bg-white text-black">
                    <Checkout />
                </div>
                <PlasmicComponent component="Footer" />
            </PlasmicRootProvider>
        </div>
    )
}

export default CheckoutPage

// Here's something cool - Pulling component from the plasmic app. Its a pretty gross practice though. ]
// I'd be way happier hardcoding consistent components... Less buy-in
export const getStaticProps = async () => {
    // You can pass in multiple page paths or component names like so.
    const plasmicData = await PLASMIC.fetchComponentData( 'NavTopbar', 'Footer' );

    return {
        props: {
            plasmicData
        }
    };
};
