import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

export default defineConfig({
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

            pagination: false,

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

            customCss: ['./src/styles/custom.css'],

            expressiveCode: {
                themes: ['dracula-soft', 'solarized-light'],
            },

            favicon: 'favicon.png',
        }),
    ],
})
