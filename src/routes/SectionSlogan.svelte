<script lang="ts">
	import { flyReveal } from "$lib/utils/UtilReveal";
</script>

<div id="SectionSlogan">
	<div id="recommend" use:flyReveal><span>“</span> 이런 분들께 추천해요 <span>”</span></div>
	<div>
		<div class="case" use:flyReveal>
			<span>지루한 일상 속 작은 설렘이 필요해요</span>
			<div class="highlight" data-desktop-width="298" data-mobile-width="238"></div>
		</div>
	</div>

	<div class="case" use:flyReveal>
		<span> 하루에 특별한 의미를 더하고 싶어요</span>
		<div class="highlight" data-desktop-width="298" data-mobile-width="238"></div>
	</div>
	<div class="case" use:flyReveal>
		<span>매일 찾아봐야 하는 운세가 지겨워요</span>
		<div class="highlight" data-desktop-width="298" data-mobile-width="238"></div>
	</div>
	<div id="answer" use:flyReveal>타로팩은<br />매일 어디서든<br />꺼내볼 수 있으니까!</div>
</div>

<style>
	#SectionSlogan {
		background-color: rgb(250, 250, 250);
		padding: 20px 0px 30px 0px;
		font-weight: 500;
	}

	.highlight {
		height: 20px;
		width: 0;
		background-color: rgb(255, 214, 214);
		position: absolute;
		transform: translateX(-49.8%) translateY(-18px) rotate(0deg);
		left: 50%;
		transition: width 1s ease-in-out; /* 애니메이션 효과 */
	}

	#recommend {
		text-align: center;
		color: #262626;
		margin-bottom: 40px;
		font-size: 32px;
		font-weight: 600;
	}

	#recommend span {
		font-size: 100px;
		color: rgb(230, 230, 230);
		display: inline-block;
		position: relative;
		top: 40px;
		margin: 10px;
	}

	.case {
		width: 100% - 80px;
		background-color: white;
		color: #262626;
		text-align: center;
		margin-bottom: 30px;
		margin-left: 40px;
		margin-right: 40px;
		padding: 30px 0px;
		font-size: 20px;
		box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.06);
		border-radius: 20px;
		font-weight: 600;
	}

	.case span {
		position: relative;
		z-index: 1;
	}

	#answer {
		text-align: center;
		color: #262626;
		margin-top: 60px;
		font-size: 32px;
		line-height: 56px;
		font-weight: 600;
	}

	@media (max-width: 480px) {
		#SectionSlogan {
			padding: 20px 0px 30px 0px;
		}

		#recommend {
			font-size: 26px;
			/* margin-top: 20px; */
		}

		.case {
			padding: 20px 0;
			border-radius: 16px;
			font-size: 16px;
			margin-bottom: 20px;
			box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.06);
			margin-left: 20px;
			margin-right: 20px;
		}

		#answer {
			font-size: 26px;
			line-height: 44px;
			padding-top: 40px;
			margin-top: 20px;
		}

		.highlight {
			height: 14px;
			width: 0;
			background-color: rgb(255, 214, 214);
			position: absolute;
			transform: translateX(-49.8%) translateY(-15px) rotate(0deg);
			left: 50%;
			transition: width 1s ease-in-out; /* 애니메이션 효과 */
		}

		#recommend span {
			font-size: 80px;
			top: 30px;
			/* margin: 10px; */
		}
	}

	@media (max-width: 342px) {
		#recommend {
			margin-top: 60px;
		}

		#recommend span {
			display: none;
		}
	}
</style>
