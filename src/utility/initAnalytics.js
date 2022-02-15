import Analytics from 'analytics'
import googleTagManager from '@analytics/google-tag-manager'

const SITE_NAME = `Next 11 Boilerplate 2022`
const GTM_CONTAINER_ID = 'GTM-XXXXXX'

const analytics = Analytics({
    app: SITE_NAME,
    plugins: [
        googleTagManager({
            containerId: GTM_CONTAINER_ID
        }),
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