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
	});
};

exports.default = externals;

},{}],2:[function(require,module,exports){
'use strict';

var _mobileMenu = require('./components/mobile-menu');

var _mobileMenu2 = _interopRequireDefault(_mobileMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$(document).ready(function () {
	_mobileMenu2.default.events();
	console.log('Document Ready');
	$('.carousel.carousel-slider').carousel({ fullWidth: true });
});

},{"./components/mobile-menu":1}]},{},[2])

//# sourceMappingURL=index.js.map
