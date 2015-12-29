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
.bu{
	height: 15px;
	width: 15px;
}
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
		
		<div class="container-fluid" id="espacio"> <div class="col-md-12" style="height: 2px;"></div></div>
		
		<%
	List<String> cxp= new ArrayList<String>();
		cxp.add("Deje que sus provedores envíen y descarguen sus facturas a través de SIFI Finanzas.");
		cxp.add("Utilice una cuenta de correo electrónico determinada (facturas@suempresa.com).");
		cxp.add("Reciba notificaciones de una nueva factura cargada ya en SIFI Finanzas");
		cxp.add("Registre los pagos realizados ya sea transferencia o cheque (Póliza)");
		cxp.add("Lleve expediente electrónico de los documentos necesarios para realizar pagos");
		cxp.add("Reporte de facturas pendientes de pago y/o pagadas");
		cxp.add("Antigüedad de saldos");
	List<String> cxc= new ArrayList<String>();
	cxc.add("Genere de manera fácil sus facturas");
	cxc.add("Timbre o cancele directamente desde SIFI con un solo click");
	cxc.add("Carga masiva de facturas a través de archivos Excel");
	cxc.add("Registro de cobros y saldos");
	cxc.add("Antigüedad de saldos");
	List<String> compras= new ArrayList<String>();
	compras.add("Control de requisiciones (ABC)");
	compras.add("Registro de unidades usuarias");
	compras.add("Notificación automática a unidad usuaria del proceso de aceptación o rechazo de la requisición");
	compras.add("Control de usuarios responsables de las etapas del proceso de requisición");
	compras.add("Reporte de estatus de requisiciones");
	List<String> presupuesto= new ArrayList<String>();
	presupuesto.add("Control en tiempo del presupuesto ejercido");
	presupuesto.add("Reporte de conciliación bancaría");
	presupuesto.add("Complemento para el sistema Progress");
%>
		
		
		
		
		<div class="container-fluid">
			<div class="col-sm-6 col-sm-push-3 col-md-4 col-md-push-4 col-lg-4 col-lg-push-4">
				<button class="btn btn-info totalAncho" onclick="goVentas()"><h3>¡Adquiéralo Ya!</h3></button>
			</div>
		</div>
		<!-- Contenido -->
		<div class="container-fluid" id="espacio"> <div class="col-md-12" style="height: 5px;"></div></div>
		<div class="container-fluid" id="espacio" style="background-color: #eeeeee"> <div class="col-md-12" style="height: 5px;"></div></div>		
		<div class="container-fluid">
			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				<h4>Cuentas por pagar</h4>
				<p class="text-justify" style="font-weight: bold;"><strong>Nunca había sido más sencillo y eficiente su control de facturas que ahora con SIFI Finanzas</strong></p>
				<%
					for(int i = 0; i<cxp.size(); i++){
						out.println("<div class=\"bullet\">");
						out.println("<p class=\"text-justify\" style=\"font-size:small;\"><img alt=\"\" src=\"/Intsol/IntsolWeb/views/image/tick.png\" class=\"bu\"> "+cxp.get(i)+"</p>");
						out.println("</div>");
					}
				%>
			</div>
		</div>
		<div class="container-fluid" id="espacio" style="background-color: #eeeeee"> <div class="col-md-12" style="height: 5px;"></div></div>
		<div class="container-fluid">
			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				<h4>Cuentas por cobrar</h4>
				<%
					for(int i = 0; i<cxc.size(); i++){
						out.println("<div class=\"bullet\">");
						out.println("<p class=\"text-justify\" style=\"font-size:small;\"><img alt=\"\" src=\"/Intsol/IntsolWeb/views/image/tick.png\" class=\"bu\"> "+cxc.get(i)+"</p>");
						out.println("</div>");
					}
				%>
			</div>
		</div>
		<div class="container-fluid" id="espacio" style="background-color: #eeeeee"> <div class="col-md-12" style="height: 5px;"></div></div>
		<div class="container-fluid">
			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				<h4>Compras</h4>
				<%
					for(int i = 0; i<compras.size(); i++){
						out.println("<div class=\"bullet\">");
						out.println("<p class=\"text-justify\" style=\"font-size:small;\"><img alt=\"\" src=\"/Intsol/IntsolWeb/views/image/tick.png\" class=\"bu\"> "+compras.get(i)+"</p>");
						out.println("</div>");
					}
				%>
			</div>
		</div>
		<div class="container-fluid" id="espacio" style="background-color: #eeeeee"> <div class="col-md-12" style="height: 5px;"></div></div>
		<div class="container-fluid">
			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				<h4>Presupuesto</h4>
				<%
					for(int i = 0; i<presupuesto.size(); i++){
						out.println("<div class=\"bullet\">");
						out.println("<p class=\"text-justify\" style=\"font-size:small;\"><img alt=\"\" src=\"/Intsol/IntsolWeb/views/image/tick.png\" class=\"bu\"> "+presupuesto.get(i)+"</p>");
						out.println("</div>");
					}
				%>
			</div>
		</div>
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