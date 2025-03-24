<script lang="ts">
	import { fade, slide } from "svelte/transition";
	import type { Writable } from "svelte/store";
	import Icon from "@iconify/svelte";
	import { goto } from "$app/navigation";

	export let isMenuOpen: Writable<boolean>;

	function toggleMenu() {
		isMenuOpen.update((value) => !value);
	}

	function onClickItem(target: string) {
		toggleMenu();

		if (window.location.pathname !== "/" + target) {
			goto("/" + target, { noScroll: true });
		} else {
			window.scrollTo({ top: 0, behavior: "smooth" });
		}
	}
</script>

{#if $isMenuOpen}
	<div id="fixedMenu">
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div id="backlayer" on:click={toggleMenu} transition:fade={{ duration: 300 }}></div>
		<div id="menuContainer" transition:slide={{ duration: 300, axis: "x" }}>
			<button id="close" on:click={toggleMenu}><Icon icon="tabler:x" /></button>
			<button
				class="menuItem"
				on:click={() => {
					onClickItem("");
				}}>홈</button
			>
			<hr />
			<button class="menuItem">구독하기</button>
			<button class="menuItem">무료 체험</button>
			<hr />
			<button
				class="menuItem"
				on:click={() => {
					onClickItem("event");
				}}>이벤트</button
			>
			<button class="menuItem">자주 묻는 질문</button>
			<button class="menuItem">고객센터</button>
		</div>
	</div>
{/if}

<style>
	::-webkit-scrollbar {
		display: none;
	}

	#fixedMenu {
		position: fixed;
		height: 100%;
		width: min(100%, 600px);
		z-index: 9000;
		overflow: auto;
		-ms-overflow-style: none;
		scrollbar-width: none;
	}

	#backlayer {
		position: fixed;
		background-color: rgba(0, 0, 0, 0.4);
		height: 100%;
		width: min(100%, 600px);
		top: 0;
	}

	#menuContainer {
		position: absolute;
		min-height: 100%;
		width: min(100%, 240px);
		background-color: white;
		white-space: nowrap;
		right: 0px;
		overflow: auto;
	}

	.menuItem {
		width: 100%;
		height: 40px;
		font-size: 18px;
		display: flex;
		align-items: center;
		padding-left: 20px;
		color: #282828;
		font-weight: 500;
		cursor: pointer;
	}

	#close {
		font-size: 24px;
		padding-right: 6px;
		padding-left: 6px;
		padding-top: 6px;
		color: rgb(88, 88, 88);
		margin-top: 12px;
		margin-left: 10px;
		margin-bottom: 20px;
	}

	hr {
		margin: 10px 20px;
		height: 1px;
		border: 0;
		background: rgb(236, 236, 236);
	}
</style>
