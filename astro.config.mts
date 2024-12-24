import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

export default defineConfig({
    site: 'https://wiki.shelepugin.ru',

    integrations: [
        starlight({
            title: 'wiki.shelepugin.ru',

            locales: {
                root: {
                    label: 'Русский',
                    lang: 'ru',
                },
            },

            social: {
                github: 'https://github.com/shelepuginivan',
            },

            favicon: 'favicon.png',
            logo: {
                light: './src/assets/logo-light.svg',
                dark: './src/assets/logo-dark.svg',
                replacesTitle: true,
                alt: 'wiki.shelepugin.ru',
            },

            pagination: false,

            lastUpdated: true,

            customCss: ['./src/styles/custom.css', './src/styles/markdown.css'],

            expressiveCode: {
                themes: ['dracula-soft', 'solarized-light'],
            },

            sidebar: [
                {
                    label: 'Linux',
                    autogenerate: { directory: 'linux' },
                },
                {
                    label: 'Приложения и утилиты',
                    autogenerate: { directory: 'apps' },
                },
                {
                    label: '✨ Гайды',
                    autogenerate: { directory: 'guides' },
                },
            ],
        }),
    ],
})
