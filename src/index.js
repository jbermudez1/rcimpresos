import mobilMenu from './components/mobile-menu'

$(document).ready(()=>{
	mobilMenu.events()
	console.log('Document Ready')
	$('.carousel.carousel-slider').carousel({fullWidth: true});

})


$(window).scroll( (event)=>{
	let scroll = $(window).scrollTop()
	console.log(scroll)
	// if(scroll >150) {
	// 	$('.haderLarge .container .top').addClass('hide')
	// 	$('.haderLarge .container .bottom').addClass('statis')
	// } else {
	// 	$('.haderLarge .container .top').removeClass('hide')
	// 	$('.haderLarge .container .bottom').removeClass('statis')
	// }
})
