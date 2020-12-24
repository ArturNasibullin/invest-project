//Кнопка menu
window.addEventListener('DOMContentLoaded', () => {
	function menuBtn (btnClass, menuClass, menuLi) {
		let btn = document.querySelector(btnClass);
		let menu = document.querySelector(menuClass);
		let menuItem = document.querySelectorAll(menuLi);

		btn.addEventListener('click', () => {
			menu.classList.toggle('active');
			btn.classList.toggle('active');
			
			menuItem.forEach(item => {
				item.addEventListener('click', () => {
					btn.classList.remove('active');
					menu.classList.remove('active');
				});
			});
		});
	}
	menuBtn('.top-nav__btn', '.top-nav__menu', '.top-nav__menu li');
	menuBtn('.left-sidebar__btn', '.left-sidebar__menu', '.left-sidebar__menu li');
















});
