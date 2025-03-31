import { reveal } from "svelte-reveal";
import type { Action } from "svelte/action";

export const flyReveal: Action<HTMLElement> = (node) => {
	const instance = reveal(node, {
		preset: "fly",
		y: 30,
		duration: 1800,
		easing: "easeOutExpo"
	});

	return instance as ReturnType<typeof reveal>;
};
