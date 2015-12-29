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
<title>Sifi Nómina</title>
<script type="text/javascript">
window.onload = header;
function header(){
	setHeaderAndFooter("S","https://www.sifi.com.mx:8443/SifiNomina",1,1,0);
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
	color : #1e98ed;
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
				<img alt="" src="/Intsol/IntsolWeb/views/image/jsp/productos/sifiNomina/SIFINOMINAGRANDE.png" class="img-responsive show-lg show-md show-sm hidden-xs totalAncho">
				<img alt="" src="/Intsol/IntsolWeb/views/image/jsp/productos/sifiNomina/SIFINOMINAPQE.png" class="hidden-lg hidden-md hidden-sm show-xs img-responsive total">
			</div>
		</div>
		
		<div class="container-fluid" id="espacio"> <div class="col-md-12" style="height: 2px;"></div></div>
		
		<%
	List<String> generales = new ArrayList<String>();
	generales.add(" <strong>CONFIABLE</strong>>SIFI Nómina es un sistema que ha sido usado por empresas de gran tamaño probando un buen funcionamiento");
	generales.add(" <strong>AMIGABLE</strong>>La interfaz gráfica del sistema permite al usuario interacturar fácilmente con el sistema");
	generales.add(" <strong>CONFIGURABLE</strong>>Gracias a las opciones de configuración el sistema puede ser usado por empresas de pequeño, mediano o gran tamaño, así como entidades gubernamentales");
	generales.add(" <strong>INTEGRAL</strong>>Es un sistema integral que incluye Recursos Humanos, Control de Asistencias, Seguridad Social, Nómina y Reportes");
	generales.add(" <strong>PARAMETRIZABLE</strong>>Las formulas, conceptos, periodos, cantidades, vigencias de remplazo y reportes son completamente parametrizables. La empresa puede configurar el sistema de acuerdo a sus necesidades");
	generales.add(" <strong>INFORMACIÓN EN CUALQUIER MOMENTO</strong>>Los reportes y herramientas pueden ser usados en diferentes programas como Excel o PDF para que usted pueda transformala, imprimirla o exportarla");
	generales.add(" <strong>MEJORA CONTINUA</strong>>SIFI Nómina es un sistema que ha sido creado para sobrepasar las espectativas de nuestros clientes, para lograrlo se ha aplicado una mejora continua en todos sus procesos.");
	generales.add(" <strong>WEB</strong>>Sistema basado en tecnología 100% Web");
	generales.add(" <strong>SAT</strong>>Integración automátia con timbrado SAT y control de origen de recurso. Generación de reporte DIMM");
	List<String> particulares= new ArrayList<String>();
	particulares.add("Timbrado con origen del recurso");
	particulares.add("CFDI 2 X Hoja para firma de empleados");
	particulares.add("Carga masiva de CFDI los duplicados para cancelar");
	particulares.add("Carga masiva de faltas y retardos");
	particulares.add("Carga masiva de conceptos para el origen del recurso");
	particulares.add("Sistema totalmente parametrizable, fórmulas, montos limite, vigencias, conceptos ligados");
	particulares.add("Permite segmentar la nómina por tipo de nómina (Policias, Sindicalizados, Confianza, Dieta, etc.)");
	particulares.add("Control de inasistencias, turnos y vacaciones");
	particulares.add("Herramientas para menejar y controlar a gran volumen Percepciones y Deducciones (Multi-select, Multi-replace, Copiar conceptos)");
	particulares.add("Dispersión a nómina con las principales instituciones bancarias");
	particulares.add("Cálculo anual de impuesto");
	particulares.add("Horas extra, dobles o triples");
	particulares.add("Cálculo de finiquito y liquidaciones");
	particulares.add("Control de fondo de ahorro y préstamos del seguro");
	particulares.add("Póliza Contable");
	particulares.add("Interface a ISSEMYM");
	particulares.add("Control de faltas y asistencias");
	particulares.add("Robot auditor de datos");
	particulares.add("Reportes en HTML, Excel y PDF");
	particulares.add("Recibos en PDF");
	particulares.add("Expediente Electrónico");
	particulares.add("Reporteador");
	particulares.add("Reportes prediseñados, estadisticas y gráficas");
	particulares.add("Calculos ISR anual, Forma 37");
	particulares.add("Agenda y recordatorios");
	particulares.add("Sistema Multi-plataforma, permite manejar desde 100 a 100,000 empleados");
	particulares.add("OSFEM (Altas, Bajas, Detalle de nómina, Disperciones)");
	particulares.add("Reporte de mandos medios y superiores");
	particulares.add("Pide el Reporte General de la nómina");
	particulares.add("Generación de Disco 4 mediante Reporteador");
	particulares.add("Histórico de Cambios en las Plazas y Movimientos");
	particulares.add("Plazas de manera masiva");
	particulares.add("Bitácora de Plazas de forma general");
	particulares.add("Estructura de personal de acuerdo al Zona, Nivel y Rango");
	particulares.add("Tabulador del Gobierno del Estado de México");
	particulares.add("Tabulador del Gobierno Federal.");
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
			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				<h4>Características Generales</h4>
				<%
					for(int i = 0; i<generales.size(); i++){
						out.println("<div class=\"bullet\">");
						out.println("<p class=\"text-justify\" style=\"font-size:small;\"><img alt=\"\" src=\"/Intsol/IntsolWeb/views/image/bullet_point.png\" class=\"bu\"> "+generales.get(i)+"</p>");
						out.println("</div>");
					}
				%>
			</div>
		</div>
		<div class="container-fluid" id="espacio" style="background-color: #eeeeee"> <div class="col-md-12" style="height: 5px;"></div></div>
		<div class="container-fluid">
			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				<h4>Características Particulares</h4>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
				<%
					for(int i = 0; i<18; i++){
						out.println("<div class=\"bullet\">");
						out.println("<p class=\"text-justify\" style=\"font-size:small;\"><img alt=\"\" src=\"/Intsol/IntsolWeb/views/image/bullet_point.png\" class=\"bu\"> "+particulares.get(i)+"</p>");
						out.println("</div>");
					}
				%>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
				<%
					for(int i = 18; i<particulares.size(); i++){
						out.println("<div class=\"bullet\">");
						out.println("<p class=\"text-justify\" style=\"font-size:small;\"><img alt=\"\" src=\"/Intsol/IntsolWeb/views/image/bullet_point.png\" class=\"bu\"> "+particulares.get(i)+"</p>");
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
