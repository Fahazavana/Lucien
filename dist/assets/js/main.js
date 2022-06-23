//MENU
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector("nav.menu");
const menuNav = document.querySelector(".menu-nav");
const menuBrand = document.querySelector(".menu-brand");
const menuItems = document.querySelectorAll(".menu-nav-item");

let showMenu = false;

menuBtn.addEventListener("click", menuToggle);

function menuToggle() {
	if (!showMenu) {
		menuBtn.classList.add("close");
		menu.classList.add("show");
		menuBrand.classList.add("show");
		menuNav.classList.add("show");
		menuItems.forEach((item) => item.classList.add("show"));
		showMenu = true;
	} else {
		menuBtn.classList.remove("close");
		menu.classList.remove("show");
		menuBrand.classList.remove("show");
		menuNav.classList.remove("show");
		menuItems.forEach((item) => item.classList.remove("show"));
		showMenu = false;
	}
}
