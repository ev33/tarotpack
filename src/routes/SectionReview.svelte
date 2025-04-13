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
			<div class="review">
				<span>김**</span><br /><span class="stars">⭐⭐⭐⭐⭐</span><br />하루 시작할 때 마음
				정리하기 좋은 것 같아요. 그냥 카드 뽑는 것 뿐인데 그 안에 담긴 의미와 해설들이 참 따뜻하고
				솔직해서 좋았어요. 누구한테 털어놓기 어려운 마음을 대신 읽고 답변 받는 기분이랄까요..
				소소하지만 큰 위로가 돼요
			</div>
			<div class="review">
				<span>정**</span><br /><span class="stars">⭐⭐⭐⭐⭐</span><br />이거 은근 중독이에요ㅋㅋㅋ
				아침마다 뭐 나올지 궁금해서 눈 뜨자마자 확인해요! 제 상황에 딱 맞는 내용 나올 때 소름 돋는건
				다들 느껴보셔야 해요. 요즘 스트레스 많았는데, 타로팩 덕분에 많이 풀리는 거 같아요 🥹 고민
				중이시라면 추천 !!
			</div>
			<div class="review">
				<span>윤**</span><br /><span class="stars">⭐⭐⭐⭐⭐</span><br />출근 전에 타로팩 뽑는게
				모닝 루틴이 됐습니다. 오늘 하루를 어떻게 보낼지 짧게 생각할 수 있어서 좋구요 .<br />오프라인
				타로랑 다르게 온라인 타로는 그냥 해석만 해주는게 대부분인데 타로팩은 오늘의 조언이라든지
				위로 되는 말들을 해줘서 매일 힐링되는 느낌. 그리고 내용이 무겁지 않아서 읽기 쉬운 점도
				마음에 들었습니다!
			</div>
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
		background-color: white;
		padding: 24px 30px;
		width: calc(100% - 100px);
		margin: auto;
		margin-top: 20px;
		border-radius: 20px;
		box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.16);
		color: #262626;
		font-weight: 500;
		line-height: 22px;
		font-size: 15px;
	}

	.review span {
		font-weight: 800;
	}

	.stars {
		line-height: 32px;
	}

	#desc {
		margin-top: 20px;
		font-size: 12px;
		margin-left: 60px;
		color: rgba(255, 255, 255, 1);
		font-weight: 400;
	}

	@media (max-width: 480px) {
		#SectionReview {
			padding: 0px;
			padding-bottom: 80px;
		}

		#title {
			font-size: 26px;
			width: 280px;
		}

		#canvas {
			padding-top: 16%;
		}

		.review {
			padding: 20px;
			width: calc(100% - 60px);
			margin: auto;
			margin-top: 12px;
			border-radius: 20px;
			box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.16);
		}

		#desc {
			margin-top: 10px;
			margin-bottom: 20px;
			margin-left: 36px;
			font-size: 11px;
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
			line-height: 36px;
		}
	}
</style>
