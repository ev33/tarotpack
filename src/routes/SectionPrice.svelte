<script lang="ts">
	import { flyReveal } from "$lib/utils/UtilReveal";
	import Icon from "@iconify/svelte";
</script>

<div id="SectionPrice">
	<div id="icon">
		<Icon
			icon="tabler:rosette-discount-filled"
			width="100%"
			color="#ffff00"
			style="filter: drop-shadow(0px 0px 40px rgba(255, 255, 255, 0.4));"
		/>
	</div>
	<div id="title" use:flyReveal>
		지금 구매하면 매일 222원!<br />
		부담 없는 가격으로 시작하기<br />
	</div>
	<div id="desc" use:flyReveal>( 한 달 결제 기준, 31일 동안 타로팩 발송 )</div>
	<div id="price" use:flyReveal>가격표시</div>
</div>

<style>
	#SectionPrice {
		background: #262626;
		color: white;
		padding: 100px 0px 100px 0px;
		font-weight: 500;
		text-align: center;
	}

	#title {
		margin-top: 20px;
		font-size: 32px;
		font-weight: 600;
	}

	#desc {
		font-size: 15px;
		color: #ffffff80;
		font-weight: 400;
		line-height: 40px;
	}

	#icon {
		width: 130px;
		margin: auto;
	}

	@media (max-width: 480px) {
		#title {
			font-size: 26px;
		}

		#SectionPrice {
			padding: 60px 0px 60px 0px;
		}

		#icon {
			width: 100px;
		}
	}
</style>
