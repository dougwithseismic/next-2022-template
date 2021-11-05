// This file sets a custom webpack configuration to use your Next.js app
// with Sentry.
// https://nextjs.org/docs/api-reference/next.config.js/introduction
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

module.exports = {
    i18n: {
        locales: [ 'en', 'de', 'fr', 'br-PT' ],
        defaultLocale: 'en',
        localeDetection: false,
    },
    trailingSlash: true,
}
