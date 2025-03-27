<script lang="ts">
	import type { Writable } from "svelte/store";
	import { writable } from "svelte/store";
	import { slide } from "svelte/transition";

	let openIndex: Writable<number | null> = writable(null);
	const faqList = [
		{
			question: "타로팩은 어떤 서비스인가요?",
			answer:
				"타로팩은 매일 카카오톡 메세지 링크를 통해 타로 카드를 개봉하고 운세 풀이를 받아보는 서비스예요. 타로팩을 통해 하루의 흐름을 미리 점쳐보고 긍정적인 에너지를 얻는 습관을 만들어보세요."
		},
		{
			question: "카카오톡 사용하지 않는다면 이용할 수 없나요?",
			answer:
				"지금은 카카오톡 메세지를 통해서만 타로팩을 이용할 수 있어요. 추후 더 많은 서비스 방식을 제공할 예정이니 조금만 기다려주세요."
		},
		{
			question: "결제는 어떤 방식으로 진행되나요?",
			answer:
				"타로팩 구매 페이지에서 원하는 플랜을 선택해 결제를 진행할 수 있으며, 정기 구독(자동 결제)이 아닌 1회성 결제라 안심하셔도 괜찮아요.결제 방식은 /todo/를 지원하여 편리하고 안전하게 이용하실 수 있어요."
		},
		{
			question: "친구에게 선물할 수도 있나요?",
			answer: "네, 가능해요."
		},
		{
			question: "서비스 이용을 중단할 수 있나요?",
			answer:
				"타로팩을 구매하면 정해진 날짜까지 메세지가 발송되므로 서비스 이용을 중단한다고 해서 이용 기간이 늘어나는 건 아니에요. \n\n그래도 타로팩 받기를 중단하고 싶다면 [타로팩 카카오톡 채팅방] - [알림톡 차단]을 설정해주세요."
		},
		{
			question: "이미 결제했는데 환불을 받을 수 있나요?",
			answer:
				"환불 요청 시점이 결제일로부터 3일 이내라면 전액 환불을 받을 수 있으며, 그 이후엔 부분 환불은 불가능해요."
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
		font-weight: 400;
	}

	.faqAnswer {
		padding: 20px;
		background: #f9f9f9;
		/* border-left: 3px solid #ccc; */
		overflow: hidden;
		line-height: 24px;
		font-weight: 400;
		font-size: 14px;
		white-space: pre-line;
	}

	hr {
		height: 2px;
		border: 0;
		background: #f9f9f9;
	}
</style>
