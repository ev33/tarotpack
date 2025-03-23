<script lang="ts">
	import { fade, slide } from 'svelte/transition';
	import type { Writable } from 'svelte/store';

	export let isMenuOpen: Writable<boolean>;

	function toggleMenu() {
		isMenuOpen.update((value) => !value);
	}
</script>

{#if $isMenuOpen}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div id="backlayer" on:click={toggleMenu} transition:fade={{ duration: 300 }}></div>
	<div id="menuContainer" transition:slide={{ duration: 300, axis: 'x' }}>
		여기는 메뉴를 넣겠습니다<br />감사합니다
	</div>
{/if}

<style>
	#backlayer {
		position: absolute;
		background-color: rgba(0, 0, 0, 0.4);
		z-index: 1000;
		height: 100%;
		width: min(100%, 600px);
		top: 0;
	}

	#menuContainer {
		position: absolute;
		height: 100%;
		width: min(100%, 240px);
		background-color: white;
		z-index: 2000;
		/* right: 0; */
		white-space: nowrap;
		overflow: hidden;
		right: 0px;
	}
</style>
