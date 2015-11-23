function detectarScroll(){

	var scrollVertical = $(window).scrollTop();
	var scrollHorizontal = $(window).scrollTop();
	return(scrollVertical>300)?$('#toTop').fadeIn():$('#toTop').fadeOut();
};


function acordeon(){

	var azul 		= $('#azul h2');
			amarillo	= $('#amarillo h2');
			verde 		= $('#verde h2');
			rojo 		= $('#rojo h2');
			modelo 		= $('#por-modelo .color');

	// APAGO TODO LOS DEPAS
	modelo.fadeOut('fast');

	// TODOS ARRIBA
	$('.depar-modulo .acordeon .modelo .sub').slideUp('fast');
	
	$('.depar-modulo .acordeon .modelo h2').on('click', function(){

		// APAGO DE NUEVO TODO LOS DEPAS
		modelo.fadeOut('fast');

		// PONGO CLASE ACTIVO
		$('.depar-modulo .acordeon .modelo').removeClass('activo');

		// SUBO TODOS
		$('.depar-modulo .acordeon .modelo .sub').slideUp('fast');

		// BAJO EL HECHO CLICK
		var pancho = $(this);
		pancho.parent().addClass('activo');
		setTimeout(function() {
			pancho.parent().find('.sub').slideDown('swing');
		}, 200);

	});

	// PRENDO DEPAS POR CLICK COLOR
	azul.on('click', function(){
		setTimeout(function() {
			$('#modelo-azul').fadeIn('swing');
		}, 200);
	});
	amarillo.on('click', function(){
		setTimeout(function() {
			$('#modelo-amarillo').fadeIn('swing');
		}, 200);
	});
	verde.on('click', function(){
		setTimeout(function() {
			$('#modelo-verde').fadeIn('swing');
		}, 200);
	});
	rojo.on('click', function(){
		setTimeout(function() {
			$('#modelo-rojo').fadeIn('swing');
		}, 200);
	});
};

$(window).on('scroll', detectarScroll);
acordeon();