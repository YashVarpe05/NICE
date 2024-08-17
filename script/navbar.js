// make scroll bar sticky
window.addEventListener("scroll", () => {
	const nav = document.querySelector("nav");
	nav.classList.toggle("sticky", window.scrollY > 0);
});

// set active page indicator
(() => {
	const activePage = window.location.pathname.replace("/pages", "");
	const navLinks = document.querySelectorAll(".nav-links ul li a");
	for (let i = 0; i < navLinks.length; i++) {
		const link = navLinks[i];
		if (link.href.replace(window.location.origin, "") == activePage) {
			link.classList.add("active");
		} else if (
			link.href.replace(window.location.origin + "/pages", "") == activePage
		) {
			link.classList.add("active");
		}
	}
})();

// toggle nav menu
(() => {
	const menuIcon = document.querySelector(".navbar-container-hamburger-menu");
	const container = document.querySelector(".navbar-mobile-container");
	menuIcon.addEventListener("click", () => {
		menuIcon.classList.toggle("toggle");
		container.classList.toggle("show");
	});
})();
// script URl
// https://script.google.com/macros/s/AKfycbybV4akY4tnPE4rOyB_bgYLdKMX7fO2Gt7Blo40WT2U_0Cdt5mDNJn_jjPcTD6Os5x_/exec


