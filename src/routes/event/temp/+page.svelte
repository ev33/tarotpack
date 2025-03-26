<script lang="ts">
	import { goto } from "$app/navigation";

	function backToEventPage() {
		goto("/event");
	}
</script>

<div id="eventInfoPage">
	<div id="temp">이벤트 상세 이미지</div>
</div>
<button id="back" on:click={backToEventPage}>이벤트 목록으로</button>

<style>
	#eventInfoPage {
		width: 100%;
		background-color: white;
		padding-bottom: 60px;
	}

	#temp {
		padding-top: 150px;
		width: 100%;
		height: 1000px;
		background-color: #f4f4f4;
		text-align: center;
		font-size: 16px;
		color: grey;
	}

	#back {
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 60px;
		background-color: rgb(20, 20, 20);
		color: rgb(236, 236, 236);
		width: min(100%, 600px);
		font-weight: 500;
		font-size: 16px;
	}
</style>
