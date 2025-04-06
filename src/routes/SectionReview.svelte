<script lang="ts">
	import { flyReveal } from "$lib/utils/UtilReveal";
</script>

<div id="SectionReview">
	<div id="canvas">
		<div id="border">
			<div id="circle1"></div>
			<div id="circle2"></div>
			<div id="circle3"></div>
			<div id="circle4"></div>
			<div id="title" use:flyReveal>
				<span>타로팩</span> 고객님들의<br />만족스러운 후기
			</div>
			<div class="review">리뷰입니다.</div>
			<div class="review">리뷰입니다.</div>
			<div class="review">리뷰입니다.</div>
			<div class="review">리뷰입니다.</div>
			<div id="desc">* 타로팩을 이용하신 분들의 실제 후기입니다.</div>
		</div>
	</div>
</div>

<style>
	#SectionReview {
		background-color: rgb(250, 250, 250);
		padding: 20px;
		padding-bottom: 80px;
		font-weight: 500;
		color: white;
	}

	#canvas {
		width: 100%;
		height: 100%;
		background: rgb(205, 16, 51);
		background: linear-gradient(155deg, rgb(227, 31, 67) 0%, rgb(187, 9, 41) 100%);
		border-radius: 30px;
		outline: 8px solid white;
		outline-offset: -17px;
		position: relative;
		padding-top: 20%;
		padding-bottom: 10%;
		box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
	}

	#circle1 {
		width: 30px;
		height: 30px;
		border-radius: 50px;
		background-color: transparent;
		border: 8px solid white;
		position: absolute;
		left: 11px;
		top: 11px;
	}

	#circle2 {
		width: 30px;
		height: 30px;
		border-radius: 50px;
		background-color: transparent;
		border: 8px solid white;
		position: absolute;
		right: 11px;
		top: 11px;
	}

	#circle3 {
		width: 30px;
		height: 30px;
		border-radius: 50px;
		background-color: transparent;
		border: 8px solid white;
		position: absolute;
		left: 11px;
		bottom: 11px;
	}

	#circle4 {
		width: 30px;
		height: 30px;
		border-radius: 50px;
		background-color: transparent;
		border: 8px solid white;
		position: absolute;
		right: 11px;
		bottom: 11px;
	}

	#title {
		padding: 0px 40px 10px 40px;
		margin: auto;
		margin-bottom: 50px;
		width: 320px;
		font-size: 32px;
		font-weight: 600;
		text-align: center;
		border-bottom: 8px solid white;
		color: white;
		border-radius: 30px;
		font-family: "PyeongChangPeace-Light";
		line-height: 48px;
		overflow: visible;
		white-space: nowrap;
	}

	#title span {
		font-family: "PyeongChangPeace-Bold";
	}

	.review {
		text-align: center;
		background-color: white;
		padding-bottom: 80px;
		width: calc(100% - 100px);
		margin: auto;
		margin-top: 20px;
		border-radius: 20px;
		box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.16);
		color: white;
	}

	#desc {
		margin-top: 20px;
		font-size: 12px;
		margin-left: 50px;
		color: rgba(255, 255, 255, 1);
		font-weight: 400;
	}

	@media (max-width: 480px) {
		#title {
			font-size: 26px;
			width: 280px;
		}

		.review {
			padding-bottom: 80px;
			width: calc(100% - 60px);
			margin: auto;
			margin-top: 12px;
			border-radius: 20px;
			box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.16);
			font-size: 16px;
		}

		#desc {
			margin-top: 10px;
			margin-bottom: 20px;
			font-size: 10px;
			margin-left: 30px;
		}
	}

	@media (max-width: 400px) {
		#title {
			border: none;
			font-size: 24px;
			margin: auto;
			padding-left: 0px;
			padding-right: 0px;
			width: 260px;
		}
	}
</style>
