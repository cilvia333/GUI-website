<template lang="pug">
main.index
  .container
    .index-logo
      h1.index-logo-title GUI表現研究
      h2.index-logo-subtitle GUI Expression <br>
        | Research
    .index-name
      h3.index-name-text DI-2-C-21 塩見海怜
    ul.index-links 
      li.index-links-item
          .index-link-index task1
          nuxt-link.index-link.link(to="/task1") 対になる絵
      li.index-links-item
          .index-link-index task2
          nuxt-link.index-link.link(to="/task3") none
      li.index-links-item
          .index-link-index task3
          nuxt-link.index-link.link(to="/task3") 道具の調査レポート
      li.index-links-item
          .index-link-index task4
          nuxt-link.index-link.link(to="/task4") インターフェースのデザイン
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
.index {
	height: calc(100vh - 160px);
	margin: 80px 55px;
}

.container {
	position: relative;
}

.index-logo {
	margin-top: 0px;
	position: relative;

	&::after {
		content: '';
		position: absolute;
		bottom: -20px;
		left: 3px;
		height: 6px;
		width: 1.8rem;
		background-color: $black;
	}
}

.index-name {
	position: absolute;
	bottom: 0;
	left: 0;
}

.index-links {
	position: absolute;
	bottom: 0;
	right: 0;
	margin: 0;

	display: flex;
	flex-direction: column;
	align-items: flex-end;

	.index-links-item {
		display: inline-block;
		text-align: right;
		margin-top: 80px;
		position: relative;

		& > * {
			transition: 0.3s cubic-bezier(0.1, 0, 0, 1);
		}

		.index-link-index {
			position: absolute;
			top: -1.8rem;
			left: 0;
			transform: skewX(0deg) translateX(0px);
			letter-spacing: 0px;
			font-size: 2rem;
		}
		.index-link {
			display: inline-block;
			color: $black;
			font-size: 3rem;
			transform: skewX(0deg) translateX(0px);
			letter-spacing: 0px;
			position: relative;

			&::after {
				content: '';
				position: absolute;
				top: 0;
				left: 0;
				background: $gray;
				width: 100%;
				height: 100%;
				z-index: -1;
			}
		}

		&:hover {
			.index-link-index {
				transform: skewX(-30deg) translateX(-10px);
				letter-spacing: 30px;
				font-style: italic;
			}
			.index-link {
				transform: skewX(-30deg) translateX(-10px);
				letter-spacing: 20px;
				font-style: italic;
				&::after {
					transform: skewX(30deg);
				}
			}
		}
	}
}
</style>
