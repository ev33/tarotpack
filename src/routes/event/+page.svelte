<script lang="ts">
	import { goto } from "$app/navigation";
	import event1 from "$lib/assets/event1.png";
	import event2 from "$lib/assets/event2.png";
	import event3 from "$lib/assets/event3.png";

	function onClickItem(target: string) {
		if (window.location.pathname !== "/event/" + target) {
			goto("/" + target);
		} else {
			window.scrollTo({ top: 0, behavior: "smooth" });
		}
	}
</script>

<div id="eventPage">
	<div id="title">이벤트</div>
	<button
		class="eventItem"
		on:click={() => {
			onClickItem("reservation");
		}}
	>
		<img alt="1+1 타로팩 사전예약 이벤트" src={event3} />
		<div class="eventTitle">
			1+1 타로팩 사전예약 이벤트
			<div class="newIcon">new</div>
		</div>
		<div class="date">2025.04.16 ~ 2025.05.16</div>
	</button>

	<button
		class="eventItem"
		on:click={() => {
			onClickItem("reservation");
		}}
	>
		<img alt="지금 타로팩은 개발 중" src={event2} />
		<div class="eventTitle">지금 타로팩은 개발 중</div>
		<div class="date">2025.03.22 ~ 2025.04.15</div>
	</button>

	<button
		class="eventItem"
		on:click={() => {
			onClickItem("reservation");
		}}
	>
		<img alt="첫 번째 이벤트" src={event1} />
		<div class="eventTitle">첫 번째 이벤트</div>
		<div class="date">2024.01.01 ~ 2024.12.31</div>
	</button>
</div>

<style>
	#eventPage {
		padding: 20px;
	}

	#title {
		font-size: 24px;
		font-weight: 700;
		margin-bottom: 20px;
	}

	.eventItem {
		text-align: left;
	}

	img {
		width: 100%;
	}

	.eventTitle {
		width: 100%;
		font-size: 16px;
		font-weight: 600;
		margin-top: 10px;
		margin-bottom: 4px;
	}

	.date {
		font-size: 12px;
		color: rgb(135, 135, 135);
		margin-bottom: 40px;
	}

	.newIcon {
		width: 30px;
		height: 16px;
		background-color: rgb(252, 56, 92);
		display: inline-block;
		font-size: 10px;
		text-align: center;
		border-radius: 5px;
		padding-top: 2px;
		color: rgb(255, 255, 255);
		font-weight: 600;
		transform: translateY(-8px);
		-webkit-transform: translateY(-3px);
		-moz-transform: translateY(-2px);
		-ms-transform: translateY(-2px);
		-o-transform: translateY(-2px);
	}
</style>
