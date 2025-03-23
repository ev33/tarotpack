<script>
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';
	import TopButton from './TopButton.svelte';
	import '../app.css';
	import Menu from './Menu.svelte';
	import { writable } from 'svelte/store';

	let isMenuOpen = writable(false);
	$: {
		document.body.style.overflow = $isMenuOpen ? 'hidden' : '';
	}
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
