<script lang="ts">
	import { goto } from "$app/navigation";
	import { onDestroy, onMount } from "svelte";
	import mockup from "$lib/assets/mockup.png";

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
			cancelAnimationFrame(animationFrameId); // 애니메이션 프레임 취소
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
			<img id="leftMockupImage" alt="모바일 목업" src={mockup} /><br /><br /><br /><br /><br />목업
			설명2asdadasdasdasdsaads
		</div>
		<div id="rightMockup">
			목업 설명1<br /><br /><br /><br /><br /><br /><br /><img
				id="rightMockupImage"
				alt="모바일 목업"
				src={mockup}
			/>
		</div>
	</div>
</div>

<style>
	#S1Banner {
		padding: 12% 0px 50px 0px;
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
		text-align: right;
	}

	#rightMockup {
		padding-left: 10px;
	}

	#leftMockupImage {
		width: calc(100%);
	}

	#rightMockupImage {
		width: calc(100%);
	}

	#marqueeContainer {
		display: flex;
		/* width: auto; */
	}

	.marquee {
		overflow: hidden;
		white-space: nowrap; /* 자식 요소들이 다음 줄로 넘어가는 것을 방지 */
		display: flex;
		justify-content: space-evenly;
		width: calc(98 * 7px);
		flex-grow: 0; /* 공간을 채우지 않도록 설정 */
		flex-shrink: 0; /* 축소되지 않도록 설정 */
		flex-basis: auto; /* 기본 크기 설정 */
	}

	.tarotCard {
		width: 70px;
		height: 120px;
		background-color: rgba(0, 0, 0, 0.05);
		margin: 40px 14px 44px 14px;
		box-shadow: rgba(255, 242, 102, 0.483) 0px 0px 20px;
		bottom: 0;
		flex-grow: 0; /* 공간을 채우지 않도록 설정 */
		flex-shrink: 0; /* 축소되지 않도록 설정 */
		flex-basis: auto; /* 기본 크기 설정 */
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

	@media (max-width: 480px) {
		.title {
			font-size: 36px;
		}
	}
</style>
