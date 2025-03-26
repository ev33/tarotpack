<script lang="ts">
	import { goto } from "$app/navigation";
	import event1 from "$lib/assets/event1.png";
	import event2 from "$lib/assets/event2.png";
	import event3 from "$lib/assets/event3.png";
	import Icon from "@iconify/svelte";

	function goToPage(target: string) {
		goto("/event/" + target);
	}
</script>

<div id="eventPage">
	<div id="title">이벤트</div>
	<button
		class="eventItem"
		on:click={() => {
			goToPage("temp");
		}}
	>
		<img alt="1+1 타로팩 사전예약 이벤트" src={event3} />
		<div class="eventTitle">
			<Icon
				style="font-size: 22px; vertical-align: -4px; color: rgb(200, 200, 200); margin-right:2px"
				icon="tabler:speakerphone"
			/>
			1+1 타로팩 사전예약 이벤트
			<div class="newIcon">new</div>
		</div>
		<div class="date">2025.04.16 ~ 2025.05.16</div>
	</button>

	<button
		class="eventItem"
		on:click={() => {
			goToPage("temp");
		}}
	>
		<img alt="지금 타로팩은 개발 중" src={event2} />
		<div class="eventTitle">
			<Icon
				style="font-size: 22px; vertical-align: -4px; color: rgb(200, 200, 200); margin-right: 6px"
				icon="tabler:speakerphone"
			/>지금 타로팩은 개발 중
		</div>
		<div class="date">2025.03.22 ~ 2025.04.15</div>
	</button>

	<button
		class="eventItem"
		on:click={() => {
			goToPage("temp");
		}}
	>
		<img alt="첫 번째 이벤트" src={event1} />
		<div class="eventTitle">
			<Icon
				style="font-size: 22px; vertical-align: -4px; color: rgb(200, 200, 200); margin-right: 6px"
				icon="tabler:speakerphone"
			/>첫 번째 이벤트
		</div>
		<div class="date">2024.01.01 ~ 2024.12.31</div>
	</button>
</div>

<style>
	#eventPage {
		padding: 20px 20px 0px 20px;
	}

	#title {
		font-size: 24px;
		font-weight: 700;
		margin-bottom: 20px;
	}

	.eventItem {
		text-align: left;
	}

	/* .noticeIcon {
		color:
	} */

	img {
		width: 100%;
	}

	.eventTitle {
		width: 100%;
		font-size: 16px;
		font-weight: 600;
		margin-top: 4px;
		margin-bottom: 4px;
	}

	.date {
		font-size: 12px;
		color: rgb(170, 170, 170);
		margin-bottom: 30px;
	}

	.newIcon {
		width: 28px;
		height: 15px;
		background-color: rgb(252, 56, 92);
		display: inline-block;
		font-size: 10px;
		text-align: center;
		border-radius: 5px;
		padding-bottom: 1px;
		color: rgb(255, 255, 255);
		font-weight: 600;
		transform: translateY(-8px);
		-webkit-transform: translateY(-2px);
		-moz-transform: translateY(-10px);
		-ms-transform: translateY(-2px);
		-o-transform: translateY(-1px);
	}
</style>
