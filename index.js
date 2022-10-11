const burger = document.querySelector(".hamburger-btn");
const menu = document.querySelector(".hamburger-menu");
const nav = document.querySelector(".menu");

const setAria = () => {
	let aria = burger.getAttribute("aria-expanded");

	if (aria === "false") {
		aria = "true";
	} else {
		aria = "false";
	}
	burger.setAttribute("aria-expanded", aria);
};

const toggleMenu = () => {
	menu.classList.toggle("show-menu");
	setAria();
};

const closeMenu = () => {
	menu.classList.remove("show-menu");
	setAria();
	burger.focus();
};

burger.onclick = toggleMenu;

document.onkeyup = (e) => {
	const activeEl = document.activeElement;

	if (e.key === "Escape" && activeEl !== burger) {
		closeMenu();
	}
};

document.onclick = (e) => {
	if (!nav.contains(e.target)) {
		closeMenu();
	}
};
