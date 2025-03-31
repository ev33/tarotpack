import { reveal } from "svelte-reveal";
import type { Action } from "svelte/action";
import { tweened } from "svelte/motion";
import { cubicInOut, cubicOut } from "svelte/easing";

export const flyReveal: Action<HTMLElement> = (node) => {
	let hasRevealed = false;

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting && !hasRevealed) {
					onRevealStart(node);
					hasRevealed = true;
					observer.unobserve(entry.target);
				}
			});
		},
		{
			threshold: 0.1
		}
	);

	// Observer 시작
	observer.observe(node);

	// `reveal` 애니메이션 설정
	const instance = reveal(node, {
		preset: "fly",
		y: 30,
		duration: 1800,
		easing: "easeOutExpo"
	});

	function onRevealStart(node: HTMLElement) {
		console.log("애니메이션 시작!");

		const spans = node.querySelectorAll("span");
		spans.forEach((span) => {
			const startNumber = span.dataset.startCount ? parseInt(span.dataset.startCount, 10) : 0;
			const endNumber = span.dataset.endCount ? parseInt(span.dataset.endCount, 10) : null;

			if (endNumber !== null) {
				const count = tweened(startNumber, { duration: 1500, easing: cubicOut });

				count.set(startNumber);

				count.subscribe((value) => {
					span.textContent = Math.floor(value).toLocaleString();
				});

				count.set(endNumber);
			}
		});
	}

	return instance as ReturnType<typeof reveal>;
};
