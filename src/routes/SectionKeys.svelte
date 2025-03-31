<script lang="ts">
	import { flyReveal } from "$lib/utils/UtilReveal";
</script>

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
		<div class="keyTitle" use:flyReveal>몰입감 있는 그래픽</div>
		<div class="keyDesc" use:flyReveal>
			오프라인 타로를 보는 것 같이 실감나는 연출<br />그리고 카드팩을 뜯는 손맛까지
		</div>
		<div class="keyImage" use:flyReveal>이미지를 넣어주세요.</div>
	</div>
</div>

<style>
	.keyContainer {
		position: relative;
		background-color: white;
		padding-top: 100px;
		padding-bottom: 60px;
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
