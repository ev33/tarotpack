<script lang="ts">
	import { gotoPage, gotoSample } from "$lib/utils/UtilPage";
	import { flyReveal } from "$lib/utils/UtilReveal";
</script>

<div id="SectionSample">
	<div id="line"></div>
	<div id="title" use:flyReveal>
		아직 고민 되시나요?<br />
		직접 체험해보고 결정하세요<br />
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<span
			on:click={() => {
				gotoSample();
			}}>무료 <span>타로팩</span> 받기</span
		>
	</div>
	<div id="share"></div>
</div>

<style>
	#SectionSample {
		background-color: rgb(250, 250, 250);
		color: #262626;
		padding: 0px 0px 30px 0px;
		font-weight: 500;
		text-align: center;
	}

	#line {
		height: 150px;
		width: 2px;
		background-color: rgb(230, 230, 230);
		margin: auto;
	}

	#title {
		margin: 30px 0px 100px 0px;
		font-size: 32px;
		font-weight: 600;
		line-height: 56px;
	}

	#title span {
		display: block;
		color: white;
		height: 70px;
		width: 310px;
		margin: auto;
		margin-top: 20px;
		background: rgb(205, 16, 51);
		background: linear-gradient(160deg, rgb(227, 31, 67) 0%, rgb(201, 15, 49) 100%);
		font-family: "PyeongChangPeace-Light";
		border-radius: 30px;
		padding-top: 7px;
		cursor: pointer;
	}

	#title span span {
		display: inline;
		font-family: "PyeongChangPeace-Bold";
	}

	@media (max-width: 480px) {
		#SectionSample {
			padding: 0px 0px 30px 0px;
		}

		#line {
			height: 100px;
		}

		#title {
			font-size: 26px;
			line-height: 44px;
		}

		#title span {
			height: 60px;
			width: 240px;
			margin-top: 10px;
			padding-top: 8px;
		}
	}
</style>
