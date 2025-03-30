<script lang="ts">
	import { goto } from "$app/navigation";
	import { onDestroy, onMount } from "svelte";
	import mockup from "$lib/assets/mockup.png";
	import { fly } from "svelte/transition";

	let marquee1: HTMLElement;
	let marquee2: HTMLElement;
	let lastTimestamp = 0;
	let animationFrameId: number;

	function goToPage(page: string) {
		goto("/" + page);
	}

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

<div id="S1Banner">
	<div class="title">매일 타로팩으로<br />점치는 특별한 운세</div>
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
				goToPage("sample");
			}}>타로팩 체험하기</button
		><button
			id="rightButton"
			on:click={() => {
				goToPage("subscribe");
			}}>지금 시작하기</button
		>
	</div>
	<div id="mockupContainer">
		<div id="leftMockup">
			<img id="leftMockupImage" alt="모바일 목업" src={mockup} /><br /><br /><br /><br /><br
			/>타로팩 개봉도 간편하게<br />별도 앱 설치가 필요하지 않아요
		</div>
		<div id="rightMockup">
			<br />카톡으로 간편하게<br />매일 잊지 않고 이용할 수 있도록<br /><br /><br /><br /><br /><br
			/><img id="rightMockupImage" alt="모바일 목업" src={mockup} />
		</div>
	</div>
	<div>
		<div class="keyContainer" in:fly={{ x: 100, duration: 500 }}>
			<div class="key">KEY 01</div>
			<div class="keyTitle">895,184가지 카드 조합</div>
			<div class="keyDesc">
				87종의 카드 중 메인 카드 1장, 서브 카드 2장, 카드의 방향까지<br />무수히 많은 카드 조합으로
				항상 새로운 맞춤 운세를 제공해요.
			</div>
		</div>
	</div>
</div>

<style>
	#S1Banner {
		padding: 12% 0px 0px 0px;
		background-image: linear-gradient(to top, rgb(236, 106, 106), rgb(205, 16, 51));
		color: rgb(255, 255, 255);
		overflow: hidden;
	}

	#mockupContainer {
		display: flex;
		margin-left: 20px;
		margin-right: 20px;
	}

	#leftMockup {
		padding-right: 10px;
		text-align: center;
	}

	#rightMockup {
		padding-left: 10px;
		text-align: center;
	}

	#leftMockupImage {
		width: calc(100%);
	}

	#rightMockupImage {
		width: calc(100%);
	}

	#marqueeContainer {
		display: flex;
		margin-bottom: 4px;
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
		background-color: rgba(0, 0, 0, 0.05);
		margin: 40px 14px 44px 14px;
		box-shadow: rgba(255, 242, 102, 0.483) 0px 0px 20px;
		bottom: 0;
		flex-grow: 0;
		flex-shrink: 0;
		flex-basis: auto;
	}

	.title {
		text-align: center;
		font-size: 44px;
		font-weight: 500;
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

	.keyContainer {
		background-color: white;
		margin-top: 20%;
		padding-top: 20%;
		padding-bottom: 100px;
		/* border-top-left-radius: 30px; */
		/* border-top-right-radius: 30px; */
		box-shadow: rgba(140, 9, 9, 0.4) 0px 2px 20px;
		background-color: rgb(246, 246, 246);
	}

	.key {
		background-color: #262626;
		width: 100px;
		border-radius: 100px;
		text-align: center;
		margin: auto;
		font-size: 18px;
		padding: 10px;
		font-weight: 500;
		margin-bottom: 20px;
	}

	.keyTitle {
		text-align: center;
		font-size: 36px;
		font-weight: 600;
		color: #262626;
		margin-bottom: 6px;
	}

	.keyDesc {
		text-align: center;
		font-size: 16px;
		color: #b2b2b2;
		font-weight: 400;
		line-height: 26px;
	}

	@media (max-width: 480px) {
		.title {
			font-size: 36px;
		}

		.keyTitle {
			font-size: 24px;
		}

		.keyDesc {
			font-size: 12px;
			line-height: 20px;
		}
	}
</style>
