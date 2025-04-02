<script lang="ts">
	import { gotoPage } from "$lib/utils/UtilPage";
	import { onDestroy, onMount } from "svelte";
	import mockup from "$lib/assets/mockup.png";

	let marquee1: HTMLElement;
	let marquee2: HTMLElement;
	let lastTimestamp = 0;
	let animationFrameId: number;

	onMount(() => {
		marquee1.style.transform = "translateX(0px)";
		marquee2.style.transform = "translateX(0px)";

		const moveMarquee = (timestamp: number) => {
			if (!marquee1 || !marquee2) {
				return;
			}

			const deltaTime = timestamp - lastTimestamp;
			lastTimestamp = timestamp;

			let currentPosition1 = parseFloat(getComputedStyle(marquee1).transform.split(",")[4]);
			let currentPosition2 = parseFloat(getComputedStyle(marquee2).transform.split(",")[4]);

			const speed = 0.03;

			currentPosition1 -= speed * deltaTime;
			currentPosition2 -= speed * deltaTime;

			marquee1.style.transform = `translateX(${currentPosition1}px)`;
			marquee2.style.transform = `translateX(${currentPosition2}px)`;

			if (currentPosition1 <= -686) {
				marquee1.style.transform = `translateX(${currentPosition2 + 686 + 686}px)`;
			}

			if (currentPosition2 <= -686 * 2) {
				marquee2.style.transform = `translateX(${currentPosition1}px)`;
			}

			animationFrameId = requestAnimationFrame(moveMarquee);
		};

		animationFrameId = requestAnimationFrame(moveMarquee);

		onDestroy(() => {
			cancelAnimationFrame(animationFrameId);
		});
	});
</script>

<div id="background"></div>
<div id="S1Banner">
	<div class="title">매일 <span>타로팩</span>으로<br />점치는 특별한 운세</div>
	<div id="marqueeContainer">
		<div class="marquee" bind:this={marquee1}>
			<div class="tarotCard"></div>
			<div class="tarotCard"></div>
			<div class="tarotCard"></div>
			<div class="tarotCard"></div>
			<div class="tarotCard"></div>
			<div class="tarotCard"></div>
			<div class="tarotCard"></div>
		</div>
		<div class="marquee" bind:this={marquee2}>
			<div class="tarotCard"></div>
			<div class="tarotCard"></div>
			<div class="tarotCard"></div>
			<div class="tarotCard"></div>
			<div class="tarotCard"></div>
			<div class="tarotCard"></div>
			<div class="tarotCard"></div>
		</div>
	</div>

	<div id="buttons">
		<button
			id="leftButton"
			on:click={() => {
				gotoPage("sample");
			}}>타로팩 체험하기</button
		><button
			id="rightButton"
			on:click={() => {
				gotoPage("subscribe");
			}}>지금 시작하기</button
		>
	</div>
	<div id="mockupContainer">
		<div id="leftMockup">
			<img id="leftMockupImage" alt="모바일 목업" src={mockup} />
			<div id="leftMockupDesc">앱 설치 과정 없이<br />타로팩을 뽑아서<br />오늘 운세를 확인</div>
		</div>
		<div id="rightMockup">
			<div id="rightMockupDesc">매일 정해진 시간<br />타로팩이 들어있는<br />카카오톡 메세지</div>
			<img id="rightMockupImage" alt="모바일 목업" src={mockup} />
		</div>
	</div>
</div>

<style>
	#S1Banner {
		padding: 20% 0px 0px 0px;
		background-color: rgb(205, 16, 51);
		color: rgb(255, 255, 255);
		overflow: hidden;
	}

	#background {
		width: min(600px, 100%);
		padding-bottom: calc(20% + 500px);
		background: url("$lib/assets/slogan.jpg");
		position: absolute;
		overflow: hidden;
		background-size: calc(580px + 20%);
		object-fit: cover;
		/* background-position: center; */
	}

	#background::after {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(to bottom, rgba(205, 16, 51, 0.1) 30%, rgb(205, 16, 51) 100%);
	}

	#mockupContainer {
		display: flex;
		margin-left: 20px;
		margin-right: 20px;
		margin-bottom: 100px;
		position: relative;
	}

	#leftMockup {
		padding-right: 10px;
		text-align: center;
		font-weight: 400;
		font-size: 20px;
		line-height: 30px;
	}

	#rightMockup {
		padding-left: 10px;
		text-align: center;
		font-weight: 400;
		font-size: 20px;
		line-height: 30px;
	}

	#leftMockupDesc {
		padding-top: 30%;
		padding-bottom: 10%;
		text-align: right;
		margin-right: 20px;
		font-family: PyeongChangPeace-Light;
	}

	#rightMockupDesc {
		padding-top: 10%;
		padding-bottom: 30%;
		text-align: left;
		margin-left: 20px;
		font-family: PyeongChangPeace-Light;
	}

	#leftMockupImage {
		width: calc(80%);
		margin-left: 30px;
		filter: drop-shadow(0.8em 0.8em 0.5em rgba(49, 0, 0, 0.18));
	}

	#rightMockupImage {
		width: calc(80%);
		margin-right: 30px;
		filter: drop-shadow(0.8em 0.4em 0.7em rgba(49, 0, 0, 0.18));
	}

	#marqueeContainer {
		display: flex;
		margin-bottom: 4px;
		position: relative;
	}

	.marquee {
		overflow: hidden;
		white-space: nowrap;
		display: flex;
		justify-content: space-evenly;
		width: calc(98 * 7px);
		flex-grow: 0;
		flex-shrink: 0;
		flex-basis: auto;
	}

	.tarotCard {
		width: 70px;
		height: 120px;
		background-color: rgb(255, 255, 255);
		margin: 40px 14px 44px 14px;
		box-shadow: rgba(255, 74, 107, 0.466) 0px 0px 10px;
		bottom: 0;
		flex-grow: 0;
		flex-shrink: 0;
		flex-basis: auto;
		border-radius: 10px;
	}

	.title {
		text-align: center;
		font-size: 44px;
		font-weight: 500;
		font-family: PyeongChangPeace-Light;
		position: relative;
	}

	.title span {
		color: rgb(255, 15, 59);
		font-family: PyeongChangPeace-Bold;
	}

	#buttons {
		padding-right: 20px;
		padding-left: 20px;
		width: min(400px, 100%);
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: auto;
		margin-bottom: 100px;
		position: relative;
	}

	button {
		width: calc(50% - 6px);
		height: 50px;
		border-radius: 8px;
		font-size: 16px;
		font-weight: 500;
		box-shadow: rgba(140, 9, 9, 0.2) 0px 2px 14px;
	}

	#leftButton {
		background-color: white;
	}

	#rightButton {
		background-color: rgb(47, 9, 9);
		color: white;
	}

	@media (max-width: 480px) {
		#background {
			padding-bottom: calc(20% + 470px);
			background-size: calc(540px + 20%);
			background-position: -80px top;
		}

		.title {
			font-size: 36px;
		}

		#leftMockup {
			font-size: 16px;
			line-height: 26px;
		}

		#rightMockup {
			font-size: 16px;
			line-height: 26px;
		}

		#leftMockupImage {
			width: calc(100%);
			margin-left: 0px;
		}

		#rightMockupImage {
			width: calc(100%);
			margin-right: 0px;
		}

		#rightMockupDesc {
			margin-left: 6px;
		}

		#leftMockupDesc {
			margin-right: 6px;
		}
	}
</style>
