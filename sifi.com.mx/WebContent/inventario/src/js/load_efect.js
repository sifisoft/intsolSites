$(document).ready(function(){
	if (navigator.userAgent.indexOf('MSIE') == -1){
		 $("#jm_maincontent").css("display","none");
		 $("#jm_maincontent").fadeIn(1300);
		parent.adjust_size_iframe(true);
		setTimeout(function(){
		$("#mainWrapper").css({
			"background-image" : "url('../img/FONDO3.jpg')"
		});
		},1300);
	}
	else{
		//Internet explorer adjust size iframe
		 $("#jm_maincontent").css("display","none");
		 $("#jm_maincontent").fadeIn(1300);
		parent.adjust_size_iframe_ie(true);
		setTimeout(function(){
			$("#mainWrapper").css({
				"background-image" : "url('../img/FONDO3.jpg')"
			});
			},1300);
	}
	
});