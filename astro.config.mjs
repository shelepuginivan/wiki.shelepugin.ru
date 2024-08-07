import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
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
			sidebar: [
                {
                    label: 'ImageMagick',
                    collapsed: true,
                    autogenerate: { directory: 'imagemagick' },
                },
            ],

			customCss: [
                './src/styles/custom.css',
            ],

            expressiveCode: {
                themes: ['dracula-soft', 'solarized-light'],
            },

            favicon: 'favicon.png',
		}),
	],
});
