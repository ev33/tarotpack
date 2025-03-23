<script lang="ts">
	import { goto } from '$app/navigation';
	import type { Writable } from 'svelte/store';

	export let isMenuOpen: Writable<boolean>;

	function toggleMenu() {
		isMenuOpen.update((value) => !value);
	}

	function goToRootPage() {
		if (window.location.pathname !== '/') {
			goto('/', { noScroll: true });
		} else {
			scrollToTop();
		}
	}

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

<header>
	<button on:click={goToRootPage}>로고</button>
	<button on:click={toggleMenu}>햄버거</button>
</header>

<style>
	header {
		position: fixed;
		width: min(100%, 600px);
		height: 52px;
		background-color: white;
		padding: 20px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid rgb(236, 236, 236);
		z-index: 1;
	}
</style>
