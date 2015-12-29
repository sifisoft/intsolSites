$(document).ready(function(){
	$("#maincontentwindow").css("width","985px");
	$("#back").click(function() {JoinMe.Content.updateMainContent("unete.html");});
		if (navigator.userAgent.indexOf('MSIE') == -1){
			parent.adjust_size_iframe();
			setTimeout(function(){
			$("#mainWrapper").css({
				"background-image" : "url('../img/FONDO3.jpg')"
			});
			},1300);
		}
		else{
			parent.adjust_size_iframe_ie();
			setTimeout(function(){
				$("#mainWrapper").css({
					"background-image" : "url('../img/FONDO3.jpg')"
				});
				},1300);
		}
});