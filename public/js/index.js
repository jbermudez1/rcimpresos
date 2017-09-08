(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var internals = {};
var externals = {};

externals.events = function () {
	$('.tooglerMenu').click(function () {
		$('.mobil-menu-wrap').toggleClass('show-menu');
		if ($('.mobil-menu-wrap').hasClass('show-menu')) {
			$('body').css('overflow', 'hidden');
		} else {
			$('body').css('overflow', 'visible');
		}
	});
};

exports.default = externals;

},{}],2:[function(require,module,exports){
'use strict';

var _mobileMenu = require('./components/mobile-menu');

var _mobileMenu2 = _interopRequireDefault(_mobileMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$(window).scroll(function (event) {
	var scroll = $(window).scrollTop();
	console.log(scroll);
});

$(document).ready(function () {
	$('.fullView').hide();
	setProduct();
	_mobileMenu2.default.events();
	console.log('Document Ready');

	$('.carousel.carousel-slider').carousel({
		fullWidth: true,
		interval: 100
	});

	var section = $('body').data('section');
	console.log(section);

	if (section == 'index') {
		initMap();
		$('#section-menu li').removeClass('selected');
		$('#inicio').addClass('selected');
	}
	if (section == 'nosotros') {
		$('#section-menu li').removeClass('selected');
		$('#nosotros').addClass('selected');
	}
	if (section == 'productos') {
		// $('#section-menu li').removeClass('selected')
		// $('#producto').addClass('selected')
		selectMenuItem();
	}
	if (section == 'servicios') {
		$('#section-menu li').removeClass('selected');
		$('#servicios').addClass('selected');
	}
	if (section == 'cotizador') {
		$('#section-menu li').removeClass('selected');
		$('#cotizador').addClass('selected');
	}
	if (section == 'contacto') {
		$('#section-menu li').removeClass('selected');
		$('#contacto').addClass('selected');
	}
});

function selectMenuItem() {
	var item = $('body').data('producto');
	console.log(item);

	$('a[data-item="' + item + '"]').addClass('active');
}

function setProduct() {
	console.log('init click product');

	$('.img-gallery div img').click(function () {
		var producto = $(this).attr('src');
		$('.fullView-container .imagen').css('background-image', "url(' " + producto + "')");
		console.log(producto);
		$('.fullView').fadeIn();
	});
	// cliose
	$('.closeModal, .fullView').click(function () {
		$('.fullView').fadeOut(100, function () {
			$('.fullView-container .imagen').css('background-image', 'none');
		});
	});
}

function initMap() {
	var myLatLng = { lat: 24.8000966, lng: -107.3977691 };

	console.log('iniciando el mapa');
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 15,
		center: myLatLng
	});

	var marker = new google.maps.Marker({
		position: myLatLng,
		map: map,
		title: 'RC impresos'
	});
	marker.addListener('click', function () {
		infowindow.open(map, marker);
	});
	var contentString = ' <h5> RC IMPRESOS </h5><p>José Aguilar Barraza No. 126 Pte.Col. Jorge Almada. C.P 80200 </p>';

	var infowindow = new google.maps.InfoWindow({
		content: contentString,
		maxWidth: 300
	});
}

},{"./components/mobile-menu":1}]},{},[2])

//# sourceMappingURL=index.js.map
