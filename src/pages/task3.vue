<template lang="pug">
main.task3
  .task3-contents
    a.task3-link.link(:href="state.dir") PDF
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
