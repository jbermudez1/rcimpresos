import mobilMenu from './components/mobile-menu'

$(window).scroll( (event)=>{
	let scroll = $(window).scrollTop()
	console.log(scroll)
})

$(document).ready(()=>{
	mobilMenu.events()
	console.log('Document Ready')
	$('.carousel.carousel-slider').carousel({fullWidth: true});

	let section = $('body').data('section')
	console.log(section)

	if(section == 'index'){
		initMap();
		$('#section-menu li').removeClass('selected')
		$('#inicio').addClass('selected')
	}
	if(section == 'nosotros'){
		$('#section-menu li').removeClass('selected')
		$('#nosotros').addClass('selected')
	}
	if(section == 'producto'){
		$('#section-menu li').removeClass('selected')
		$('#producto').addClass('selected')
	}
	if(section == 'servicios'){
		$('#section-menu li').removeClass('selected')
		$('#servicios').addClass('selected')
	}
	if(section == 'cotizador'){
		$('#section-menu li').removeClass('selected')
		$('#cotizador').addClass('selected')
	}
	if(section == 'contacto'){
		$('#section-menu li').removeClass('selected')
		$('#contacto').addClass('selected')
	}

	

})

function initMap () {
	var myLatLng = {lat: 24.8000966, lng: -107.3977691};

	console.log('iniciando el mapa')
	var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: myLatLng
  });

	var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: 'RC impresos'
        });
	marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
	var contentString = ' <h5> RC IMPRESOS </h5><p>José Aguilar Barraza No. 126 Pte.Col. Jorge Almada. C.P 80200 </p>'

	var infowindow = new google.maps.InfoWindow({
          content: contentString,
          maxWidth: 300
        });


}
