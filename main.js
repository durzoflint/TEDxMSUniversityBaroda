//To display the countdown timer
var countDownDate = new Date("Sep 1, 2019 15:37:25").getTime();
var x = setInterval(function() {
	var now = new Date().getTime();
	var distance = countDownDate - now;

	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	document.getElementById("countdown").innerHTML = days + " Days " + hours + " Hrs " + minutes + " Mins " + seconds + " seconds left";

	if (distance < 0) {
		clearInterval(x);
		document.getElementById("countdown").innerHTML = "";
	}
}, 1000);

//To display the speakers in a horizontal slider
$(document).ready(function() {
	$("#light-slider-speakers").lightSlider({
		item: 3,
		autoWidth: false,
		slideMove: 1, // slidemove will be 1 if loop is true
		slideMargin: 10,

		addClass: '',
		mode: "slide",
		useCSS: true,
		cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
		easing: 'linear', //'for jquery animation',////

		speed: 400, //ms'
		auto: false,
		pauseOnHover: false,
		loop: false,
		slideEndAnimation: true,
		pause: 2000,

		keyPress: false,
		controls: true,
		prevHtml: '',
		nextHtml: '',

		rtl:false,
		adaptiveHeight:false,

		vertical:false,
		verticalHeight:500,
		vThumbWidth:100,

		thumbItem:10,
		pager: true,
		gallery: false,
		galleryMargin: 5,
		thumbMargin: 5,
		currentPagerPosition: 'middle',

		enableTouch:true,
		enableDrag:true,
		freeMove:true,
		swipeThreshold: 40,

		responsive : [],

		onBeforeStart: function (el) {},
		onSliderLoad: function (el) {},
		onBeforeSlide: function (el) {},
		onAfterSlide: function (el) {},
		onBeforeNextSlide: function (el) {},
		onBeforePrevSlide: function (el) {}
	});
});

//To display the past events in a horizontal slider
$(document).ready(function() {
	$("#light-slider-past-events").lightSlider({
		item: 4,
		autoWidth: false,
		slideMove: 1, // slidemove will be 1 if loop is true
		slideMargin: 10,

		addClass: '',
		mode: "slide",
		useCSS: true,
		cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
		easing: 'linear', //'for jquery animation',////

		speed: 400, //ms'
		auto: false,
		pauseOnHover: false,
		loop: false,
		slideEndAnimation: true,
		pause: 2000,

		keyPress: false,
		controls: true,
		prevHtml: '',
		nextHtml: '',

		rtl:false,
		adaptiveHeight:false,

		vertical:false,
		verticalHeight:500,
		vThumbWidth:100,

		thumbItem:10,
		pager: true,
		gallery: false,
		galleryMargin: 5,
		thumbMargin: 5,
		currentPagerPosition: 'middle',

		enableTouch:true,
		enableDrag:true,
		freeMove:true,
		swipeThreshold: 40,

		responsive : [],

		onBeforeStart: function (el) {},
		onSliderLoad: function (el) {},
		onBeforeSlide: function (el) {},
		onAfterSlide: function (el) {},
		onBeforeNextSlide: function (el) {},
		onBeforePrevSlide: function (el) {}
	});
});

//To display the past events in a horizontal slider
$(document).ready(function() {
	$("#light-slider-testimonials").lightSlider({
		item: 1,
		autoWidth: false,
		slideMove: 1, // slidemove will be 1 if loop is true
		slideMargin: 10,

		addClass: '',
		mode: "slide",
		useCSS: true,
		cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
		easing: 'linear', //'for jquery animation',////

		speed: 400, //ms'
		auto: false,
		pauseOnHover: false,
		loop: false,
		slideEndAnimation: true,
		pause: 2000,

		keyPress: false,
		controls: true,
		prevHtml: '',
		nextHtml: '',

		rtl:false,
		adaptiveHeight:false,

		vertical:false,
		verticalHeight:500,
		vThumbWidth:100,

		thumbItem:10,
		pager: true,
		gallery: false,
		galleryMargin: 5,
		thumbMargin: 5,
		currentPagerPosition: 'middle',

		enableTouch:true,
		enableDrag:true,
		freeMove:true,
		swipeThreshold: 40,

		responsive : [],

		onBeforeStart: function (el) {},
		onSliderLoad: function (el) {},
		onBeforeSlide: function (el) {},
		onAfterSlide: function (el) {},
		onBeforeNextSlide: function (el) {},
		onBeforePrevSlide: function (el) {}
	});
});