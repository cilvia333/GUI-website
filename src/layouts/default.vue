<template lang="pug">
div.default
	transition
		nuxt
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'

export default createComponent({
	components: {
		Header: () => import('~/components/layouts/Header.vue')
	},

	setup(_, _ctx) {}
})
</script>

<style lang="scss">
html {
	font-family: 'Futura', Arial, Verdana, 'Noto Sans JP', '游ゴシック',
		'Yu Gothic', '游ゴシック体', 'YuGothic', 'ヒラギノ角ゴ W3',
		'Hiragino Kaku Gothic', 'Meiryo UI', 'メイリオ', Meiryo, 'ＭＳ Ｐゴシック',
		'MS PGothic', sans-serif;

	font-size: 16px;
	word-spacing: 1px;
	box-sizing: border-box;
}

main {
	height: calc(100vh - 160px);
	margin: 80px 55px;
}

.container {
	height: 100%;
	max-width: 1024px;
	margin: 0 auto;
}

li {
	list-style-type: none;
}

a {
	text-decoration: none;
}

.title {
	font-size: 20px;
	font-weight: $bold;
}

h1 {
	margin: 0;
	font-size: 6rem;
	font-weight: 800;
}

h2 {
	margin: 0;
	font-size: 2.5rem;
	font-weight: 400;
	line-height: 1;
}

h3 {
	margin: 0;
	font-size: 1.5rem;
	font-weight: 400;
}
</style>
