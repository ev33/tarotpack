<script>
	// @ts-ignore
	import SectionIntro from "./SectionIntro.svelte";
	import SectionKeys from "./SectionKeys.svelte";
	import SectionPrice from "./SectionPrice.svelte";
	import SectionReview from "./SectionReview.svelte";
	import SectionSample from "./SectionSample.svelte";
	import SectionSlogan from "./SectionSlogan.svelte";
</script>

<div id="introPage">
	<SectionIntro />
	<SectionSlogan />
	<SectionKeys />
	<SectionReview />
	<SectionPrice />
	<SectionSample />
</div>

<style>
	@font-face {
		font-family: "PyeongChangPeace-Light";
		src: url("https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2206-02@1.0/PyeongChangPeace-Light.woff2")
			format("woff2");
		font-weight: 700;
		font-style: normal;
	}

	@font-face {
		font-family: "PyeongChangPeace-Bold";
		src: url("https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2206-02@1.0/PyeongChangPeace-Bold.woff2")
			format("woff2");
		font-weight: 700;
		font-style: normal;
	}

	#introPage {
		min-height: calc(100vh - 179.59px);
		/* height: 1500px; */
		background-color: rgb(244, 244, 244);
	}
</style>
