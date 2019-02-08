var slider = {

	slideNum: 0, // номер отображаемого слайда

	$slides: document.querySelector('.slider-data').children, // коллекция слайдов

	$sliderImg: document.querySelector('.slider-img'), // контейнер для отображения слайдов

	// инициализация слайдера
	init: function() {
		var imgSrc = this.$slides[0].getAttribute('src');
		this.$sliderImg.setAttribute('src', imgSrc);		
	},

	// пролистываем кадр вправо
	slideRight: function() {
		(this.slideNum === this.$slides.length - 1) ? this.slideNum = 0 : this.slideNum++;
		var imgSrc = this.$slides[this.slideNum].getAttribute('src');
		this.$sliderImg.setAttribute('src', imgSrc);
	},

	// пролистываем кадр влево
	slideLeft: function() {
		(this.slideNum === 0) ? this.slideNum = this.$slides.length - 1 : this.slideNum--;
		var imgSrc = this.$slides[this.slideNum].getAttribute('src');
		this.$sliderImg.setAttribute('src', imgSrc);
	}
}

// подклчюаем обработчики к управляющим элементам
var $prevArrow = document.querySelector('.prev-arrow');
var $nextArrow = document.querySelector('.next-arrow');

$prevArrow.addEventListener('click', function() {
	slider.slideLeft();
});

$nextArrow.addEventListener('click', function()  {
	slider.slideRight();
});

// запуск автоповтора при загрузке окна
window.onload = function() {
	slider.init();
	setInterval(function() {
		slider.slideRight();
	}, 3000);
};