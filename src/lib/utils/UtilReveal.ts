import { reveal } from "svelte-reveal";
import type { Action } from "svelte/action";
import { tweened } from "svelte/motion";
import { cubicOut } from "svelte/easing";

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

	observer.observe(node);

	const instance = reveal(node, {
		preset: "fly",
		y: 30,
		duration: 1800,
		easing: "easeOutExpo"
	});

	function onRevealStart(node: HTMLElement) {
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

			if (span.dataset.addCss) {
				// span.style.cssText = span.dataset.addCss;
			}
		});

		const animationElement = node.querySelector(".animation");
		if (animationElement) {
			const clonedElement = animationElement.cloneNode(true) as HTMLElement;
			animationElement.parentNode?.replaceChild(clonedElement, animationElement);
		}

		const highlightElement = node.querySelector(".highlight") as HTMLElement;
		if (highlightElement) {
			updateHighlightWidth(highlightElement);

			const resizeHandler = () => updateHighlightWidth(highlightElement);
			window.addEventListener("resize", resizeHandler);

			return () => {
				window.removeEventListener("resize", resizeHandler);
			};
		}
	}

	function updateHighlightWidth(highlightElement: HTMLElement) {
		const mobileWidth = highlightElement.dataset.mobileWidth ?? "100";
		const desktopWidth = highlightElement.dataset.desktopWidth ?? "100";

		if (window.innerWidth > 480) {
			highlightElement.style.width = desktopWidth + "px";
		} else {
			highlightElement.style.width = mobileWidth + "px";
		}
	}

	return instance as ReturnType<typeof reveal>;
};
