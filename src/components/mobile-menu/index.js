let internals = {};
let externals = {};


externals.events = () => {	
	$('.tooglerMenu').click( ()=>{
		$('.mobil-menu-wrap').toggleClass('show-menu')
		if($('.mobil-menu-wrap').hasClass('show-menu')){
			$('body').css('overflow', 'hidden')
		} else {
			$('body').css('overflow', 'visible')

		}
	})
}

export {externals as default}