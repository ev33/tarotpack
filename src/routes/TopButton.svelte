<script>
	import Icon from '@iconify/svelte';

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	let showButton = false;

	function checkScroll() {
		if (window.scrollY >= 300) {
			showButton = true;
		} else {
			showButton = false;
		}
	}

	import { onMount } from 'svelte';
	onMount(() => {
		window.addEventListener('scroll', checkScroll);
		checkScroll();
	});
</script>

<button on:click={scrollToTop} class:show={showButton}><Icon icon="tabler:chevron-up" /></button>

<style>
	button {
		position: fixed;
		bottom: 20px;
		left: calc(50% + 300px - 40px - 20px);
		right: 10vw;
		width: 40px;
		height: 40px;
		font-size: 24px;
		background-color: white;
		color: rgb(159, 159, 159);
		border-radius: 50%;
		cursor: pointer;
		box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.04);
		border: 1px solid rgb(237, 237, 237);
		line-height: 20px;
		display: none;
	}

	.show {
		display: block;
	}

	@media (max-width: 599px) {
		button {
			right: 20px;
			left: auto;
		}
	}
</style>
