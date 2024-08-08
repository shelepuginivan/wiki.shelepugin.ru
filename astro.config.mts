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

            customCss: ['./src/styles/custom.css'],

            expressiveCode: {
                themes: ['dracula-soft', 'solarized-light'],
            },

            sidebar: [
                {
                    label: 'Linux',
                    collapsed: true,
                    items: [
                        {
                            label: 'Система',
                            collapsed: true,
                            autogenerate: { directory: 'linux/sys' },
                        },
                    ],
                },
                {
                    label: 'Приложения и утилиты',
                    collapsed: true,
                    items: [
                        {
                            label: 'ffmpeg',
                            collapsed: true,
                            autogenerate: { directory: 'apps/ffmpeg' },
                        },
                        {
                            label: 'ImageMagick',
                            collapsed: true,
                            autogenerate: { directory: 'apps/imagemagick' },
                        },
                    ],
                },
            ],
        }),
    ],
})
