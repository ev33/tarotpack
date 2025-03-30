import { reveal } from "svelte-reveal"; // 사용하는 라이브러리에 맞게 import 필요
import type { Action } from "svelte/action";

export const flyReveal: Action<HTMLElement> = (node) => {
	const instance = reveal(node, {
		preset: "fly",
		y: 20,
		duration: 1400,
		easing: "easeOutExpo"
	});

	return instance as ReturnType<typeof reveal>;
};
