<script lang="ts">
	import type { Writable } from "svelte/store";
	import { writable } from "svelte/store";
	import { slide } from "svelte/transition";

	let openIndex: Writable<number | null> = writable(null);
	const faqList = [
		{
			question: "타로팩이 어떤 서비스인가요?",
			answer: "타로팩은 매일 카드를 뽑아 운세를 확인할 수 있는 서비스입니다."
		},
		{
			question: "결제는 어떤 방식으로 진행되나요?",
			answer: "카카오페이 및 신용카드 결제가 가능합니다."
		},
		{ question: "결제 후 환불이 가능한가요?", answer: "결제 후 7일 이내에는 환불이 가능합니다." },
		{
			question: "카카오톡을 사용하지 않는다면 이용할 수 없나요?",
			answer: "현재는 카카오톡을 통해서만 이용 가능합니다."
		},
		{
			question: "타로팩이 어떤 서비스인가요?",
			answer: "타로팩은 매일 카드를 뽑아 운세를 확인할 수 있는 서비스입니다."
		},
		{
			question: "결제는 어떤 방식으로 진행되나요?",
			answer: "카카오페이 및 신용카드 결제가 가능합니다."
		},
		{ question: "결제 후 환불이 가능한가요?", answer: "결제 후 7일 이내에는 환불이 가능합니다." },
		{
			question: "카카오톡을 사용하지 않는다면 이용할 수 없나요?",
			answer: "현재는 카카오톡을 통해서만 이용 가능합니다."
		},
		{
			question: "타로팩이 어떤 서비스인가요?",
			answer: "타로팩은 매일 카드를 뽑아 운세를 확인할 수 있는 서비스입니다."
		},
		{
			question: "결제는 어떤 방식으로 진행되나요?",
			answer: "카카오페이 및 신용카드 결제가 가능합니다."
		},
		{ question: "결제 후 환불이 가능한가요?", answer: "결제 후 7일 이내에는 환불이 가능합니다." },
		{
			question: "카카오톡을 사용하지 않는다면 이용할 수 없나요?",
			answer: "현재는 카카오톡을 통해서만 이용 가능합니다."
		},
		{
			question: "타로팩이 어떤 서비스인가요?",
			answer: "타로팩은 매일 카드를 뽑아 운세를 확인할 수 있는 서비스입니다."
		},
		{
			question: "결제는 어떤 방식으로 진행되나요?",
			answer: "카카오페이 및 신용카드 결제가 가능합니다."
		},
		{ question: "결제 후 환불이 가능한가요?", answer: "결제 후 7일 이내에는 환불이 가능합니다." },
		{
			question: "카카오톡을 사용하지 않는다면 이용할 수 없나요?",
			answer: "현재는 카카오톡을 통해서만 이용 가능합니다."
		}
	];

	function toggle(index: number) {
		openIndex.update((current) => (current === index ? null : index));
	}
</script>

<div id="faqPage">
	<div id="title">자주 묻는 질문</div>

	{#each faqList as faq, index}
		<button class="faqItem" on:click={() => toggle(index)}>{faq.question}</button>
		{#if $openIndex === index}
			<div class="faqAnswer" transition:slide>{faq.answer}</div>
		{/if}
		<hr />
	{/each}
</div>

<style>
	#faqPage {
		padding: 20px;
	}

	#title {
		font-size: 24px;
		font-weight: 700;
		margin-bottom: 20px;
	}

	.faqItem {
		width: 100%;
		padding: 16px 0px;
		text-align: left;
		background: none;
		border: none;
		cursor: pointer;
		font-weight: 500;
	}

	.faqAnswer {
		padding: 20px;
		background: #f9f9f9;
		/* border-left: 3px solid #ccc; */
		font-size: 14px;
		overflow: hidden;
	}

	hr {
		height: 2px;
		border: 0;
		background: #f9f9f9;
	}
</style>
