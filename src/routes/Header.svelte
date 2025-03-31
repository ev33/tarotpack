<script lang="ts">
	import type { Writable } from "svelte/store";
	import Icon from "@iconify/svelte";
	import logo from "$lib/assets/logo.svg";
	import { gotoRootPage } from "$lib/utils/UtilPage";

	export let isMenuOpen: Writable<boolean>;

	function toggleMenu() {
		isMenuOpen.update((value) => !value);
	}
</script>

<header>
	<button on:click={gotoRootPage} id="logo"
		><img id="logo1" src={logo} alt="Logo" height="24" />
		<img id="logo2" src={logo} alt="Logo" height="24" />
		<img id="logo3" src={logo} alt="Logo" height="24" />
	</button>
	<button on:click={toggleMenu}><Icon icon="tabler:menu-2" /></button>
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

	button {
		font-size: 24px;
		padding-right: 6px;
		padding-left: 6px;
		padding-top: 6px;
		transform: translateX(5px);
		color: rgb(88, 88, 88);
	}

	@keyframes moveLogo2 {
		0% {
			top: -8px;
			transform: rotateZ(0deg) translateX(0px) translateY(-3px);
		}
		0.5% {
			top: -8px;
			transform: rotateZ(0deg) translateX(0px) translateY(-3px);
		}
		10.5% {
			top: -8px;
			transform: rotateZ(-20deg) translateX(-10px) translateY(-3px);
		}
		20.5% {
			top: -8px;
			transform: rotateZ(0deg) translateX(0px) translateY(-3px);
		}
		100% {
			top: -8px;
			transform: rotateZ(0deg) translateX(0px) translateY(-3px);
		}
	}

	@keyframes moveLogo3 {
		0% {
			top: -8px;
			transform: rotateZ(20deg) translateX(10px) translateY(-3px);
		}
		10% {
			top: -8px;
			transform: rotateZ(-20deg) translateX(-10px) translateY(-3px);
		}
		20% {
			top: -8px;
			transform: rotateZ(20deg) translateX(10px) translateY(-3px);
		}
		100% {
			top: -8px;
			transform: rotateZ(20deg) translateX(10px) translateY(-3px);
		}
	}

	#logo1 {
		position: absolute;
		top: -8px;
		transform: rotateZ(-20deg) translateX(-10px) translateY(-3px);
	}

	#logo2 {
		position: absolute;
		top: -8px;
		transform: translateY(-3px);
		animation: moveLogo2 8s;
	}

	#logo3 {
		position: absolute;
		top: -8px;
		transform: rotateZ(20deg) translateX(10px) translateY(-3px);
		animation: moveLogo3 8s;
	}
</style>
