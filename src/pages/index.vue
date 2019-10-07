<template lang="pug">
main.index
  .index-discription
    h1.title 2-C-10 Kairi Shiomi
    p.text とりあえず適当に作っています。許してくれ。
  .index-items
    h1.title 
    ul
      li.index-item: nuxt-link.index-link.link(to="/task1") 対になる絵
</template>

<script lang="ts">
import { createComponent, reactive } from '@vue/composition-api'

export default createComponent({
	setup(_props, _ctx) {
		const reactiveValue = reactive('reactive value')

		return {
			reactiveValue
		}
	}
})
</script>

<style lang="scss" scoped>
.index-items {
	margin-top: 30px;
}
</style>
