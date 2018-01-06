
{
	let search = document.querySelector("#search"),
		h1 = document.querySelector(".c-h1"),
		input = document.querySelector(".c-nav__input"),
		menu = document.querySelector("#menu"),
		navMenu = document.querySelector(".c-nav__menu");
		form = document.querySelector("#form");



	search.addEventListener("click", () => {
		h1.classList.toggle("c-h1--left")
		input.classList.toggle("is-displayed")
		search.classList.toggle("o-nav__img--right")
	}, false)

	menu.addEventListener("click", () => {
		navMenu.classList.toggle("is-displayed--flex")
	}, false)

	search.addEventListener("click", () => {
		document.getElementById("form").reset();
	})

}