<template lang="pug">
component(:is="rootTagName" :to="to" @click="click()" :class="{'nuxt-link-active': isSamePage}" exact )
  slot
</template>

<script lang="ts">
import * as lodash from 'lodash'
import { createComponent, computed } from '@vue/composition-api'

export default createComponent({
	props: {
		to: {
			type: String,
			required: true
		}
	},

	setup(props, ctx) {
		const isSamePage = computed(() => {
			const current = ctx.root.$route
			const rslv = ctx.root.$router.resolve(props.to).route

			console.log(current.name)
			console.log(rslv.name)

			return (
				current.name === rslv.name &&
				current.hash === rslv.hash &&
				lodash.isEqual(current.params, rslv.params) &&
				lodash.isEqual(current.query, rslv.query)
			)
		})

		const rootTagName = computed(() => {
			return isSamePage.value ? 'span' : 'nuxt-link'
		})

		function click() {
			ctx.root.$emit('click')
		}

		return {
			isSamePage,
			rootTagName,
			click
		}
	}
})
</script>

<style lang="scss" scoped>
span,
a {
	user-select: none;
}

span {
	cursor: pointer;
}
</style>
