import mobilMenu from './components/mobile-menu'

$(document).ready(()=>{
	mobilMenu.events()
	console.log('Document Ready')
	$('.carousel.carousel-slider').carousel({fullWidth: true});

})


