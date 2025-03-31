import { goto } from "$app/navigation";

export const gotoPage = (page: string) => {
	goto("/" + page);
};

export const gotoRootPage = () => {
	if (window.location.pathname !== "/") {
		goto("/");
	} else {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}
};
