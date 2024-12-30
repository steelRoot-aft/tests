


//Бургер меню

$(document).ready(function () {
	$('.header__bottom-burger').click(function (event) {
		$('.header__bottom-burger,.header__bottom-block').toggleClass('active');
		$('body').toggleClass('lock')
	});
	$('.header__bottom-block a').click(function () {
		$('.header__bottom-burger,.header__bottom-block').removeClass('active');
		$('body').removeClass('lock');
	});
});



function ibg() {

	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}

ibg();

