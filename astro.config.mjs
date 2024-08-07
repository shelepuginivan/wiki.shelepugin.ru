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
			sidebar: [],

			customCss: [
                './src/styles/custom.css',
            ],

            favicon: 'favicon.png',
		}),
	],
});
