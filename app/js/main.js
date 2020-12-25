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


		//Power Range
		var elem = document.querySelector('.calc__range');
		var valueBox = document.getElementById('calc__summ-num');
		var init = new Powerange(elem, {
		hideRange     : true, 
		min           : 100000, 
		max           : 1000000, 
		start         : 100000, 
		step          : 100000, 
		});

		elem.addEventListener('change', () => {
		valueBox.innerText = elem.value.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
		});

		//calc
		let radio = document.querySelectorAll('input[name="programms"]'),
			totalBox = document.querySelector('.calc__total strong'),
			monthlyBox = document.querySelector('.calc__month strong'),
			percent = 0.2,
			money = 100000,
			permonth = 9167,
			month = 6;

		radio.forEach((btn) => {
			btn.addEventListener('change', function () {
				percent = +btn.getAttribute('data-per');
				month = +btn.getAttribute('data-month');
				result = Math.round(percent / 12 * month * money);
				total = result + money;
				permonth = Math.round(total / 12);
				monthlyBox.innerHTML = permonth.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
				totalBox.innerHTML = total.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
			});
		});

		document.querySelector('.calc__range').addEventListener('change', function () {
			money = +this.value;
			result = Math.round(percent / 12 * month * money);
			total = result + money;
			permonth = Math.round(total / 12);
			monthlyBox.innerHTML = permonth.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
			totalBox.innerHTML = total.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
		});
	



});
