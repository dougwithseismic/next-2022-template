import Analytics from 'analytics'
import segmentPlugin from '@analytics/segment'
import googleTagManager from '@analytics/google-tag-manager'


const analytics = Analytics({
    app: 'photologo-marketing',
    plugins: [
        googleTagManager({
            containerId: 'GTM-P7PR7M8'
        }),
        segmentPlugin({
            writeKey: process.env.NEXT_PUBLIC_SEGMENT_KEY
        })
    ]
})

export default analytics

// /* Track a page view */
// analytics.page()

// /* Track a custom event */
// analytics.track('cartCheckout', {
//     item: 'pink socks',
//     price: 20
// })

// /* Identify a visitor */
// analytics.identify('user-id-xyz', {
//     firstName: 'bill',
//     lastName: 'murray'
// })