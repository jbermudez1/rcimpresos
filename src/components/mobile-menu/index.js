let internals = {};
let externals = {};


externals.events = () => {	
	$('.tooglerMenu').click( ()=>{
		$('.mobil-menu-wrap').toggleClass('show-menu')
	})
}

export {externals as default}