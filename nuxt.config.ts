import { Configuration } from '@nuxt/types'

const hostName = process.env.NODE_ENV === 'production' ? 'http://dipale.musabi.ac.jp' :'https://localhost:3000'
const hostDir = process.env.NODE_ENV === 'production' ? '/y19/gui/di19551/' : '/'

const config: Configuration = {
	mode: 'universal',
	srcDir: 'src/',
	loading: false,

	head: {
		title: 'GUI表現研究 塩見海怜',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{
				hid: 'description',
				name: 'description',
				content: process.env.npm_package_description || ''
      },
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: hostDir + 'favicon.ico' }]
	},

	css: ['normalize.css'],

	plugins: [
    '~/plugins/composition-api'
  ],

  buildModules: [
		'@nuxtjs/eslint-module',
  ],
	modules: [
		'@nuxtjs/axios',
		'@nuxt/typescript-build',
		'@bazzite/nuxt-optimized-images',
		'@nuxtjs/style-resources',
		'@nuxtjs/svg-sprite'
	],

	styleResources: {
		scss: ['~/assets/scss/main.scss', 'mathsass']
	},
	optimizedImages: {
		optimizeImages: true,
		optimizeImagesInDev: true
  },
  
  router: {
    base: hostDir
	},
	
	env: {
		hostDir: hostDir
	},

	build: {
		cache: true,
		postcss: {
			plugins: {
				'postcss-short': {}
			}
		},
		extend(config, ctx) {
			if (!config.output) return
			if (!config.module) return

			if (ctx.isDev && ctx.isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(ts|js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/,
					options: {
						fix: true
					}
				})
			}

			if (!ctx.isDev) {
				config.output.publicPath = '_nuxt/'
			}
		}
	},
	generate: {
		fallback: true
	}
}

export default config
