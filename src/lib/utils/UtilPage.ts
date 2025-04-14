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

export const gotoSample = () => {
	if (
		confirm("[타로팩 카카오톡 채널 메뉴] - [무료 타로팩 받기]로 무료 타로팩을 받아볼 수 있어요.")
	) {
		window.open("http://pf.kakao.com/_rQZwn");
	}
};
