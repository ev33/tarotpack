<script lang="ts">
	import { gotoPage } from "$lib/utils/UtilPage";
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
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		id="priceCard"
		use:flyReveal
		on:click={() => {
			gotoPage("subscribe");
		}}
	>
		<div id="divide">
			<div id="month">1개월<br /><span>(31팩)</span></div>
			<div id="line"></div>
			<div id="price">
				<span id="beforePrice">-46.5%↓ <span>13,900원</span></span><br />
				<span id="afterPrice">6,900<span> 원</span></span>
			</div>
		</div>

		<div id="buy">타로팩 구매하기</div>
	</div>
</div>

<style>
	#SectionPrice {
		background: #262626;
		padding: 100px 0px 100px 0px;
		font-weight: 500;
		text-align: center;
	}

	#title {
		margin-top: 20px;
		font-size: 32px;
		font-weight: 600;
		color: white;
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

	#priceCard {
		width: 360px;
		margin: auto;
		margin-top: 40px;
		height: 190px;
		background-color: rgb(250, 250, 250);
		border-radius: 20px;
		filter: drop-shadow(0px 0px 40px rgba(255, 255, 255, 0.2));
		cursor: pointer;
	}

	#buy {
		background-color: #262626;
		width: 340px;
		height: 60px;
		padding-top: 18px;
		border-radius: 16px;
		margin: auto;
		color: white;
	}

	#divide {
		display: flex;
	}

	#month {
		padding-top: 40px;
		padding-bottom: 28px;
		width: 55%;
		font-size: 24px;
		font-weight: 700;
		text-align: center;
		line-height: 24px;
	}

	#month span {
		font-size: 16px;
		color: #9b9b9b;
	}

	#line {
		transform: translateX(2px);
		border-left: 2px dotted rgb(200, 200, 200);
		margin: 20px 0px;
	}

	#price {
		width: 100%;
		padding-top: 25px;
		padding-right: 40px;
		text-align: right;
	}

	#beforePrice {
		font-weight: 700;
		color: red;
	}

	#beforePrice span {
		color: #9b9b9b;
		text-decoration: line-through;
		text-decoration-color: red; /* 원하는 색상으로 설정 가능 */
	}

	#afterPrice {
		font-size: 48px;
		font-weight: 900;
		width: 100%;
		line-height: 48px;
	}

	#afterPrice span {
		font-size: 30px;
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

		#priceCard {
			width: 300px;
		}

		#buy {
			width: 280px;
		}

		#month {
			padding-top: 34px;
			font-size: 20px;
		}

		#price {
			width: 100%;
			padding-top: 28px;
		}

		#beforePrice {
			font-size: 14px;
		}

		#afterPrice {
			font-size: 36px;
			line-height: 36px;
		}
	}
</style>
