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
<title>Sifi N�mina</title>
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
		<div class="container-fluid">
			<div class="col-sm-6 col-sm-push-3 col-md-4 col-md-push-4 col-lg-4 col-lg-push-4">
				<button class="btn btn-success totalAncho btn-lg" onclick="goVentas()"><h3>�Adqui�ralo Ya!</h3></button>
			</div>
		</div>
		<!-- Contenido -->
		
		<div class="container-fluid">
				<div class="container-fluid">
					<div class="col-md-6 col-lg-6">
						<h4 class="text-uppercase">Cumpla con todos los requerimientos federales y estatales</h4>
						<p class="text-justify parrafo">SIFI N�mina le ayuda a cumplir en tiempo y forma con todas las obligaciones de seguridad social, legales, fiscales, federales, estatales y municipales establecidas para el Estado M�xico de forma f�cil y segura. Calcule impuestos y retenciones en su n�mina, genere reportes DIM para carga Batch, clasifique el origen de sus recursos y genere reporte de aportaciones patronales sin complicaciones.</p>
					</div>
					<div class="col-md-6 col-lg-6"><center><img alt="" src="/Intsol/IntsolWeb/views/image/jsp/productos/sifiNomina/Nomina3.png" class="SifImage img-responsive"></center></div>
				<div class="clearfix"></div>
				
				<div class="col-lg-12 gris">
					<div class="col-md-6 col-md-push-6  col-lg-6 col-lg-push-6">
						<h4 class="text-uppercase">Timbrado electr�nico con origen del recurso integrado al sistema</h4>
						<p class="text-justify parrafo">Con un solo click timbre su n�mina, revise su PDF y XML, env�eselos por email a sus empleados. El sistema permite definir el origen del recurso.</p>
					</div>
					<div class="col-md-6 col-md-pull-6  col-lg-6 col-lg-pull-6"><center><img alt="" src="/Intsol/IntsolWeb/views/image/jsp/productos/sifiNomina/Nomina7.png" class="SifImage img-responsive"></center></div>
					<div class="clearfix gris">
					</div>
				</div>
				
				
				<div class="col-md-6 col-lg-6">
					<h4 class="text-uppercase">Tabulador, Control de Plazas y Organigrama</h4>
					<p class="text-justify parrafo">SIFI N�mina tiene la opci�n de administrar a los empleados a trav�s de Tabuladores y para hacerlo a�n m�s f�cil, se encuentra integrado en el tabulador de sueldos del Gobierno Estatal, para la Direcci�n de Recursos Humanos y su personal docente en horas-semanas-mes, ligado al control de plazas de acuerdo al nivel de responsabilidad en el ejercicio de sus funciones, determinando sus categor�as y clasificaci�n as� como los sueldos que les corresponden.</p>
				</div>
				<div class="col-md-6 col-lg-6"><center><img alt="" src="/Intsol/IntsolWeb/views/image/jsp/productos/sifiNomina/Nomina8.png" class="SifImage img-responsive"></center></div>
				<div class="clearfix"></div>
				
				<div class="col-lg-12 gris">
				<div class="col-md-6 col-md-push-6 col-lg-6 col-lg-push-6">
					<h4 class="text-uppercase">Procesos Masivos de informaci�n</h4>
					<p class="text-justify parrafo">Ahorre tiempo y esfuerzo para subir y procesar su informaci�n. SIFI N�mina cuenta con un m�dulo para procesar lotes de su informaci�n a partir de un archivo Excel especificado para cada proceso. Por ejemplo, al dar de alta a sus empleados, usted podr�a subir empleado por empleado si lo desea, pero ahorrar�a m�s tiempo usando el proceso masivo.</p>
				</div>
				<div class="col-md-6 col-md-pull-6  col-lg-6 col-lg-pull-6"><center><img alt="" src="/Intsol/IntsolWeb/views/image/jsp/productos/sifiNomina/Nomina4.png" class="SifImage img-responsive"></center></div>
				<div class="clearfix gris"></div>
				</div>
				
				<div class="col-md-6 col-lg-6">
					<h4 class="text-uppercase">Expediente electr�nico</h4>
					<p class="text-justify parrafo">Documente integralmente la informaci�n de todos sus empleados. SIFI N�mina le permite respaldar informaci�n digital de cada empleado que podr� utilizar en el momento que lo desee. Guarde actas de nacimiento, comprobantes de domicilio o cualquier otro documento que le pueda ser de utilidad en el futuro.</p>
				</div>
				<div class="col-md-6 col-lg-6"><center><img alt="" src="/Intsol/IntsolWeb/views/image/jsp/productos/sifiNomina/Nomina6.png" class="SifImage img-responsive"></center></div>
				<div class="clearfix"></div>
				
				<div class="col-lg-12 gris">
				<div class="col-md-6 col-md-push-6  col-lg-6 col-lg-push-6">
					<h4 class="text-uppercase">Con�ctese f�cilmente con los actores de su n�mina</h4>
					<p class="text-justify parrafo">SIFI N�mina lo hace por usted. Conexi�n autom�tica con plataformas bancarias, OSFEM, ISSEMYM y SAT de manera correcta y sencilla. Una vez confirmada su informaci�n, SIFI N�mina generar� las conexiones y/o reportes necesarios para enviar informaci�n requerida a estas plataformas simplificando el proceso.</p>
				</div>
				<div class="col-md-6 col-md-pull-6  col-lg-6 col-lg-pull-6"><center><img alt="" src="/Intsol/IntsolWeb/views/image/jsp/productos/sifiNomina/Nomina2.png" class="SifImage img-responsive"></center></div>
				<div class="clearfix gris"></div>
				</div>
				
				<div class="col-md-6 col-lg-6">
					<h4 class="text-uppercase">Genere Reportes</h4>
					<p class="text-justify parrafo">Tenga la informaci�n que necesita en tiempo y forma con un sencillo proceso. SIFI N�mina cuenta con m�ltiples reportes parametrizables capaces de entregar solo la informaci�n que usted necesita al momento. Genere reportes PDF para visualizar sus recibos de n�mina, los detalles de sus departamentos. Genere reportes XLS para visualizar un resumen de su n�mina o los movimientos que ha hecho en su empresa. Genere reportes TXT para comunicarse con otra plataforma como OSFEM o PRISMA.</p>
				</div>
				<div class="col-md-6 col-lg-6"><center><img alt="" src="/Intsol/IntsolWeb/views/image/jsp/productos/sifiNomina/Nomina5.png" class="SifImage img-responsive"></center></div>
				<div class="clearfix"></div>
				<div class="col-lg-12 gris">
				<div class="col-md-6 col-md-push-6  col-lg-6 col-lg-push-6">
					<h4 class="text-uppercase">Basado en tecnolog�a WEB/INTRANET</h4>
					<p class="text-justify parrafo">�selo donde quiera, disponible 24/7, ahorre en servidores y Bases de Datos, nunca pierda informaci�n, alto nivel de seguridad y rendimiento.</p>
				</div>
				<div class="col-md-6 col-md-pull-6  col-lg-6 col-lg-pull-6"><center><img alt="" src="/Intsol/IntsolWeb/views/image/jsp/productos/sifiNomina/Nomina1.png" class="SifImage img-responsive"></center></div>			
				<div class="clearfix gris"></div>
				</div>
				<div class="col-lg-12">
					<center>
						<button class="btn btn-info" onclick="window.location.assign('/Intsol/IntsolWeb/views/jsp/productos/SifiNominaDetails.jsp');">Ver Detalles�</button>
						<button class="btn btn-primary" onclick="goVentas()">Adquieralo</button>
					</center>
				</div>
		</div>
		</div>
	</div>
	<!-- Footer -->
		<div class="container-fluid footer2" id="footerIntsol"> </div>
<script type="text/javascript" src="/Intsol/IntsolWeb/views/bootstrap/js/jquery.js"></script>
<script type="text/javascript" src="/Intsol/IntsolWeb/views/bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript" src="/Intsol/IntsolWeb/views/JS.js"></script>
</body>
</html>