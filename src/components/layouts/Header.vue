<template lang="pug">
header
  h1.header-title GUI表現研究
  nav.header-nav
    ul
      li: nuxt-action-link.header-link(to="/") TOP
      li: nuxt-action-link.header-link(to="/task1") 対になる絵
</template>

<script>
import { createComponent, reactive } from '@vue/composition-api'

export default createComponent({
	components: {
		NuxtActionLink: () => import('~/components/NuxtActionLink.vue')
	},
	setup(_prop, _ctx) {
		const reactiveValue = reactive('reactive value')

		return {
			reactiveValue
		}
	}
})
</script>

<style lang="scss">
header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: $white;

	filter: drop-shadow(0 0 3px $black);
}

.header-title {
	font-weight: $bold;
}

.header-nav {
	ul {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
}

.header-link {
	position: relative;
	margin-left: 20px;
	color: $black;
	padding-bottom: 2px;

	&::after {
		background-color: $primary;
		content: '';
		display: block;
		position: absolute;
		transition: all 0.5s cubic-bezier(0, 1.06, 0.54, 1);

		bottom: -3px;
		height: 1px;
		left: calc(100% / 2);
		width: 0px;
	}

	&:hover {
		&::after {
			width: 100%;
			width: calc(100% + 1px);
			left: 0px;
		}
	}
}
</style>
