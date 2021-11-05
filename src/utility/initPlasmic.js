import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

import { ProductCard, ProductTitle } from '@components/plasmic/ProductCard'
export const PLASMIC = initPlasmicLoader({
    projects: [
        {
            id: "mrCvzQG9mbWrnjMMArfufW",  // ID of a project you are using
            token: "BwyWNQIbOr4mIPpnJYaNDNC7T0Q5kvL6cb0IBGbPsPumgMzHQbyJdpDW3tH8rE35rShT3IlB1e1s3wH4zP7eA"  // API token for that project
        }
    ],
    // Fetches the latest revisions, whether or not they were unpublished!
    // Disable for production to ensure you render only published changes.
    preview: process.env.PLASMIC_PREVIEW === "true" ?? false
})


PLASMIC.registerComponent(ProductCard, {
    name: 'ProductCard',
    defaultStyles: {
        width: '100%',
        height: '180px'
    },
    props: {
        children: 'slot',
        category: {
            type: 'choice',
            options: [ 'success', 'warning', 'error' ]
        }
    }
});

PLASMIC.registerComponent(ProductTitle, {
    name: 'ProductTitle',
    props: {
    }
});

