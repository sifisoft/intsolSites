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
<script type="text/javascript">
window.onload = header;
function header(){
	setHeaderAndFooter("N","",0,2,3);
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
	h1{
		font-family: 'Quattrocento Sans', sans-serif;
	}
	.parrafo{
		color: #333;
	}
	h4{
		color : #A02A34;
	}
</style>
<title>Soporte</title>
</head>
<body>
	<div class="container-fluid" id="todo">
		<div class="row navbar navbar-default navbar-fixed-top" style="padding: 0px; margin: 0px;" id="headIntsol"> </div>		
		
		<div class="container-fluid" id="espacio1">
			<div class="col-md-12" style="height: auto;">
				<img alt="" src="/Intsol/IntsolWeb/views/image/jsp/soporte/barraSoporteGDE.png" class="img-responsive show-lg show-md show-sm hidden-xs totalAncho">
				<img alt="" src="/Intsol/IntsolWeb/views/image/jsp/soporte/barraSoporteCH.png" class="hidden-lg hidden-md hidden-sm show-xs img-responsive total">
			</div>
		</div>
		
		<div class="container-fluid">
			<div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
				<h4>NUESTRO EQUIPO</h4>
				<p class="text-justify parrafo">Está conformado por un grupo de profesionales que va a la vanguardia en tecnologías y está altamente comprometido con la calidad en nuestros productos y servicios.</p>
				<center><img alt="INTSOL" src="/Intsol/IntsolWeb/views/image/jsp/soporte/publicidad.jpg"></center>
				<p class="text-justify parrafo">Nuestro equipo altamente capacitado desarrolla sistemas hechos a la medida, nuestro profesionalismo y experiencia nos han llevado a generar grandes mejoras en los procesos de calculo de nómina con tecnología de punta.</p>
			</div>
			<div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
				<h4>CAPACITACIÓN</h4>
				<p class="text-justify parrafo">El paquete SIFI Nómina incluye la Capacitación completamente gratuita.</p>
				<p class="text-justify parrafo">Nuestro equipo lo guiará paso a paso para que usted pueda sacar provecho a todas las herramientas que SIFI Nómina trae para usted.</p>
				<center><img alt="INTSOL" src="/Intsol/IntsolWeb/views/image/jsp/soporte/pc.jpg"></center>
				<p class="text-justify parrafo">Nuestro compromiso es proporcionarte un equipo que cambiará la funcionalidad y productividad en su negocio.</p>
			</div>
			<div class="clearfix visible-sm-block"></div> <!-- Ayuda al acomo de una celda mas grande -->
			<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
				<h4>SOPORTE TÉCNICO</h4>
				<p class="text-justify parrafo">Para nosotros tu opinión es muy importante por eso puedes encontrarnos las 24 horas del día los 365 días del año en:</p>
				<p class="text-justify parrafo">Correo electrónico: info@sifi.com.mx</p>
				<p class="text-justify parrafo">Tel. (594) 1040 154</p>
				<p class="text-justify parrafo">Dirección: Guadalupe Victoria S/N Colonia Anáhuac 2a Sección, Tepexpan, Edo Mex. </p>
				<center><img alt="INTSOL" src="/Intsol/IntsolWeb/views/image/jsp/soporte/woman.jpg"></center>
				<div class="bullet">
					<h3>
						<img alt="" src="/Intsol/IntsolWeb/views/image/bullet.gif">
						Asistencia técnica(Exclusivo para clientes)
					</h3>
				</div>
				<div class="bullet">
					<h3>
						<img alt="" src="/Intsol/IntsolWeb/views/image/bullet.gif">
						Paquetes y dudas
					</h3>
				</div>
				<div class="bullet">
					<h3>
						<img alt="" src="/Intsol/IntsolWeb/views/image/bullet.gif">
						Quejas y sugerencias
					</h3>
				</div>
				<div class="bullet">
					<h3>
						<img alt="" src="/Intsol/IntsolWeb/views/image/bullet.gif">
						Solicitud para demostración
					</h3>
				</div>
			</div>
		</div>
		<div class="container-fluid">
			<div class="col-xs-12 col-lg-4">
				<h4>Comuniquese con nosotros</h4>
				<p>Número Telefónico: (594) 1040 154</p>
				<p>email: ventas@sifi.com.mx</p>
			</div>
			<div class="col-xs-12 col-lg-8" style="background-color: #eeeeee;">
				<h4>O si lo prefiere nosotros nos comunicamos</h4>
				<div class="form-group" id="form-nombre">
				 	<label for="nombre" class="col-lg-2 control-label">Nombre:</label>
					<div class="input-group">
						<div class="input-group-addon">
							<span class="glyphicon glyphicon-user"></span>
						</div>
						<input type="text" class="form-control" aria-describedby="basic-addon1" id="nombre_">
					</div>
					<div class="col-lg-offset-2">
						<span class="help-block" id="error-nombre"></span>
					</div>
				</div>
				<div class="form-group" id="form-email">
				 	<label for="e-mail" class="col-lg-2 control-label">e-mail:</label>
					<div class="input-group">
						<div class="input-group-addon">
							<span class="glyphicon glyphicon-envelope"></span>
						</div>
						<input type="text" class="form-control" aria-describedby="basic-addon1" id="email_">
					</div>
					<div class="col-lg-offset-2">
						<span class="help-block" id="error-email"></span>
					</div>
				</div>
				<div class="form-group">
				 	<label for="telefono" class="col-lg-2 control-label">Teléfono:</label>
					<div class="input-group">
						<div class="input-group-addon">
							<span class="glyphicon glyphicon-earphone"></span>
						</div>
						<input type="text" class="form-control" aria-describedby="basic-addon1" id="telefono_">
					</div>
				</div>
				<div class="form-group">
				 	<center><button class="btn btn-primary" onclick="enviarContacto();">Enviar</button></center> <!-- data-toggle="modal" data-target="#myModal" -->
				</div>
			</div>
		</div>
	
</div>
<div class="modal fade" id="myModal1" role="dialog"> </div>
<div class="container-fluid footer2" id="footerIntsol"></div>
<script type="text/javascript" src="/Intsol/IntsolWeb/views/bootstrap/js/jquery.js"></script>
<script type="text/javascript" src="/Intsol/IntsolWeb/views/bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript" src="/Intsol/IntsolWeb/views/JS.js"></script>
</body>
</html>