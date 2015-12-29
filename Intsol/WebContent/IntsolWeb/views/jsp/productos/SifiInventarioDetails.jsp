<%@page import="java.util.ArrayList"%>
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scalable=1.0, maximun-scale=1.0, minimun-scale=1.0">
<link rel="stylesheet" href="/Intsol/IntsolWeb/views/bootstrap/css/bootstrap.min.css">
<link rel="stylesheet" href="/Intsol/IntsolWeb/views/IntsolCSS.css">
<link rel="shortcut icon" href="/Intsol/IntsolWeb/views/image/empresa.png">
<title>Sifi Inventario</title>
<script type="text/javascript">
window.onload = header;
function header(){
	setHeaderAndFooter("N","http://www.sifi.com.mx:8080/sifi_inventario/",4,1);
}
</script>
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-70075533-1', 'auto');
  ga('send', 'pageview');

</script>
<style type="text/css">
.tecnologias ul{
	margin:0;padding:0;
}
.tecnologias li{
	display:inline-block;width:90px; height:90px; padding: 0px;
}.bu{
	height: 15px;
	width: 15px;
}
h4{
	color : #E16A00;
}
.SifImage{
		width: 50%;
		height: 50%;
	}
</style>
</head>
<body>
<div class="container-fluid" id="todo">
		<!-- Header -->
		<div class="row navbar navbar-default navbar-fixed-top" style="padding: 0px; margin: 0px;" id="headIntsol"> </div>
		<!-- Espacio -->
		<div class="container-fluid" id="espacio1">
			<div class="col-md-12" style="height: auto;">
				<img alt="" src="/Intsol/IntsolWeb/views/image/jsp/productos/sifiInventario/SIFIINVENTARIOGRANDE.png" class="img-responsive show-lg show-md show-sm hidden-xs totalAncho">
				<img alt="" src="/Intsol/IntsolWeb/views/image/jsp/productos/sifiInventario/SIFIINVENTARIOPQA.png" class="hidden-lg hidden-md hidden-sm show-xs img-responsive total">
			</div>
		</div>
		
		<div class="container-fluid" id="espacio"> <div class="col-md-12" style="height: 2px;"></div></div>
		
		<%
		List<String> solucion= new ArrayList<String>();
		solucion.add("Expediente Electrónico por cada bien.");
		solucion.add("Optimización en las tareas diarias.");
		solucion.add("Facilita la toma de decisiones.");
		solucion.add("Generación Automática de Numero de Inventario.");
		solucion.add("Uso tanto en línea como localmente.");
		solucion.add("Información ordenada y detallada.");
		solucion.add("Captura el inventario Fácil y Rápido.");
		solucion.add("Confiablidad y Seguridad en su Información.");
	List<String> beneficios= new ArrayList<String>();
		beneficios.add("SIFI Inventario le permite capturar su inventario desde cualquier sitio.");
		beneficios.add("Expediente digital para cada elemento del inventario.");
		beneficios.add("Automáticamente genera código de barras para su mejor localización.");
		beneficios.add("Reporte de OSFEM, bienes muebles de alto y bajo costo.");
		beneficios.add("Tarjetas de resguardo en automático en PDF.");
		beneficios.add("Histórico de resguardo.");
		beneficios.add("Almacenamiento de fotos de los bienes.");
		beneficios.add("Generación del número de inventario en automático respetando los lineamientos de la \"Gaceta de registro y control de bienes municipales\"");
		beneficios.add("Clasificación automática de bien de alto o bajo costo");
%>
		
		<div class="container-fluid">
			<div class="col-sm-6 col-sm-push-3 col-md-4 col-md-push-4 col-lg-4 col-lg-push-4">
				<button class="btn btn-success totalAncho" onclick="goVentas()"><h3>¡Adquiéralo Ya!</h3></button>
			</div>
		</div>
		<!-- Contenido -->
		<div class="container-fluid" id="espacio"> <div class="col-md-12" style="height: 5px;"></div></div>
		<div class="container-fluid" id="espacio" style="background-color: #eeeeee"> <div class="col-md-12" style="height: 5px;"></div></div>		
		<div class="container-fluid">
			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-6">
				<h4>SIFI Inventario es la solución</h4>
				<%
					for(int i = 0; i<solucion.size(); i++){
						out.println("<div class=\"bullet\">");
						out.println("<p class=\"text-justify\" style=\"font-size:small;\"><img alt=\"\" src=\"/Intsol/IntsolWeb/views/image/bullet_point.png\" class=\"bu\"> "+solucion.get(i)+"</p>");
						out.println("</div>");
					}
				%>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-6">
				<h4>Beneficios</h4>
				<%
					for(int i = 0; i<beneficios.size(); i++){
						out.println("<div class=\"bullet\">");
						out.println("<p class=\"text-justify\" style=\"font-size:small;\"><img alt=\"\" src=\"/Intsol/IntsolWeb/views/image/bullet_point.png\" class=\"bu\"> "+beneficios.get(i)+"</p>");
						out.println("</div>");
					}
				%>
			</div>
		</div>
		<div class="container-fluid" id="espacio" style="background-color: #eeeeee"> <div class="col-md-12" style="height: 5px;"></div></div>
		<div class="container-fluid">
			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				<center><div class="tecnologias">
					<ul>
						<li><img alt="Control" src="/Intsol/IntsolWeb/views/image/jsp/productos/sifiInventario/control.png" class="total"></li>
						<li><img alt="Display" src="/Intsol/IntsolWeb/views/image/jsp/productos/sifiInventario/display.png" class="total"></li>
						<li><img alt="Organized" src="/Intsol/IntsolWeb/views/image/jsp/productos/sifiInventario/organized_inventory.png" class="total"></li>
						<li><img alt="Detail" src="/Intsol/IntsolWeb/views/image/jsp/productos/sifiInventario/detail.png" class="total"></li>
						<li><img alt="Condition" src="/Intsol/IntsolWeb/views/image/jsp/productos/sifiInventario/condition.png" class="total"></li>
						<li><img alt="Configurable" src="/Intsol/IntsolWeb/views/image/jsp/productos/sifiInventario/configurable.png" class="total"></li>
					</ul>
				</div></center> <br>
			</div>
		</div>
		<div class="container-fluid" id="espacio" style="background-color: #eeeeee"> <div class="col-md-12" style="height: 5px;"></div></div>
		<div class="container-fluid hidden-lg">
			<div class="col-sm-6 col-sm-push-3 col-md-4 col-md-push-4 col-lg-4 col-lg-push-4">
				<button class="btn btn-success totalAncho" onclick="goVentas()"><h3>¡Adquiéralo Ya!</h3></button>
			</div>
		</div>
</div>
<div class="container-fluid footer2" id="footerIntsol"> </div>
<script type="text/javascript" src="/Intsol/IntsolWeb/views/bootstrap/js/jquery.js"></script>
<script type="text/javascript" src="/Intsol/IntsolWeb/views/bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript" src="/Intsol/IntsolWeb/views/JS.js"></script>
</body>
</html>