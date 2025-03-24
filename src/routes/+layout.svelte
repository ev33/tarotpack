<script lang="ts">
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';
	import TopButton from './TopButton.svelte';
	import '../app.css';
	import Menu from './Menu.svelte';
	import { writable } from 'svelte/store';
	import { onMount } from 'svelte';

	let isMenuOpen = writable(false);

	onMount(() => {
		isMenuOpen.subscribe((value) => {
			document.body.style.overflow = value ? 'hidden' : '';
		});
	});
</script>

<main>
	<Menu {isMenuOpen} />
	<Header {isMenuOpen} />
	<TopButton />
	<slot />
	<Footer />
</main>

<style>
	main {
		max-width: 600px;
		margin: auto;
		position: relative;
	}
</style>
