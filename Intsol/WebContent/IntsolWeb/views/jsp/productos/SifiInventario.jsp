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
	<div class="container-fluid" id="espacio"> <div class="col-md-12" style="height: 2px;"></div></div> <!-- ESPACIO -->
	<div class="container-fluid">
			<div class="col-sm-6 col-sm-push-3 col-md-4 col-md-push-4 col-lg-4 col-lg-push-4">
				<button class="btn btn-success totalAncho" onclick="goVentas()"><h3>�Adqui�ralo Ya!</h3></button>
			</div>
	</div>
		<!-- Contenido -->
		<div class="container-fluid">
				<div class="col-md-6 col-lg-6">
					<h4 class="text-uppercase">Mayor control en sus art�culos</h4>
					<p class="text-justify parrafo">Con SIFI Inventario usted podr� encontrar un listado completo de sus art�culos, generar autom�ticamente un n�mero de inventario y un c�digo de barras para identificarlos, as� como tambi�n consultar los datos de cada uno, hacer b�squedas r�pidas e intuitivas ya sea por el nombre o n�mero de art�culo y m�s.</p>
				</div>
				<div class="col-md-6 col-lg-6"><center><img alt="" src="/Intsol/IntsolWeb/views/image/jsp/productos/sifiInventario/Inventario1.png" class="SifImage img-responsive"></center></div>
				<div class="clearfix"></div>
				<div class="col-lg-12 gris">
				<div class="col-md-6 col-md-push-6  col-lg-6 col-lg-push-6">
					<h4 class="text-uppercase">Mejore el estado de sus activos</h4>
					<p class="text-justify parrafo">Gracias a la calidad de informaci�n que le ofrece SIFI Inventario para guardar registro de sus art�culos es posible ver el estado en el que se encuentran y poder tomar decisiones en base a sus reportes, ya sea, reemplazarlo, moverlo a otro departamento o cualquier otra acci�n que usted desee.</p>
				</div>
				<div class="col-md-6 col-md-pull-6  col-lg-6 col-lg-pull-6"><center><img alt="" src="/Intsol/IntsolWeb/views/image/jsp/productos/sifiInventario/Inventario2.png" class="SifImage img-responsive"></center></div>
				<div class="clearfix"></div>
				</div>
				<div class="col-md-6 col-lg-6">
					<h4 class="text-uppercase">Rapidez y Eficiencia</h4>
					<p class="text-justify parrafo">Consulte la informaci�n de su inventario en cualquier momento y lugar, gracias a la seguridad y facilidad que le brinda SIFI Inventario.</p>
				</div>
				<div class="col-md-6 col-lg-6"><center><img alt="" src="/Intsol/IntsolWeb/views/image/jsp/productos/sifiInventario/Inventario3.png" class="SifImage img-responsive"></center></div>
				<div class="clearfix"></div>
				<div class="col-lg-12 gris">
				<div class="col-md-6 col-md-push-6  col-lg-6 col-lg-push-6">
					<h4 class="text-uppercase">Genere Reportes</h4>
					<p class="text-justify parrafo">Tenga la informaci�n que necesita en tiempo y forma con un sencillo proceso. SIFI Inventario cuenta con m�ltiples reportes parametrizables capaces de entregar solo la informaci�n que usted necesita al momento.</p>
				</div>
				<div class="col-md-6 col-md-pull-6  col-lg-6 col-lg-pull-6"><center><img alt="" src="/Intsol/IntsolWeb/views/image/jsp/productos/sifiInventario/Inventario4.png" class="SifImage img-responsive"></center></div>
				<div class="clearfix"></div>
				</div>
				<div class="col-md-6 col-lg-6">
					<h4 class="text-uppercase">Basado en tecnolog�a WEB/INTRANET</h4>
					<p class="text-justify parrafo">�selo donde quiera, disponible 24/7, ahorre en servidores y Bases de Datos, nunca pierda informaci�n, alto nivel de seguridad y rendimiento.</p>
				</div>
				<div class="col-md-6 col-lg-6"><center><img alt="" src="/Intsol/IntsolWeb/views/image/jsp/productos/sifiInventario/Inventario5.png" class="SifImage img-responsive"></center></div>
				<div class="clearfix"></div>
					<div class="col-lg-12">
					<center>
						<button class="btn btn-info" onclick="window.location.assign('/Intsol/IntsolWeb/views/jsp/productos/SifiInventarioDetails.jsp');">Ver Detalles�</button>
						<button class="btn btn-primary" onclick="goVentas()">Adquieralo</button>
					</center>
				</div>
		</div>
	</div>
	<div class="container-fluid footer2" id="footerIntsol"></div>
<script type="text/javascript" src="/Intsol/IntsolWeb/views/bootstrap/js/jquery.js"></script>
<script type="text/javascript" src="/Intsol/IntsolWeb/views/bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript" src="/Intsol/IntsolWeb/views/JS.js"></script>
</body>
</html>