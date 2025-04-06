<script lang="ts">
	import { flyReveal } from "$lib/utils/UtilReveal";
</script>

<div id="SectionSample">
	<div id="line"></div>
	<div id="title" use:flyReveal>
		아직 고민 되시나요?<br />
		직접 체험해보고 결정하세요<br />
		무료 타로팩 받기 →
	</div>
	<div id="share"></div>
</div>

<style>
	#SectionSample {
		background-color: white;
		color: #262626;
		padding: 0px 0px 30px 0px;
		font-weight: 500;
		text-align: center;
	}

	#line {
		height: 150px;
		width: 2px;
		background-color: rgb(230, 230, 230);
		margin: auto;
	}

	#title {
		margin: 30px 40px 100px 40px;
		font-size: 32px;
		font-weight: 600;
		line-height: 56px;
	}

	@media (max-width: 480px) {
		#SectionSample {
			padding: 0px 0px 30px 0px;
		}

		#line {
			height: 100px;
		}

		#title {
			font-size: 26px;
			line-height: 44px;
		}
	}
</style>
