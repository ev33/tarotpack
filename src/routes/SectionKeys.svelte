<script lang="ts">
	import { flyReveal } from "$lib/utils/UtilReveal";
	import Lottie from "lottie-web";
	import lottieA from "$lib/assets/lottieA.json";
	import lottieB from "$lib/assets/lottieB.json";
	import lottieC from "$lib/assets/lottieC.json";
	import { onMount } from "svelte";

	let lottieAContainer: HTMLDivElement;
	let lottieBContainer: HTMLDivElement;
	let lottieCContainer: HTMLDivElement;

	onMount(() => {
		Lottie.loadAnimation({ container: lottieAContainer, animationData: lottieA });
		Lottie.loadAnimation({ container: lottieBContainer, animationData: lottieB });
		Lottie.loadAnimation({ container: lottieCContainer, animationData: lottieC });
	});
</script>

<div>
	<div class="keyContainer">
		<div id="line"></div>
		<div class="key">KEY 01</div>
		<div class="keyTitle" use:flyReveal>
			<span id="count" data-start-count="0" data-end-count="180">0</span>만 가지 카드 조합
		</div>
		<div class="keyDesc" use:flyReveal>
			87종의 카드가 만들어내는 매일 새로운 조합<br />메인 & 서브 카드와 카드 방향까지 고려
		</div>
		<div class="lottie" bind:this={lottieAContainer}></div>
	</div>
	<div class="keyContainer">
		<div class="key">KEY 02</div>
		<div class="keyTitle" use:flyReveal><span id="ai">AI 타로 마스터</span>의 해설</div>
		<div class="keyDesc" use:flyReveal>
			정통 타로 지식을 학습한 AI의 전문가급 해설
			<br />지금의 당신에게 꼭 맞는 조언까지
		</div>
		<div class="lottie" bind:this={lottieBContainer}></div>
	</div>
	<div class="keyContainer">
		<div class="key">KEY 03</div>
		<div class="keyTitle" use:flyReveal>
			<div
				id="immersion"
				class="animation"
				data-add-style="animation: immersion 1200ms cubic-bezier(0.3, 1.3, 0.5, 1);"
			>
				몰입감
			</div>
			있는 타로 경험
		</div>
		<div class="keyDesc" use:flyReveal>
			오프라인 타로처럼 생생한 연출과 그래픽 <br />카드팩을 뜯는 듯한 손맛까지
		</div>
		<div class="lottie2" bind:this={lottieCContainer}></div>
	</div>
</div>

<style>
	#line {
		height: 150px;
		width: 2px;
		background-color: rgb(230, 230, 230);
		margin: auto;
	}

	.keyContainer {
		position: relative;
		background-color: white;
		background-color: rgb(250, 250, 250);
	}

	.key {
		color: white;
		background-color: #262626;
		width: 100px;
		border-radius: 100px;
		text-align: center;
		margin: auto;
		font-size: 18px;
		padding: 10px;
		font-weight: 600;
		margin-bottom: 20px;
	}

	.keyTitle {
		text-align: center;
		font-size: 32px;
		font-weight: 600;
		color: #262626;
		margin-bottom: 6px;
	}

	#count {
		display: inline-block;
		width: 50px;
		margin-right: 3px;
		text-align: right;
		/* padding-right: 2px; */
	}

	#ai {
		background: linear-gradient(
			160deg,
			#9a4eff,
			#ff507c 15%,
			#575df0 35%,
			#ff507c 65%,
			#575df0 85%,
			#9a4eff
		);
		-webkit-text-fill-color: transparent;
		background-clip: text;
		animation: ai 6s infinite ease-in-out;
		background-size: 400% 100%;
	}

	@keyframes ai {
		0% {
			background-position: 0;
		}
		50% {
			background-position: 100%;
		}
		100% {
			background-position: 0;
		}
	}

	#immersion {
		display: inline-block;
		height: 50px;
		width: 84.42px;
		animation: immersion 1000ms cubic-bezier(0.4, 1.3, 0.5, 1);
		white-space: nowrap;
		text-align: left;
		font-weight: 800;
	}

	@keyframes immersion {
		0% {
			transform: scale(2.4);
			opacity: 0;
		}
		100% {
			transform: scale(1);
			opacity: 1;
		}
	}

	.keyDesc {
		text-align: center;
		font-size: 15px;
		color: #9b9b9b;
		font-weight: 400;
		line-height: 26px;
	}

	.lottie {
		width: 70%;
		margin: auto;
		margin-top: -10%;
		padding-bottom: 10%;
	}

	.lottie2 {
		width: 70%;
		margin: auto;
		margin-top: -8%;
		padding-bottom: 10%;
	}

	@media (max-width: 480px) {
		#line {
			height: 100px;
		}

		.keyTitle {
			font-size: 26px;
		}

		.keyDesc {
			font-size: 15px;
			line-height: 24px;
		}

		.key {
			width: 90px;
			font-size: 16px;
			padding: 8px;
			font-weight: 600;
			margin-bottom: 20px;
		}

		#count {
			width: 40px;
			margin-right: 3px;
		}

		#immersion {
			height: 39px;
			width: 70px;
			animation: immersion 1000ms cubic-bezier(0.4, 1.3, 0.5, 1);
			white-space: nowrap;
			text-align: left;
			font-weight: 800;
		}

		.lottie {
			padding-bottom: 60px;
		}

		.lottie2 {
			padding-bottom: 60px;
		}
	}
</style>
