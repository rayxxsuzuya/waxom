
let dotsItem = document.querySelectorAll('.header-dots-item'),
	dotsBlock = document.querySelectorAll('.header-dots-block')[0],
	slides = document.querySelectorAll('.header-slides');
prevBtn = document.querySelector('.header-left-btn'),
	nextBtn = document.querySelector('.header-right-btn'),
	slideIndex = 1;

 showSlides(slideIndex);

function showSlides(n) {
	if (n < 1) {
		slideIndex = slides.length;
	} else if (n > slides.length) {
		slideIndex = 1;
	}

	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}
	for (let i = 0; i < dotsItem.length; i++) {
		dotsItem[i].classList.remove('active');
	}
	slides[slideIndex - 1].style.display = 'block';
	dotsItem[slideIndex - 1].classList.add('active');
}

function plusSlides(n) {
	showSlides(slideIndex += n)
}

function currentSlide(n) {
	showSlides(slideIndex + n);
}

prevBtn.onclick = function () {
	plusSlides(-1);
}

nextBtn.onclick = function () {
	plusSlides(1);
}

dotsBlock.onclick = function (e) {
	for (let i = 0; i < dots.length + 1; i++) {
		if (e.target.classList.contains('dots-item') && e.target == dots[i - 1]) {
			currentSlide(i)
		}
	}
}