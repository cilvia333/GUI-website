<template lang="pug">
div.default
	Header
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
