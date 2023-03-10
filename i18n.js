module.exports = {
    locales: ['en'],
    defaultLocale: 'en',
    // https://github.com/vinissimus/next-translate/issues/851
    loadLocaleFrom: async (lang, ns) => {
        try {
            return require(`./src/locales/${lang}/${ns}.json`)
        } catch {
            return {}
        }
    },
    pages: {
        '*': ['common'],
    },
}
