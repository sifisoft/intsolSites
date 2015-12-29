var zoomLevel = document.getElementById('zoom-level');
var mainwindow = document.getElementById("maincontentwindow");
var mainbggray = document.getElementById("capa_tam");
window.onresize = function onresize() {
	console.info("Fixing zoom issue");
  var r = DetectZoom.ratios();
  mainwindow.style.top="0px";
  var zoom =(r.zoom * 100);
  if(zoom > 100 || zoom < 100){
  mainbggray.style.width="984px";
  }else if(zoom == 100){
	  mainbggray.style.width="100%";  
  }
  
  if(zoom==175 || zoom==200 || zoom==100 || zoom==75 || zoom==90){
	  $("#separator-tech").css("margin-top","0px");
	  $("#separator-total").css("margin-top","0px");
	  console.log("Sin el br o igual a 100, 175 o 200");
	  if (navigator.userAgent.indexOf('MSIE') == -1){
		  $("#capa_zoom").html('<p style="width: 298px;">SIFI Inventario cuenta con distintos reportes para llevar un registro ordenado de los activos con que cuenta en su empresa aprovechando la tecnolog&iacute;a actual.</p>');
	  }else{
		  $("#capa_zoom").html('<p style="width: 298px;">SIFI Inventario cuenta con distintos reportes para llevar un registro ordenado de los activos con que cuenta en su empresa aprovechando la tecnolog&iacute;a actual.</p><br />');
	  }
  }else if(zoom==33){
	  $("#separator-tech").css("margin-top","-15px");
	  $("#separator-total").css("margin-top","15px");
	  console.log("Menos 15px a el parrafo");
  }else if(zoom==25){
	  $("#separator-tech").css("margin-top","-32px");
	  $("#separator-total").css("margin-top","0px");
	  console.log("regresando 0px a el parrafo");
  }else{
	  $("#separator-tech").css("margin-top","0px");
	  $("#separator-total").css("margin-top","0px");
	  console.log("Con el br o es diferente a 175 o 200");
	  $("#capa_zoom").html('<p style="width: 298px;">SIFI Inventario cuenta con distintos reportes para llevar un registro ordenado de los activos con que cuenta en su empresa aprovechando la tecnolog&iacute;a actual.</p><br/>');
  }
 
	  
	  jQuery(mainwindow).css("top","0px;");
}
onresize();

if ('ontouchstart' in window) {
  window.onscroll = onresize;
}