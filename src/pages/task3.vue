<template lang="pug">
main.task3
  nuxt-link.task-logo(to="/")
    h1.logo-title GUI表現研究
    h2.logo-subtitle GUI Expression <br>
      | Research
  h2.task-title
    | task3 
    span 道具の調査レポート
  .task3-contents
    img.task3-img(src="~/assets/img/task1/all.png")
    a.task3-link.pdf-link(:href="state.dir") 提出用PDFデータ
</template>

<script lang="ts">
import { createComponent, reactive, computed } from '@vue/composition-api'

export default createComponent({
	setup(_, _ctx) {
		const state = reactive({
			data: false,
			dir: computed(() => `${process.env.hostDir}task3/handout.pdf`)
		})

		function onClick() {
			state.data = !state.data
		}

		return {
			state,
			onClick
		}
	}
})
</script>

<style lang="scss" scoped>
.task3-img {
	display: block;
}
</style>
