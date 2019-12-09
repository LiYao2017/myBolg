const {
	description
} = require('../../package')

module.exports = {
	/**
	 * Ref：https://v1.vuepress.vuejs.org/config/#title
	 */
	title: '李尧技术博客',
	// base: '/myDocs/',
	/**
	 * Ref：https://v1.vuepress.vuejs.org/config/#description
	 */
	description: description,

	/**
	 * Extra tags to be injected to the page HTML `<head>`
	 *
	 * ref：https://v1.vuepress.vuejs.org/config/#head
	 */
	head: [
		['meta', {
			name: 'theme-color',
			content: '#3eaf7c'
		}],
		['meta', {
			name: 'apple-mobile-web-app-capable',
			content: 'yes'
		}],
		['meta', {
			name: 'apple-mobile-web-app-status-bar-style',
			content: 'black'
		}]
	],

	/**
	 * Theme configuration, here is the default theme configuration for VuePress.
	 *
	 * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
	 */
	themeConfig: {
		repo: '',
		editLinks: false,
		docsDir: '',
		editLinkText: '',
		lastUpdated: false,
		nav: [{
				text: 'Home',
				link: '/',
			},
			{
				text: '学习-进阶',
				link: '/sidebar/',
			},
			{
				text: '难点-解析',
				link: '/config/'
			},
			{
				text: '每日·积累',
				link: '/accumulate/'
			}
		],
		sidebar:{
			'/sidebar/' : [
				{
					title: 'HTML', 
					children: [
						'/sidebar/HTML/',
						'/sidebar/HTML/using-vue'					
					]
				},
				{
					title: 'CSS',
					children: [
						'/sidebar/CSS/'
					]
				},
				{
					title: 'JavaScript',
					children: [
						'/sidebar/javascript/',
						'/sidebar/javascript/this的理解',
						'/sidebar/javascript/函数预编译',
						'/accumulate/宏观任务和微观任务'
					]
				},
				{
					title: 'Vue',
					children: [
						'/sidebar/VUE/'
					]
				},
				{
					title: 'webpack',
					children: [
						'/sidebar/webpack/'
					]
				},
				{
					title: 'docker',
					children: [
						'/sidebar/docker/'
					]
				},
				{
					title: 'nginx',
					children: [
						'/sidebar/Nginx/'
					]
				},
				{
					title: 'jenkins',
					children: [
						'/sidebar/jenkins/'
					]
				}
			],
			'/config/' : [
				{
					title: '难点攻克', // 必要的
					children: [
						'/config/'			
					]
				}
			],
			'/accumulate/' : [
					'/accumulate/',
					'/accumulate/宏观任务和微观任务'			
			]
		}
	},

	/**
	 * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
	 */
	plugins: [
		'@vuepress/plugin-back-to-top',
		'@vuepress/plugin-medium-zoom',
	]
}
