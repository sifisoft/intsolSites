cfct = window.CFCT || {url: '/'};
 

var letras="ABCDEFGHIJQLMN—OPQRSTUVWXYZ";


function tiene_minusculas(texto){
var maycon=0;
   for(i=0; i<texto.length; i++){
      if (letras.indexOf(texto.charAt(i),0)!=-1){
	  if (maycon == 1){return texto.substr(0,i);}
         maycon++;
      }
   }
   return texto;
} 

cfct.loading = function() {
	return '<div class="loading"><span>Cargando...</span></div>';
};

cfct.ajax_post_content = function() {
	jQuery('body:not(.search-results) .entry-excerpt.post .entry-header .entry-title a, body:not(.search-results) .entry-excerpt.cfct-news .entry-header .entry-title a').unbind().click(function() {
		var postID = jQuery(this).parents('.entry.entry-excerpt').attr('id').replace('post-excerpt-', '');
		var $excerpt = jQuery('#post-excerpt-' + postID);
		var $target = jQuery('#post-target-' + postID);
		if ($target.length == 0) {
			$target = $excerpt.after('<div class="ajax-loaded" id="post-target-' + postID + '"/>');
			$target = jQuery('#post-target-' + postID);
		};
		
		$excerpt.hide();
		$target.html(cfct.loading()).show().load(cfct.url + 'index.php?cfct_action=post_content&id=' + postID, function() {
			jQuery('#post_close_' + postID + ' a').click(function() {
				$target.slideUp(function() {
					$excerpt.show();
				});
				return false;
			});
			jQuery(this).hide().slideDown();
		});
		return false;
	});
};

jQuery(function($){
	$('.nav ul li:has(ul)').addClass('has-ul');
	cfct.ajax_post_content();
});


function dumpUrl(id){
	if(id==1){
	location.href="pages/nosotros";
	}

}
		window.addEvent('domready',function(){
		document.id('micuenta').addEvent('click',function() {
				
				light = new LightFace.IFrame(
				{ 
				height:400, 
				width:800, 
				url: 'http://www.sifi.com.mx:8080/sifi_receptoria', 
				title: 'SIFI Receptoria en l&iacute;nea' }
				).addButton('Ventana nueva', function() { 
				window.open("http://www.sifi.com.mx:8080/sifi_receptoria","SIFI Receptoria en l√≠nea");
				light.close(); 
				},true).open();
				
				light.addButton('Cerrar', function() { light.close(); },"green").open()
				});
		});
			
//script para el menu
			jQuery(document).ready(function() {
			setTimeout("jQuery('#correo').fadeIn(800);",1500)
			setTimeout("jQuery('#micuenta').fadeIn(800);",1500)
			});						

	
function redirectRequest(id)
{
	GuardarCookie('requested',id,30000);
	document.location.href="../sistema";
}

function redirectRequest2(id)
{
	GuardarCookie('requested',id,30000);
	document.location.href="pages/sistema";
}

jQuery(document).ready(function() {

	/* 	1st example	*/

	/// wrap inner content of each anchor with first layer and append background layer
	jQuery("#menu li a").wrapInner( '<span class="out"></span>' ).append( '<span class="bg"></span>' );

	// loop each anchor and add copy of text content
	jQuery("#menu li a").each(function() {
		jQuery( '<span class="over">' +  jQuery(this).text() + '</span>' ).appendTo( this );
	});

	jQuery("#menu li a").hover(function() {
		// this function is fired when the mouse is moved over
		jQuery(".out",	this).stop().animate({'top':	'45px'},	250); // move down - hide
		jQuery(".over",	this).stop().animate({'top':	'0px'},		250); // move down - show
		jQuery(".bg",	this).stop().animate({'top':	'0px'},		120); // move down - show

	}, function() {
		// this function is fired when the mouse is moved off
		jQuery(".out",	this).stop().animate({'top':	'0px'},		250); // move up - show
		jQuery(".over",	this).stop().animate({'top':	'-45px'},	250); // move up - hide
		jQuery(".bg",	this).stop().animate({'top':	'-45px'},	120); // move up - hide
	});
			

	/*	2nd example	*/
	
	jQuery("#menu2 li a").wrapInner( '<span class="out"></span>' );
	
	jQuery("#menu2 li a").each(function() {
		jQuery( '<span class="over">' +  jQuery(this).text() + '</span>' ).appendTo( this );
	});

	jQuery("#menu2 li a").hover(function() {
		jQuery(".out",	this).stop().animate({'top':	'45px'},	200); // move down - hide
		jQuery(".over",	this).stop().animate({'top':	'0px'},		200); // move down - show

	}, function() {
		jQuery(".out",	this).stop().animate({'top':	'0px'},		200); // move up - show
		jQuery(".over",	this).stop().animate({'top':	'-45px'},	200); // move up - hide
	});

});