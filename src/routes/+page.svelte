<script>
	import S1Banner from "./S1Banner.svelte";
</script>

<div id="introPage">
	<S1Banner />
</div>

<style>
	@font-face {
		font-family: "PyeongChangPeace-Bold";
		src: url("https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2206-02@1.0/PyeongChangPeace-Light.woff2")
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
