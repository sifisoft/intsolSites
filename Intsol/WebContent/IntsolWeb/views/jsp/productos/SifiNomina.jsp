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
				<button class="btn btn-success totalAncho btn-lg" onclick="goVentas()"><h3>¡Adquiéralo Ya!</h3></button>
			</div>
		</div>
		<!-- Contenido -->
		
		<div class="container-fluid">
				<div class="container-fluid">
					<div class="col-md-6 col-lg-6">
						<h4 class="text-uppercase">Cumpla con todos los requerimientos federales y estatales</h4>
						<p class="text-justify parrafo">SIFI Nómina le ayuda a cumplir en tiempo y forma con todas las obligaciones de seguridad social, legales, fiscales, federales, estatales y municipales establecidas para el Estado México de forma fácil y segura. Calcule impuestos y retenciones en su nómina, genere reportes DIM para carga Batch, clasifique el origen de sus recursos y genere reporte de aportaciones patronales sin complicaciones.</p>
					</div>
					<div class="col-md-6 col-lg-6"><center><img alt="" src="/Intsol/IntsolWeb/views/image/jsp/productos/sifiNomina/Nomina3.png" class="SifImage img-responsive"></center></div>
				<div class="clearfix"></div>
				
				<div class="col-lg-12 gris">
					<div class="col-md-6 col-md-push-6  col-lg-6 col-lg-push-6">
						<h4 class="text-uppercase">Timbrado electrónico con origen del recurso integrado al sistema</h4>
						<p class="text-justify parrafo">Con un solo click timbre su nómina, revise su PDF y XML, envíeselos por email a sus empleados. El sistema permite definir el origen del recurso.</p>
					</div>
					<div class="col-md-6 col-md-pull-6  col-lg-6 col-lg-pull-6"><center><img alt="" src="/Intsol/IntsolWeb/views/image/jsp/productos/sifiNomina/Nomina7.png" class="SifImage img-responsive"></center></div>
					<div class="clearfix gris">
					</div>
				</div>
				
				
				<div class="col-md-6 col-lg-6">
					<h4 class="text-uppercase">Tabulador, Control de Plazas y Organigrama</h4>
					<p class="text-justify parrafo">SIFI Nómina tiene la opción de administrar a los empleados a través de Tabuladores y para hacerlo aún más fácil, se encuentra integrado en el tabulador de sueldos del Gobierno Estatal, para la Dirección de Recursos Humanos y su personal docente en horas-semanas-mes, ligado al control de plazas de acuerdo al nivel de responsabilidad en el ejercicio de sus funciones, determinando sus categorías y clasificación así como los sueldos que les corresponden.</p>
				</div>
				<div class="col-md-6 col-lg-6"><center><img alt="" src="/Intsol/IntsolWeb/views/image/jsp/productos/sifiNomina/Nomina8.png" class="SifImage img-responsive"></center></div>
				<div class="clearfix"></div>
				
				<div class="col-lg-12 gris">
				<div class="col-md-6 col-md-push-6 col-lg-6 col-lg-push-6">
					<h4 class="text-uppercase">Procesos Masivos de información</h4>
					<p class="text-justify parrafo">Ahorre tiempo y esfuerzo para subir y procesar su información. SIFI Nómina cuenta con un módulo para procesar lotes de su información a partir de un archivo Excel especificado para cada proceso. Por ejemplo, al dar de alta a sus empleados, usted podría subir empleado por empleado si lo desea, pero ahorraría más tiempo usando el proceso masivo.</p>
				</div>
				<div class="col-md-6 col-md-pull-6  col-lg-6 col-lg-pull-6"><center><img alt="" src="/Intsol/IntsolWeb/views/image/jsp/productos/sifiNomina/Nomina4.png" class="SifImage img-responsive"></center></div>
				<div class="clearfix gris"></div>
				</div>
				
				<div class="col-md-6 col-lg-6">
					<h4 class="text-uppercase">Expediente electrónico</h4>
					<p class="text-justify parrafo">Documente integralmente la información de todos sus empleados. SIFI Nómina le permite respaldar información digital de cada empleado que podrá utilizar en el momento que lo desee. Guarde actas de nacimiento, comprobantes de domicilio o cualquier otro documento que le pueda ser de utilidad en el futuro.</p>
				</div>
				<div class="col-md-6 col-lg-6"><center><img alt="" src="/Intsol/IntsolWeb/views/image/jsp/productos/sifiNomina/Nomina6.png" class="SifImage img-responsive"></center></div>
				<div class="clearfix"></div>
				
				<div class="col-lg-12 gris">
				<div class="col-md-6 col-md-push-6  col-lg-6 col-lg-push-6">
					<h4 class="text-uppercase">Conéctese fácilmente con los actores de su nómina</h4>
					<p class="text-justify parrafo">SIFI Nómina lo hace por usted. Conexión automática con plataformas bancarias, OSFEM, ISSEMYM y SAT de manera correcta y sencilla. Una vez confirmada su información, SIFI Nómina generará las conexiones y/o reportes necesarios para enviar información requerida a estas plataformas simplificando el proceso.</p>
				</div>
				<div class="col-md-6 col-md-pull-6  col-lg-6 col-lg-pull-6"><center><img alt="" src="/Intsol/IntsolWeb/views/image/jsp/productos/sifiNomina/Nomina2.png" class="SifImage img-responsive"></center></div>
				<div class="clearfix gris"></div>
				</div>
				
				<div class="col-md-6 col-lg-6">
					<h4 class="text-uppercase">Genere Reportes</h4>
					<p class="text-justify parrafo">Tenga la información que necesita en tiempo y forma con un sencillo proceso. SIFI Nómina cuenta con múltiples reportes parametrizables capaces de entregar solo la información que usted necesita al momento. Genere reportes PDF para visualizar sus recibos de nómina, los detalles de sus departamentos. Genere reportes XLS para visualizar un resumen de su nómina o los movimientos que ha hecho en su empresa. Genere reportes TXT para comunicarse con otra plataforma como OSFEM o PRISMA.</p>
				</div>
				<div class="col-md-6 col-lg-6"><center><img alt="" src="/Intsol/IntsolWeb/views/image/jsp/productos/sifiNomina/Nomina5.png" class="SifImage img-responsive"></center></div>
				<div class="clearfix"></div>
				<div class="col-lg-12 gris">
				<div class="col-md-6 col-md-push-6  col-lg-6 col-lg-push-6">
					<h4 class="text-uppercase">Basado en tecnología WEB/INTRANET</h4>
					<p class="text-justify parrafo">Úselo donde quiera, disponible 24/7, ahorre en servidores y Bases de Datos, nunca pierda información, alto nivel de seguridad y rendimiento.</p>
				</div>
				<div class="col-md-6 col-md-pull-6  col-lg-6 col-lg-pull-6"><center><img alt="" src="/Intsol/IntsolWeb/views/image/jsp/productos/sifiNomina/Nomina1.png" class="SifImage img-responsive"></center></div>			
				<div class="clearfix gris"></div>
				</div>
				<div class="col-lg-12">
					<center>
						<button class="btn btn-info" onclick="window.location.assign('/Intsol/IntsolWeb/views/jsp/productos/SifiNominaDetails.jsp');">Ver Detalles»</button>
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