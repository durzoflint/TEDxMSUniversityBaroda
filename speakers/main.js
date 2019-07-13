var modal = document.getElementById('modal');

function openModal(card) {
	var photo = card.getElementsByClassName("speaker-image")[0].src;
	var name = card.getElementsByTagName("p")[0].innerText;
	var shortDescription = card.getElementsByClassName("short-description")[0].innerText;
	var description = card.getElementsByClassName("description")[0].innerText;

	modal.getElementsByTagName("img")[0].src = photo;
	modal.getElementsByClassName("name-inline")[0].innerText = name;
	modal.getElementsByClassName("short-description")[0].innerText = shortDescription;
	modal.getElementsByClassName("description")[0].innerText = description;
	
	modal.style.display = "block";
}

function closeModal() {
	modal.style.display = "none";
}

//To close the modal when clicked outside the modal
window.onclick = function(event) {
	if (event.target == modal) {
		closeModal();
	}
	
	var infoModal = document.getElementById('info-modal');
	if (event.target == infoModal) {
		closeInfoModal();
	}
}

//To display the partners in a horizontal slider
$(document).ready(function() {
	$("#light-slider-partners").lightSlider({
		item: 5,
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