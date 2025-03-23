<script>
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';
	import TopButton from './TopButton.svelte';
	import '../app.css';
</script>

<main>
	<TopButton />
	<Header />
	<slot />
	<Footer />
</main>

<style>
	main {
		max-width: 600px;
		margin: auto;
	}
</style>
