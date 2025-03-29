<script lang="ts">
	import { goto } from "$app/navigation";

	function goToPage(page: string) {
		goto("/" + page);
	}
</script>

<div id="S1Banner">
	<div class="title">매일 타로팩으로<br />점치는 특별한 운세</div>
	<!-- <Marquee style={"margin: auto;"}> -->
	<div class="tarotCard"></div>
	<div class="tarotCard"></div>
	<div class="tarotCard"></div>
	<div class="tarotCard"></div>
	<div class="tarotCard"></div>
	<div class="tarotCard"></div>
	<div class="tarotCard"></div>
	<div class="tarotCard"></div>
	<div class="tarotCard"></div>
	<div class="tarotCard"></div>
	<div class="tarotCard"></div>
	<div class="tarotCard"></div>
	<!-- </Marquee> -->

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
	<div id="mockup">모바일 기기 목업이 들어갈 곳이에요</div>
</div>

<style>
	#S1Banner {
		height: 600px;
		padding: 12% 0px 50px 0px;
		background-image: linear-gradient(to top, rgb(236, 106, 106), rgb(205, 16, 51));
		color: rgb(255, 255, 255);
		overflow: hidden;
	}

	.tarotCard {
		width: 70px;
		height: 120px;
		background-color: rgba(0, 0, 0, 0.05);
		margin: 40px 6px 50px 6px;
		box-shadow: rgba(255, 242, 102, 0.483) 0px 0px 20px;
		bottom: 0;
	}

	.title {
		text-align: center;
		font-size: 44px;
		font-weight: 500;
		font-family: PyeongChangPeace-Bold;
	}

	#mockup {
		margin: 20px;
		padding-top: 100px;
		width: calc(100% - 40px);
		height: 300px;
		background-color: rgba(255, 255, 255, 0.04);
		transform: translateY(30px);
		text-align: center;
		color: rgba(255, 255, 255, 0.5);
	}

	#buttons {
		padding-right: 20px;
		padding-left: 20px;
		width: min(400px, 100%);
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: auto;
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
