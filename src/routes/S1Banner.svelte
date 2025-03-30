<script lang="ts">
	import { goto } from "$app/navigation";
	import { onDestroy, onMount } from "svelte";
	import mockup from "$lib/assets/mockup.png";
	import { flyReveal } from "$lib/util/reveal";

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
		<div class="keyContainer">
			<div class="key" use:flyReveal>KEY 01</div>
			<div class="keyTitle" use:flyReveal>895,184가지 카드 조합</div>
			<div class="keyDesc" use:flyReveal>
				87종의 카드 중 메인/서브 카드, 카드의 방향으로<br />수많은 카드 조합과 항상 새로운 맞춤 운세
			</div>
			<div class="keyImage" use:flyReveal>이미지를 넣어주세요.</div>
		</div>
		<div class="keyContainer">
			<div class="key" use:flyReveal>KEY 02</div>
			<div class="keyTitle" use:flyReveal>AI의 맞춤형 운세 해설</div>
			<div class="keyDesc" use:flyReveal>
				정통 타로의 지식을 완벽하게 학습한 AI가<br />타로 전문가 수준의 해설 제공
			</div>
			<div class="keyImage" use:flyReveal>이미지를 넣어주세요.</div>
		</div>
		<div class="keyContainer">
			<div class="key" use:flyReveal>KEY 03</div>
			<div class="keyTitle" use:flyReveal>몰입력 있는 그래픽</div>
			<div class="keyDesc" use:flyReveal>
				오프라인 타로를 보는 것 같이 실감나는 연출<br />그리고 카드팩을 뜯는 손맛까지
			</div>
			<div class="keyImage" use:flyReveal>이미지를 넣어주세요.</div>
		</div>
	</div>
</div>

<style>
	#S1Banner {
		padding: 20% 0px 0px 0px;
		background-image: linear-gradient(to top, rgb(236, 106, 106), rgb(205, 16, 51));
		color: rgb(255, 255, 255);
		overflow: hidden;
	}

	#mockupContainer {
		display: flex;
		margin-left: 20px;
		margin-right: 20px;
		margin-bottom: 100px;
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
		width: calc(80%);
		margin-left: 30px;
	}

	#rightMockupImage {
		width: calc(80%);
		margin-right: 30px;
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
		border-radius: 10px;
	}

	.title {
		text-align: center;
		font-size: 44px;
		font-weight: 500;
		font-family: PyeongChangPeace-Light;
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
		position: relative;
		background-color: white;
		padding-top: 100px;
		padding-bottom: 60px;
		background-color: rgb(250, 250, 250);
	}

	.key {
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
		font-size: 36px;
		font-weight: 600;
		color: #262626;
		margin-bottom: 6px;
	}

	.keyDesc {
		text-align: center;
		font-size: 16px;
		color: #9b9b9b;
		font-weight: 400;
		line-height: 26px;
	}

	.keyImage {
		padding-bottom: 30%;
		background-color: #cdcdcd4e;
		margin: 20px 60px 0px 60px;

		padding-top: 30%;
		color: rgb(185, 185, 185);
		text-align: center;
	}

	@media (max-width: 480px) {
		.title {
			font-size: 36px;
		}

		#leftMockupImage {
			width: calc(100%);
			margin-left: 0px;
		}

		#rightMockupImage {
			width: calc(100%);
			margin-right: 0px;
		}

		.keyTitle {
			font-size: 28px;
		}

		.keyDesc {
			font-size: 16px;
			line-height: 24px;
		}

		.key {
			width: 90px;
			font-size: 16px;
			padding: 8px;
			font-weight: 600;
			margin-bottom: 20px;
		}

		.keyImage {
			margin: 20px 20px 0px 20px;
		}
	}
</style>
