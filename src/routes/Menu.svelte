<script lang="ts">
	import { fade, slide } from "svelte/transition";
	import type { Writable } from "svelte/store";
	import Icon from "@iconify/svelte";
	import { goto } from "$app/navigation";
	import { backIn } from "svelte/easing";

	export let isMenuOpen: Writable<boolean>;
	let isShowMailCopied: boolean = false;
	let mailCopiedTimeoutID: ReturnType<typeof setTimeout> | null = null;

	function toggleMenu() {
		isMenuOpen.update((value) => !value);
	}

	function onClickItem(target: string) {
		toggleMenu();

		if (window.location.pathname !== "/" + target) {
			goto("/" + target);
		} else {
			window.scrollTo({ top: 0, behavior: "smooth" });
		}
	}

	function showMailCopied() {
		if (mailCopiedTimeoutID) {
			clearTimeout(mailCopiedTimeoutID);
		} else {
			isShowMailCopied = true;
		}
		mailCopiedTimeoutID = setTimeout(() => {
			isShowMailCopied = false;
			mailCopiedTimeoutID = null;
		}, 600);
	}

	function copyMail() {
		const textToCopy = "cs@tarotpack.com";

		if (navigator.clipboard) {
			navigator.clipboard.writeText(textToCopy).then(() => {
				showMailCopied();
			});
		} else {
			const textarea = document.createElement("textarea");
			textarea.value = textToCopy;
			document.body.appendChild(textarea);
			textarea.select();
			document.execCommand("copy");
			document.body.removeChild(textarea);
			showMailCopied();
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
				}}>서비스 소개</button
			>
			<hr />
			<button
				class="menuItem"
				on:click={() => {
					onClickItem("subscribe");
				}}>시작하기</button
			>
			<button
				class="menuItem"
				on:click={() => {
					onClickItem("sample");
				}}>무료 체험</button
			>
			<hr />
			<button
				class="menuItem"
				on:click={() => {
					onClickItem("event");
				}}>이벤트</button
			>
			<button
				class="menuItem"
				on:click={() => {
					onClickItem("faq");
				}}>자주 묻는 질문</button
			>
			<button class="menuItem" on:click={copyMail}>문의하기</button>
		</div>
	</div>
{/if}

{#if isShowMailCopied}
	<div id="mailCopied" in:fade={{ duration: 50 }} out:fade={{ duration: 1000, easing: backIn }}>
		타로팩 이메일 주소를 복사했어요<br />
		문의 내용을 보내주시면 빠르게 답변해드릴게요<br />
		cs@tarotpack.com
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
		height: 42px;
		font-size: 18px;
		display: flex;
		align-items: center;
		padding-left: 20px;
		color: #2f2f2f;
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

	#mailCopied {
		width: calc(min(100%, 600px) - 40px);
		margin: 20px;
		height: 100px;
		bottom: 50px;
		position: fixed;
		z-index: 9000;
		background-color: rgba(0, 0, 0, 0.75);
		box-shadow: 0px 2px 6px rgba(62, 0, 0, 0.04);
		border-radius: 10px;
		color: white;
		font-size: 14px;
		text-align: center;
		padding-top: 17px;
		line-height: 22px;
	}
</style>
