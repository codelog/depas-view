function detectarScroll(){var o=$(window).scrollTop();$(window).scrollTop();return o>300?$("#toTop").fadeIn():$("#toTop").fadeOut()}function acordeon(){var o=$("#azul h2");amarillo=$("#amarillo h2"),verde=$("#verde h2"),rojo=$("#rojo h2"),modelo=$("#por-modelo .color"),modelo.fadeOut("fast"),$(".depar-modulo .acordeon .modelo .sub").slideUp("fast"),$(".depar-modulo .acordeon .modelo h2").on("click",function(){modelo.fadeOut("fast"),$(".depar-modulo .acordeon .modelo").removeClass("activo"),$(".depar-modulo .acordeon .modelo .sub").slideUp("fast");var o=$(this);o.parent().addClass("activo"),setTimeout(function(){o.parent().find(".sub").slideDown("swing")},200)}),o.on("click",function(){setTimeout(function(){$("#modelo-azul").fadeIn("swing")},200)}),amarillo.on("click",function(){setTimeout(function(){$("#modelo-amarillo").fadeIn("swing")},200)}),verde.on("click",function(){setTimeout(function(){$("#modelo-verde").fadeIn("swing")},200)}),rojo.on("click",function(){setTimeout(function(){$("#modelo-rojo").fadeIn("swing")},200)})}$(window).on("scroll",detectarScroll),acordeon();