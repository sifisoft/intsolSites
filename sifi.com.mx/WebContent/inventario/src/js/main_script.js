$(document).ready(function() {

		/* 	1st example	*/

		/// wrap inner content of each anchor with first layer and append background layer
		$("#menu li a").wrapInner( '<span class="out"></span>' ).append( '<span class="bg"></span>' );

		// loop each anchor and add copy of text content
		$("#menu li a").each(function() {
			$( '<span class="over">' +  $(this).text() + '</span>' ).appendTo( this );
		});

		$("#menu li a").hover(function() {
			// this function is fired when the mouse is moved over
			$(".out",	this).stop().animate({'top':	'45px'},	250); // move down - hide
			$(".over",	this).stop().animate({'top':	'0px'},		250); // move down - show
			$(".bg",	this).stop().animate({'top':	'0px'},		120); // move down - show

		}, function() {
			// this function is fired when the mouse is moved off
			$(".out",	this).stop().animate({'top':	'0px'},		250); // move up - show
			$(".over",	this).stop().animate({'top':	'-45px'},	250); // move up - hide
			$(".bg",	this).stop().animate({'top':	'-45px'},	120); // move up - hide
		});
				

		/*	2nd example	*/
		
		$("#menu2 li a").wrapInner( '<span class="out"></span>' );
		
		$("#menu2 li a").each(function() {
			$( '<span class="over">' +  $(this).text() + '</span>' ).appendTo( this );
		});

		$("#menu2 li a").hover(function() {
			$(".out",	this).stop().animate({'top':	'45px'},	200); // move down - hide
			$(".over",	this).stop().animate({'top':	'0px'},		200); // move down - show

		}, function() {
			$(".out",	this).stop().animate({'top':	'0px'},		200); // move up - show
			$(".over",	this).stop().animate({'top':	'-45px'},	200); // move up - hide
		});

});



var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-23724901-4']);
_gaq.push(['_trackPageview']);
(function() {
   var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
   ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
   var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
 })();
//Function to move scroll up and down
$.easing.elasout = function(x, t, b, c, d) {
	var s=1.70158;var p=0;var a=c;
	if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
	if (a < Math.abs(c)) { a=c; var s=p/4; }
	else var s = p/(2*Math.PI) * Math.asin (c/a);
	return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
};

function load_content(res,ini) {
	 var iframe = document.getElementsByTagName('iframe')[0];
     var doc = iframe.contentWindow.document;
     
     if(ini){
	 $(doc.getElementById("loader")).fadeTo(500,0.1,function(){
		 window.parent.frames[0].JoinMe.Content.updateMainContent(res);     			 
	 });
     }else{
    	 window.parent.frames[0].JoinMe.Content.updateMainContent(res);
     }

     
	    }
function adjust_size_iframe(anim) {
	    var iframe = document.getElementsByTagName('iframe')[0];
	    var doc = iframe.contentWindow.document;
	    if(doc.getElementById("sizemain")!=null){
	    $(doc.getElementById("mainWrapper")).css("height",doc.getElementById("sizemain").value);
	    }
	    //alert(doc.getElementById("sizemain"));
	    sizeof_content=doc.getElementById("sizepage").value;
	    //alert(sizeof_content);
	    $.scrollTo("#cwrp",700,{"onAfter" : update_size_frame(sizeof_content,anim)});
	   setTimeout(function() {
		   
	   },550);
	    }

function adjust_size_iframe_ie(anim) {
    var iframe = document.getElementsByTagName('iframe')[0]
    var doc = iframe.contentWindow.document
    if(doc.getElementById("sizemainie")!=null){
	    $(doc.getElementById("mainWrapper")).css("height",doc.getElementById("sizemainie").value);;
	    }
    $(doc.getElementById("maincontentwindow")).css("top","0px");
    //alert(doc.getElementById("sizemain"));
    sizeof_content=doc.getElementById("sizepageie").value;
    //alert(sizeof_content);
    $.scrollTo("#cwrp",700,{"onAfter" : update_size_frame(sizeof_content,anim)});
	 $(doc.getElementById("maincontentwindow")).css("top","0px");
    }
function update_size_frame(tsize,anim){
	 var iframe = document.getElementsByTagName('iframe')[0];
     var doc = iframe.contentWindow.document;
	  tsize = parseInt(tsize);
	 $("#main_frame").css("display","none");
	 new_size=tsize+17;
	 $("#main_frame").css("height",new_size);
	 if(anim){
	 $("#main_frame").animate({
		 width: "toggle",
	 },500,function(){
		 setTimeout(function() {
			 $(doc.getElementById("maincontentwindow")).css({"top" : "0px"}); 
		 },100);
	 });
	 }else{
		 $("#main_frame").css("display","block");
		$(doc.getElementById("maincontentwindow")).css({"top" : "0px"}); 
		$("#main_frame").css("height",new_size-17);
		return;
	 }
	 setTimeout(function(){
		 $("#main_frame").css("height",new_size-17);
	 },500);

}



