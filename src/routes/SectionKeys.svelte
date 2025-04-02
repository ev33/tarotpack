<script lang="ts">
	import { flyReveal } from "$lib/utils/UtilReveal";
</script>

<div>
	<div class="keyContainer">
		<div class="key" use:flyReveal>KEY 01</div>
		<div class="keyTitle" use:flyReveal>
			<span id="count" data-start-count="0" data-end-count="180">0</span>만 가지 카드 조합
		</div>
		<div class="keyDesc" use:flyReveal>
			87종의 카드가 만들어내는 매일 새로운 조합<br />메인 & 서브 카드와 카드 방향까지 고려
		</div>
		<div class="keyImage" use:flyReveal>이미지를 넣어주세요.</div>
	</div>
	<div class="keyContainer">
		<div class="key" use:flyReveal>KEY 02</div>
		<div class="keyTitle" use:flyReveal>AI 타로 마스터의 해설</div>
		<div class="keyDesc" use:flyReveal>
			정통 타로 지식을 학습한 AI의 전문가급 해설
			<br />지금의 당신에게 꼭 맞는 조언까지
		</div>
		<div class="keyImage" use:flyReveal>이미지를 넣어주세요.</div>
	</div>
	<div class="keyContainer">
		<div class="key" use:flyReveal>KEY 03</div>
		<div class="keyTitle" use:flyReveal>몰입감 있는 타로 경험</div>
		<div class="keyDesc" use:flyReveal>
			오프라인 타로처럼 생생한 연출과 그래픽 <br />카드팩을 뜯는 듯한 손맛까지
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

	#count {
		display: inline-block;
		width: 60px;
		text-align: right;
		/* padding-right: 2px; */
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
