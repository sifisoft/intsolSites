function refreshPage(Selector){
	$(Selector).click(function() {
		location.reload();
    });
}

function searchText(Selector){
	$(Selector).val("Buscar...");
	$(Selector).focus(function() {
		if (this.value == 'Buscar...') {
			this.value = '';
		}
    }).blur(function() {
		if (this.value == '') {
			this.value = 'Buscar...';
		}
    });
}

$(document).ready(function () {	

	/* AGREGA FUNCIÓN DE REFRESH AL LOGO DE LA BARRA DE HERRAMIENTAS*/
	refreshPage("#Logo_header");

	/* AGREGA EL TEXTO DE "BUSCAR" A LA CAJA DE BÚSQUEDA */
	searchText("#search>form>input[type='text']");

	/* AGREGA EL PLUGIN DE BARRA DE MENÚ */
	$("#menu").menubar({		
		menuIcon: true,
        buttons: true
	});
	$( "#user>button" ).button({            
    	icons: {
            secondary: "ui-icon-triangle-1-s"
		}
	});

	$(window).resize(function() { $('#container').height( $(document).height()-78 ); });
 	$('#container').height( $(document).height()-78 );

	var myLayout = $('#container').layout({

		//	reference only - these options are NOT required because 'true' is the default
			closable:					true	// pane can open & close
		,	resizable:					true	// when open, pane can be resized 
		,	slidable:					true	// when closed, pane can 'slide' open over other panes - closes on mouse-out
		,	livePaneResizing:			true

		//	some resizing/toggling settings
		,	north__slidable:			false	// OVERRIDE the pane-default of 'slidable=true'
		,	north__togglerLength_closed: '100%'	// toggle-button is full-width of resizer-bar
		,	north__spacing_closed:		20		// big resizer-bar when open (zero height)
		,	south__resizable:			false	// OVERRIDE the pane-default of 'resizable=true'
		,	south__spacing_open:		0		// no resizer-bar when open (zero height)
		,	south__spacing_closed:		20		// big resizer-bar when open (zero height)

		//	some pane-size settings
		,	west__minSize:				300
		,	east__size:					300
		,	east__minSize:				200
		,	east__maxSize:				.5 // 50% of layout width
		,	center__minWidth:			100

		//	some pane animation settings
		,	west__animatePaneSizing:	false
		,	west__fxSpeed_size:			"fast"	// 'fast' animation when resizing west-pane
		,	west__fxSpeed_open:			0	// 1-second animation when opening west-pane
		,	west__fxSettings_open:		{ easing: "easeOutBounce" } // 'bounce' effect when opening
		,	west__fxName_close:			"none"	// NO animation when closing west-pane

		//	enable showOverflow on west-pane so CSS popups will overlap north pane
		,	west__showOverflowOnHover:	true

		//	enable state management
		,	stateManagement__enabled:	true // automatic cookie load & save enabled by default

		,	showDebugMessages:			true // log and/or display messages from debugging & testing code
	});

	var tabs = $( "#tabs" ).tabs();

});