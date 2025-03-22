<script>
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';
	import '../app.css';
</script>

<main>
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
