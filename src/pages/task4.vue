<template lang="pug">
main.task4
  nuxt-link.task-logo(to="/")
    h1.logo-title GUI表現研究
    h2.logo-subtitle GUI Expression <br>
      | Research
  h2.task-title
    | task4 
    span インターフェースのデザイン
  .task4-contents
    h3 Figma Data
    <iframe style="border: none;" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FiUgRowDTJGyM160lkbW5R3%2FGUI%25E8%25A1%25A8%25E7%258F%25BE%25E7%25A0%2594%25E7%25A9%25B6%3Fnode-id%3D33%253A0" allowfullscreen></iframe>
    a.task4-link.pdf-link(:href="state.dir") 提出用PDFデータ
</template>

<script lang="ts">
import { createComponent, reactive, computed } from '@vue/composition-api'

export default createComponent({
	setup(_, _ctx) {
		const state = reactive({
			data: false,
			dir: computed(() => `${process.env.hostDir}task4/handout.pdf`)
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
h3 {
	margin: 20px 0px 10px 0px;
}

iframe {
	display: block;
}
</style>
