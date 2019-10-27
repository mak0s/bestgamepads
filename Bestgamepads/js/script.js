/*Функция отвечающая за плавный скролл при нажатии на ссылки на сайте*/
var burgerMenuButton = $('.burger-menu__button');
function backToTop(){
	let button = $('.back-to-top');
	let menuEl1 = $('.ul_item1');
	let menuEl2 = $('.ul_item2');
	let menuEl3 = $('.ul_item3');
	let menuEl4 = $('.ul_item4');
	let menuEl5 = $('.ul_item5');
	let menuEl6 = $('.ul_item6');
	let buyButton1 = $('.offer_button');
	let buyButton2 = $('.discr_button');


	/*Кнопка "Наверх" появляется при небольшом скролле вниз страницы*/
	$(window).on('scroll', () => {
		if($(this).scrollTop() >= 50){
			button.fadeIn();
		}else{
			button.fadeOut();
		}
	});


	/*Анимация кнопки "Наверх" появляется при небольшом скролле вниз страницы*/
	button.on('click', (e) => {
		e.preventDefault();
		$('html').animate({scrollTop: 0}, 600);
	});

			/*Плавная анимация прокрутки для каждой ссылки на сайте */
			menuEl1.click(function() {
		    $([document.documentElement, document.body]).animate({
		        scrollTop: $("#discription_txt").offset().top
		    }, 600);
		});

			menuEl2.click(function() {
		    $([document.documentElement, document.body]).animate({
		        scrollTop: $("#advantages").offset().top
		    }, 600);
		});

			menuEl3.click(function() {
		    $([document.documentElement, document.body]).animate({
		        scrollTop: $("#reviews").offset().top
		    }, 600);
		});

			menuEl4.click(function() {
		    $([document.documentElement, document.body]).animate({
		        scrollTop: $("#instruction").offset().top
		    }, 600);
		});

			menuEl5.click(function() {
		    $([document.documentElement, document.body]).animate({
		        scrollTop: $("#delivery").offset().top
		    }, 600);
		});

			menuEl6.click(function() {
		    $([document.documentElement, document.body]).animate({
		        scrollTop: $("#orderForm").offset().top
		    }, 600);
		});

			buyButton1.click(function() {
		    $([document.documentElement, document.body]).animate({
		        scrollTop: $("#orderForm").offset().top
		    }, 600);
		});

			buyButton2.click(function() {
		    $([document.documentElement, document.body]).animate({
		        scrollTop: $("#orderForm").offset().top
		    }, 600);
		});
}

function burgerMenu(selector){
	let menu = $(selector);
	let button = menu.find('.burger-menu__button');
	let links = menu.find('.burger-menu__link');
	let overlay = menu.find('.burger-menu__overlay');
	let menuEl1 = $('.burger-menu__link1');
	let menuEl2 = $('.burger-menu__link2');
	let menuEl3 = $('.burger-menu__link3');
	let menuEl4 = $('.burger-menu__link4');
	let menuEl5 = $('.burger-menu__link5');
	let menuEl6 = $('.burger-menu__link6');

	button.on('click', (e) => {
		e.preventDefault();
		toggleMenu();
	})


	links.on('click', () => toggleMenu());
	overlay.on('click', () => toggleMenu());


	function toggleMenu(){
		menu.toggleClass('burger-menu__active');

		 if(menu.hasClass('burger-menu__active')){
		 	$('body').css('overflow', 'hidden');
		 }else{
		 	$('body').css('overflow', 'visible');
		 }
	}

			/*Плавная анимация прокрутки для каждой ссылки в бургер-меню*/
			menuEl1.click(function() {
		    $([document.documentElement, document.body]).animate({
		        scrollTop: $("#discription_txt").offset().top
		    }, 600);
		});

			menuEl2.click(function() {
		    $([document.documentElement, document.body]).animate({
		        scrollTop: $("#advantages").offset().top
		    }, 600);
		});

			menuEl3.click(function() {
		    $([document.documentElement, document.body]).animate({
		        scrollTop: $("#reviews").offset().top
		    }, 600);
		});

			menuEl4.click(function() {
		    $([document.documentElement, document.body]).animate({
		        scrollTop: $("#instruction").offset().top
		    }, 600);
		});

			menuEl5.click(function() {
		    $([document.documentElement, document.body]).animate({
		        scrollTop: $("#delivery").offset().top
		    }, 600);
		});

			menuEl6.click(function() {
		    $([document.documentElement, document.body]).animate({
		        scrollTop: $("#orderForm").offset().top
		    }, 600);
		});

			buyButton1.click(function() {
		    $([document.documentElement, document.body]).animate({
		        scrollTop: $("#orderForm").offset().top
		    }, 600);
		});

			buyButton2.click(function() {
		    $([document.documentElement, document.body]).animate({
		        scrollTop: $("#orderForm").offset().top
		    }, 600);
		});
}

/* Функция отвечающая за отправку формы на почту */
$(document).ready(function() {

	//E-mail Ajax Send
	$("#orderForm").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "../php/mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Принято! В ближайшее время мы с Вами свяжемся.");
			fbq('track', 'Lead');
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});


backToTop();
burgerMenu('.burger-menu');