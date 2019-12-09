<template lang="pug">
main.task1
  nuxt-link.task-logo(to="/")
    h1.logo-title GUI表現研究
    h2.logo-subtitle GUI Expression <br>
      | Research
  h2.task-title
    | task1 
    span 対になる絵
  .task1-contents
    .task1-button(@click="onClick")
      svg-icon.task1-icon(:name="state.data? 'all' : 'part'")
    .task1-letter-wrapper
      h3.task1-letter(:class="state.data? 'task1-letter-all' : 'task1-letter-part'") あ
  a.task1-link.pdf-link(:href="state.dir") 提出用PDFデータ
  p.text このページはパソコンのみしか動作確認してません。
</template>

<script lang="ts">
import { createComponent, reactive, computed } from '@vue/composition-api'

export default createComponent({
	setup(_, _ctx) {
		const state = reactive({
			data: false,
			dir: computed(() => `${process.env.hostDir}task1/handout.pdf`)
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
.task1-letter-wrapper {
	height: 600px;
	overflow: hidden;

	.task1-letter {
		transform-origin: top left;
		font-size: 1000px;
		user-select: none;

		transition: transform 0.5s cubic-bezier(0.52, 1.31, 0.79, 1.12);
	}
}
.task1-letter-part {
	transform: scale(1.2);
}
.task1-letter-all {
	//transition: transform 0.5s cubic-bezier(0.52, 1.31, 0.45, 1.36);
	transform: scale(0.15);
}

.task1-button {
	position: absolute;
	bottom: 20px;
	right: 20px;

	cursor: pointer;

	background-color: $primary;
	border-radius: 50%;
	size: 80px;

	display: flex;
	justify-content: center;
	align-items: center;

	filter: drop-shadow(0 0 3px $black);
	.task1-icon {
		size: 60%;
		fill: $white;
		stroke: $white;
	}
}
</style>
