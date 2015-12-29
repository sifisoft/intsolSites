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
<title>Desarrollo Web</title>
<script type="text/javascript">
window.onload = header;
function header(){
	setHeaderAndFooter("N","",0,2,2);
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
	display:inline-block;width:75px; height:75px; padding: 0px;
}
h4{
	color : #8A2908;
}
.parrafo{
		font-family:Palatino Linotype;
		font-size: large;
		font-style: normal;
	}
.SifImage{
		width: 50%;
		height: 50%;
	}
	h2{
		color : #0480C4;
		font-weight: 200;
	}
.text-primary{
	font-weight: bolder;
}
h1{
		font-family: 'Quattrocento Sans', sans-serif;
	}
</style>
</head>
<body>
	<div class="container-fluid" id="todo">
		<div class="row navbar navbar-default navbar-fixed-top" style="padding: 0px; margin: 0px;" id="headIntsol"> </div>
		<div class="container-fluid">
			
		<!-- <div class="container-fluid" style="background-color: #009CE6; padding-top: 50px; padding-bottom: 50px;">
			<h1 class="text-center" style="color: white;">Desarrollamos soluciones a sus requerimientos utilizando tecnolog�a de punta y de acuerdo a su presupuesto</h1>
		</div> -->
			
			
			<div class="container-fluid" id="espacio1">
				<div class="col-md-12" style="height: auto;">
					<img alt="" src="/Intsol/IntsolWeb/views/image/jsp/soluciones/development/barraDesarrolloGDE.png" class="img-responsive show-lg show-md show-sm hidden-xs totalAncho">
					<img alt="" src="/Intsol/IntsolWeb/views/image/jsp/soluciones/development/barraDesarrolloCH.png" class="hidden-lg hidden-md hidden-sm show-xs img-responsive total">
				</div>
			</div>
			 
			<div class="col-lg-12">
			<center><h4>Nuestro equipo de profesionistas desarrolla <strong>Aplicaiones Web</strong> enfocadas en sus necesidades. Su meta es la nuestra.</h4></center>
			</div>			
			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				<h4>Planeaci�n</h4>
				<p class="text-justify">Sabemos que la soluci�n a su necesidad, el costo y el tiempo de desarrollo ser�n su prioridad, es por eso que llevamos a cabo una planeaci�n exhaustiva en cada parte fundamental del proyecto:</p>
				 <%	List<String> l1 = new ArrayList<String>();
					l1.add("<strong><span class=\"text-primary\">An�lis</span></strong><br>En esta etapa de la planeaci�n definiremos objetivamente el problema a resolver as� como la mejor soluci�n para �ste, tratando puntos escenciales como el funcionamiento del sistema, rendimiento, restricciones, interfaces, estimaci�n de recursos, viabilidad econ�mina, t�cnica y legal.");
					l1.add("<strong><span class=\"text-primary\">Dise�o</span></strong><br>Es aqu� d�nde, en base a lo definido en el an�lisis, se propone puntualmente la soluci�n. Modelando los dise�os de datos, de entrada y salida, de archivos, de procedimientos y dem�s modulos que pueda requerir su petici�n ");
					l1.add("<strong><span class=\"text-primary\">Implementaci�n</span></strong><br>Despu�s de haber dise�ado lo planteado en el an�lisis se procede a la elaboraci�n del sistema que usted necesita. Es aqu� d�nde nosotros realizamos todo lo planeado empezando por dar soluci�n a su problema, pasando por la instalaci�n del sistema en d�nde usted lo prefiera, seguido de una demostraci�n y prueba de lo planeado.");
					l1.add("<strong><span class=\"text-primary\">Capacitaci�n</span></strong><br>Por �ltimo, brindamos informaci�n de c�mo utilizar el sistema que hemos creado para usted, brindando asesor�a y mantenimiento del mismo");
					for(int i=0;i<l1.size();i++){
						out.println("<div class=\"bullet\">");
						out.println("<p class=\"text-justify\">");
						out.println("<img alt=\"\" src=\"/Intsol/IntsolWeb/views/image/bullet.gif\">");
						out.println(l1.get(i));
						out.println("</p>");
						out.println("</div>");
					}
				%>
				<br>
			</div>

			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12"> 
				<h4>Soporte y Mantenimiento</h4>				
				<p class="text-justify">Para cada uno de nuestros proyectos brindamos soporte y mantenimiento, sabemos que las necesidades est�n en movimiento y es por ello que las necesidades que se tienen el d�a de hoy no ser�n las mismas que dentro de un a�o o menos. Los sistemas que desarrollamos est�n siempre en continua actualizaci�n, es por ello que brindamos �ste servicio a nuestros clientes.</p>
				
				<h4>Garant�a</h4>
				<p class="text-justify">Estamos comprometidos en el desarrollo de nuestras aplicaciones, asegurando la calidad, optimizaci�n, compatibilidad con multiples plataformas y posibles actualizaciones. Cada uno de nuestros sistemas lleva impreso nuestro sello de calidad, reflejado en las siguientes caracter�sticas:</p>
				
				 <%	List<String> l = new ArrayList<String>();
					l.add("<strong><span class=\"text-primary\">A la medida</span></strong><br>En INTSOL estamos conscientes de que las necesidades de cada empresa son distintas, es por eso que ofrecemos nuestros servicios en base a �stas. No importa el tama�o, giro o recursos de su empresa, siempre tendremos la mejor opci�n.");
					l.add("<strong><span class=\"text-primary\">Amigable</span></strong><br>Nuestros sistemas est�n pensados siempre en el usuario, es por eso que dise�amos interfaces gr�ficas que permitan una interacci�n f�cil en cada proceso.");
					l.add("<strong><span class=\"text-primary\">Seguro</span></strong><br>Tomamos la seguridad muy en serio, es por ello que cada una de nuestas aplicaciones garantiza la Confidencialidad, Integridad y Disponibilidad de su informaci�n.");
					l.add("<strong><span class=\"text-primary\">Confiable</span></strong><br>Nuestros sistemas tienen un alto grado de consistencia y estabilidad por lo que se evitan y previenen posibles errores en cada proceso.");
					for(int i=0;i<l.size();i++){
						out.println("<div class=\"bullet\">");
						out.println("<p class=\"text-justify\">");
						out.println("<img alt=\"\" src=\"/Intsol/IntsolWeb/views/image/bullet.gif\">");
						out.println(l.get(i));
						out.println("</p>");
						out.println("</div>");
					}
				%>
				
				<h4>Tecnolog�a</h4>
				<p class="text-justify">Seleccionamos cuidadosamente cada parte del sistema. Para el desarrollo de nuestras aplicaciones Web utilizamos principalmente las siguientes tecnolog�as:</p>
				<p class="text-justify">Bases de datos: <strong>Oracle, MySQL</strong></p>
				<p class="text-justify">Backend: <strong>Java</strong></p>
				<p class="text-justify">Frontend: <strong>HTML, JavaScript, JQuery, JQuery UI, Bootstrap, CSS</strong></p>
				<p class="text-justify">Servidores: <strong>Apache, Tomcat</strong></p>
				<br>
				<center>
				<div class="tecnologias">
					<ul>
						<li><img alt="Oracle" src="/Intsol/IntsolWeb/views/image/jsp/soluciones/development/oracle.png" class="total"></li>
						<li><img alt="MySQL" src="/Intsol/IntsolWeb/views/image/jsp/soluciones/development/MySQL.jpg" class="total"></li>
						<li><img alt="Java" src="/Intsol/IntsolWeb/views/image/jsp/soluciones/development/java.jpg" class="total"></li>
						<li><img alt="HTML5" src="/Intsol/IntsolWeb/views/image/jsp/soluciones/development/html.png" class="total"></li>
						<li><img alt="JS" src="/Intsol/IntsolWeb/views/image/jsp/soluciones/development/js.png" class="total"></li>
						<li><img alt="CSS3" src="/Intsol/IntsolWeb/views/image/jsp/soluciones/development/css3.jpg" class="total"></li>
						<li><img alt="JQuery" src="/Intsol/IntsolWeb/views/image/jsp/soluciones/development/jquery.png" class="total"></li>
						<li><img alt="Bootstrap" src="/Intsol/IntsolWeb/views/image/jsp/soluciones/development/bs.png" class="total"></li>
						<li><img alt="Tomcat" src="/Intsol/IntsolWeb/views/image/jsp/soluciones/development/apache.png" class="total"></li>
						<li><img alt="Apache" src="/Intsol/IntsolWeb/views/image/jsp/soluciones/development/tomcat.png" class="total"></li>
					</ul>
				</div></center> <br>
				<p class="text-justify">Pero podemos utilizar otras tecnolog�as dependiendo sus necesidades</p>	
				
			</div>
			
			
			<div class="clearfix"></div>
			<div class="col-lg-12">
			<h4>Algunos ejemplos</h4>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
				<p class="text-justify"><img alt="" src="/Intsol/IntsolWeb/views/image/bullet.gif">SIFI N�MINA</p>
				<img alt="" src="/Intsol/IntsolWeb/views/image/jsp/soluciones/development/PantallaNOMINAgde.png" class="img-responsive show-lg show-md show-sm hidden-xs totalAncho">
				<img alt="" src="/Intsol/IntsolWeb/views/image/jsp/soluciones/development/PantallaNOMINAch.png" class="hidden-lg hidden-md hidden-sm show-xs img-responsive total">
				<p class="text-justify">SIFI N�mina es una creaci�n de INTSOL S.A. de C.V que le permite cumplir en tiempo y forma con los requerimientos legales, fiscales, de seguridad social, federales y estatales de la republica mexicana.</p>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
				<p class="text-justify"><img alt="" src="/Intsol/IntsolWeb/views/image/bullet.gif">SIFI Finanzas</p>
				<img alt="" src="/Intsol/IntsolWeb/views/image/jsp/soluciones/development/PantallaFINANZAgde.png" class="img-responsive show-lg show-md show-sm hidden-xs totalAncho">
				<img alt="" src="/Intsol/IntsolWeb/views/image/jsp/soluciones/development/PantallaFINANZAch.png" class="hidden-lg hidden-md hidden-sm show-xs img-responsive total">
				<p class="text-justify">SIFI Finanzas es un sistema que le ahorrar� m�s del 60% de trabajo para sus cuentas por pagar y cobrar, adem�s le permite tener informaci�n en tiempo real de su presupuesto mejorando su toma de decisiones</p>
			</div>
		</div>
		<div class="container-fluid">
			<div class="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-md-offset-2" style="background-color: #eeeeee;">
				<h4>�Usted y/o su empresa necesitan una aplicaci�n web? Cont�ctenos: </h4>
				
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
					 	<label for="telefono" class="col-lg-2 control-label">Tel�fono:</label>
						<div class="input-group">
							<div class="input-group-addon">
								<span class="glyphicon glyphicon-earphone"></span>
							</div>
							<input type="text" class="form-control" aria-describedby="basic-addon1" id="telefono_">
						</div>
					</div>
					
					<div class="form-group" id="form-descripcion">
					 	<label for="descripcion" class="col-lg-2 control-label">Descripci�n:</label>
						<div class="input-group">
							<div class="input-group-addon">
								<span class="glyphicon glyphicon-comment" id="basic-addon1"></span>
							</div>
							<textarea class="form-control" rows="5" style="resize:none;" id="descripcion_"></textarea>
						</div>
						<div class="col-lg-offset-2">
							<span class="help-block" id="error-descripcion"></span>
						</div>
					</div>
					
					<div class="form-group">
					 	<center><button class="btn btn-primary" onclick="enviarDesarrollo();">Enviar</button></center> <!-- data-toggle="modal" data-target="#myModal" -->
					</div>
			</div>
		</div>
	</div>
	<!-- MODAL -->
	<div class="modal fade" id="myModal" role="dialog"> </div>
	<div class="container-fluid footer2" id="footerIntsol"></div>
<script type="text/javascript" src="/Intsol/IntsolWeb/views/bootstrap/js/jquery.js"></script>
<script type="text/javascript" src="/Intsol/IntsolWeb/views/bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript" src="/Intsol/IntsolWeb/views/JS.js"></script>
</body>
</html>