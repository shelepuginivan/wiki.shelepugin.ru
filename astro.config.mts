import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import icon from 'astro-icon'

export default defineConfig({
    site: 'https://wiki.shelepugin.ru',

    integrations: [
        icon(),
        starlight({
            title: 'wiki.shelepugin.ru',

            locales: {
                root: {
                    label: 'Русский',
                    lang: 'ru',
                },
            },

            social: [
                {
                    icon: 'github',
                    href: 'https://github.com/shelepuginivan',
                    label: 'GitHub',
                },
            ],

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
                    label: '🐧 Linux',
                    autogenerate: { directory: 'linux' },
                },
                {
                    label: '⚙️ Приложения и утилиты',
                    autogenerate: { directory: 'apps' },
                },
                {
                    label: '✨ Разное',
                    autogenerate: { directory: 'etc' },
                },
            ],
        }),
    ],
})
