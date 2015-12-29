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
<title>Sifi Finanzas</title>
<script type="text/javascript">
window.onload = header;
function header(){
	setHeaderAndFooter("S","https://www.sifi.com.mx:8443/ControlFacturas/",5,1);
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
	color : #5EA22C;
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
				<img alt="" src="/Intsol/IntsolWeb/views/image/jsp/productos/sifiFacturas/SIFIFINANZASGRANDE.png" class="img-responsive show-lg show-md show-sm hidden-xs totalAncho">
				<img alt="" src="/Intsol/IntsolWeb/views/image/jsp/productos/sifiFacturas/SIFIFINANZASPQA.png" class="hidden-lg hidden-md hidden-sm show-xs img-responsive total">
			</div>
		</div>
	<div class="container-fluid" id="espacio"> <div class="col-md-12" style="height: 2px;"></div></div> <!-- ESPACIO -->
	<div class="container-fluid">
			<div class="col-sm-6 col-sm-push-3 col-md-4 col-md-push-4 col-lg-4 col-lg-push-4">
				<button class="btn btn-info totalAncho" onclick="goVentas()"><h3>¡Adquiéralo Ya!</h3></button>
			</div>
	</div>
		<!-- Contenido -->
		<div class="container-fluid">
				<div class="col-md-6 col-lg-6">
					<h4 class="text-uppercase">Maneje con facilidad sus cuentas por pagar y cobrar</h4>
					<p class="text-justify parrafo">Nunca había sido más sencillo y eficiente el control de sus facturas que ahora con SIFI Finanzas. Lleve el control de sus emisores y receptores, de sus facturas de salida y canceladas, registre los pagos realizados ya sea por transferencia o cheque, timbre o cancele facturas sin necesidad de algún otro software.</p>
				</div>
				<div class="col-md-6 col-lg-6"><center><img alt="" src="/Intsol/IntsolWeb/views/image/jsp/productos/sifiFacturas/Finanzas2.png" class="SifImage img-responsive"></center></div>
				<div class="clearfix"></div>
				<div class="col-lg-12 gris">
				<div class="col-md-6 col-md-push-6  col-lg-6 col-lg-push-6">
					<h4 class="text-uppercase">Carga automática de cuentas por pagar</h4>
					<p class="text-justify parrafo">Deja que sus proveedores envíen y descarguen sus facturas a SIFI Finanzas a través de una cuenta de correo electrónico determinada (facturas@suempresa.com) o a través de una liga, usted recibe la notificación de una nueva factura para que usted la trabaje.</p>
				</div>
				<div class="col-md-6 col-md-pull-6  col-lg-6 col-lg-pull-6"><center><img alt="" src="/Intsol/IntsolWeb/views/image/jsp/productos/sifiFacturas/Finanzas3.png" class="SifImage img-responsive"></center></div>
				<div class="clearfix"></div>
				</div>
				<div class="col-md-6 col-lg-6">
					<h4 class="text-uppercase">Facturas repetitivas con un solo click</h4>
					<p class="text-justify parrafo">Ahorre tiempo y esfuerzo con todas las facturas que se repiten cada cierto tiempo con un solo clic. SIFI Finanzas le permite configurar el comportamiento de estas facturas recurrentes sin complejidad.</p>
				</div>
				<div class="col-md-6 col-lg-6"><center><img alt="" src="/Intsol/IntsolWeb/views/image/jsp/productos/sifiFacturas/Finanzas4.png" class="SifImage img-responsive"></center></div>
				<div class="clearfix"></div>
				<div class="col-lg-12 gris">
				<div class="col-md-6 col-md-push-6  col-lg-6 col-lg-push-6">
					<h4 class="text-uppercase">Expediente electrónico de facturas por pagar y cobrar</h4>
					<p class="text-justify parrafo">Documente integralmente la información de todos sus movimientos. SIFI Finanzas le permite respaldar información digital de cada movimiento que podrá utilizar en el momento que lo desee. Guarde historial de compras, comprobantes de pago, o cualquier otro documento que le pueda ser de utilidad en el futuro.</p>
				</div>
				<div class="col-md-6 col-md-pull-6  col-lg-6 col-lg-pull-6"><center><img alt="" src="/Intsol/IntsolWeb/views/image/jsp/productos/sifiFacturas/Finanzas5.png" class="SifImage img-responsive"></center></div>
				<div class="clearfix"></div>
				</div>
				<div class="col-md-6 col-lg-6">
					<h4 class="text-uppercase">Presupuesto</h4>
					<p class="text-justify parrafo">Tome control de su presupuesto sin complicaciones, consulte el tiempo de su presupuesto ejercido. Genere su reporte de conciliación bancaría. SIFI Finanzas también cuenta con el complemento para el sistema Progress.</p>
				</div>
				<div class="col-md-6 col-lg-6"><center><img alt="" src="/Intsol/IntsolWeb/views/image/jsp/productos/sifiFacturas/Finanzas8.png" class="SifImage img-responsive"></center></div>
				<div class="clearfix"></div>
				<div class="col-lg-12 gris">
				<div class="col-md-6 col-md-push-6  col-lg-6 col-lg-push-6">
					<h4 class="text-uppercase">Compras</h4>
					<p class="text-justify parrafo">Con SIFI Finanzas usted podrá tomar el control de sus requisiciones. Registre unidades usuarias y recibirá una notificación automática al momento de aceptar o rechazar la requisición. SIFI Finanzas también lleva el control de los usuarios responsables en cada etapa del proceso de una requisición.</p>
				</div>
				<div class="col-md-6 col-md-pull-6  col-lg-6 col-lg-pull-6"><center><img alt="" src="/Intsol/IntsolWeb/views/image/jsp/productos/sifiFacturas/Finanzas7.png" class="SifImage img-responsive"></center></div>
				<div class="clearfix"></div>
				</div>
				<div class="col-md-6 col-lg-6">
					<h4 class="text-uppercase">Procesos Masivos</h4>
					<p class="text-justify parrafo">Ahorre tiempo y esfuerzo al subir y procesar su información. SIFI Finanzas cuenta con un módulo para procesar lotes de su información a partir de un archivo Excel específico para cada proceso. Cargue, timbre y cancele sus facturas de forma masiva.</p>
				</div>
				<div class="col-md-6 col-lg-6"><center><img alt="" src="/Intsol/IntsolWeb/views/image/jsp/productos/sifiFacturas/Finanzas6.png" class="SifImage img-responsive"></center></div>
				<div class="clearfix"></div>
				<div class="col-lg-12 gris">
				<div class="col-md-6 col-md-push-6  col-lg-6 col-lg-push-6">
					<h4 class="text-uppercase">Genere Reportes</h4>
					<p class="text-justify parrafo">Tenga la información que necesita en tiempo y forma con un sencillo proceso. SIFI Finanzas cuenta con múltiples reportes parametrizables capaces de entregar solo la información que usted necesita al momento. Genere reportes de sus facturas pendientes de pago y/o pagadas, reportes de estatus de requisiciones, reportes de conciliación bancaria, entre otros.</p>
				</div>
				<div class="col-md-6 col-md-pull-6  col-lg-6 col-lg-pull-6"><center><img alt="" src="/Intsol/IntsolWeb/views/image/jsp/productos/sifiFacturas/Finanzas9.png" class="SifImage img-responsive"></center></div>
				<div class="clearfix"></div>
				</div>
				<div class="col-md-6 col-lg-6">
					<h4 class="text-uppercase">Basado en tecnología WEB/INTRANET</h4>
					<p class="text-justify parrafo">Úselo donde quiera, disponible 24/7, ahorre en servidores y Bases de Datos, nunca pierda información, alto nivel de seguridad y rendimiento.</p>
				</div>
				<div class="col-md-6 col-lg-6"><center><img alt="" src="/Intsol/IntsolWeb/views/image/jsp/productos/sifiFacturas/Finanzas1.png" class="SifImage img-responsive"></center></div>
				<div class="clearfix"></div>
				<div class="col-lg-12">
					<center>
						<button class="btn btn-info" onclick="window.location.assign('/Intsol/IntsolWeb/views/jsp/productos/SifiFacturasDetails.jsp');">Ver Detalles»</button>
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