$(document).ready(function() {
	var lastunload;
	var ahor = new Date();
	var ptl = CojerCookie("ptl");
	var pages = new Array("bienvenido.html","conocelo.html","content.html","empresa.html","inventario.html","unete.html","utilidad.html");
	var f_v_url=false;
	var dif_loading;
	
	//Test if user has left the page to reset the cookie to "bienvenido.html"
	lastunload=CojerCookie("lastunload");
	dif_loading=ahor.getSeconds()-lastunload;
	
	if(dif_loading > 0){
		if(dif_loading>5){
			ptl = "bienvenido.html";
			GuardarCookie("ptl","bienvenido.html",Caduca(31));
			//Clear History if user has not updated the page in 5 seconds
			BorrarCookie("historial");
	}
	}else{
		if(dif_loading<-5){
			ptl = "bienvenido.html";
			GuardarCookie("ptl","bienvenido.html",Caduca(31));
			//Clear History if user has not updated the page in 5 seconds
			BorrarCookie("historial");
			}
	}
	
	//Test if the cookie has a valid value to load one page
	for (var item in pages)
    {
        if(ptl == pages[item]){
        	f_v_url=true;	
        }
    }
	if(f_v_url==false){
		ptl="bienvenido.html";
	}
	
	if(ptl==null){
		GuardarCookie("ptl","bienvenido.html",Caduca(31));
	}else{
		//test if the url is a valid page to load
		
	}
	
	if (navigator.userAgent.indexOf('MSIE') == -1){
		
	}
	else{
		$("#main_frame").css("height","109px");
	}
	 setTimeout(function() {
			load_content(ptl,true);	
	 },1500);
	 
	 		//show back arrow
	 		
	 		//settings to scroll function
		  var $win = $(window);
		  // definir mediente $pos la altura en píxeles desde el borde superior de la ventana del navegador y el elemento
		  var $pos = 80;
		  $win.scroll(function () {
		     if ($win.scrollTop() < $pos){        
		    	$("#scroll-up").fadeOut(200);
		     }else {
		       	$("#scroll-up").fadeIn(200);
		     }
		   });
		  	$("#scroll-up").click(function(){$.scrollTo('#inicio',400);});
	    	$("#scroll-up").mouseover(function(){$("#scroll-up").fadeTo('fast',0.4);});
	    	$("#scroll-up").mouseout(function(){$("#scroll-up").fadeTo('fast',0.5);});
	    	$("#head_link").click(function(){Inventario.Historial.addHistory(CojerCookie("ptl"));GuardarCookie("ptl","bienvenido.html",Caduca(31));});
		    $("#go-back").click(function(){
		    	Inventario.Historial.go_back();
		    });
	    	//Function to navigation links of the menu
		    $("#menu ul li a").click(function(){if(this.id=="" || this.id == null)return;if(CojerCookie("ptl")==this.id+".html"){return;}Inventario.Historial.addHistory(CojerCookie("ptl"));GuardarCookie("ptl",this.id+".html",Caduca(31));load_content(this.id + ".html",false);});
		    setTimeout(setImageEvent,3000);
		    
		    //Create built-in History
		    Inventario.Historial.createHistory();

});
window.onbeforeunload = Call;
function Call() {
	var ahora = new Date();
    GuardarCookie("lastunload",ahora.getSeconds(),Caduca(31));
    GuardarCookie("ch","0");
    GuardarCookie("showcarac","0");
}
function getIframeElement(elem){
	 var iframe = document.getElementsByTagName('iframe')[0];
     var doc = iframe.contentWindow.document;
     return (doc.getElementById(elem));
}

function setImageEvent(){
	  var playmovie = getIframeElement("playmovie");
	  //VIDEO
	  if(playmovie != null){
	  $(playmovie).mouseover(function(){$(playmovie).css("display","none");$(playmovie).attr('src',"../img/video.png");$(playmovie).fadeIn(150);});
	  $(playmovie).mouseout(function(){$(playmovie).attr('src',"../img/video_over.png");});
	  $(playmovie).click(function(){window.open((navigator.userAgent.indexOf('MSIE') == -1) ? "inventariovideo" : "src/html/inventariovideo/","mywindow","menubar=1,resizable=no,menubar=no,width=750,height=665,location=no");$(playmovie).attr('src',"../img/video.png");});
	  }

}