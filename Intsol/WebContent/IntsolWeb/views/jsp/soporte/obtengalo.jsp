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
<title>Adquirir Sifi</title>
<script type="text/javascript">
window.onload = header;
function header(){
	setHeaderAndFooter("N","",0,0);
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
.social li{display:inline-block;width:30px;height: 30px;}
/*h3{
	color : #1e98ed;
}*/
</style>
</head>
<body>
	<div class="container-fluid" id="todo">
<!-- Header -->
		<div class="row navbar navbar-default navbar-fixed-top" style="padding: 0px; margin: 0px;" id="headIntsol"> </div>		
		<div class="container-fluid">
		<div class="container-fluid" id="espacio1">
			<div class="col-md-12" style="height: auto;">
			
			</div>
		</div>
			<div class="col-xs-12 col-lg-12" style="font-size: 1.5em; background-color: #eeeeee;padding-top: 20px">
			<h4>Comuniquese con nosotros</h4>
			</div>
			<div class="col-xs-1 col-lg-1" style="background-color: #eeeeee;">
			</div>
			<div class="col-xs-11 col-lg-11" style="font-size: 1.5em; background-color: #eeeeee;padding-bottom: 10px; padding-top: 20px; margin: 0 auto;">
				<p class="parrafo">Número Telefónico: (594) 1040 154</p>
				<p class="parrafo">E-mail: ventas@sifi.com.mx</p>
				<ul class="social" style="margin: 0px; padding: 0px;">
						<li><a href="https://www.facebook.com/SIFI-SOFT-1399008183705717/timeline/"> <img src="/Intsol/IntsolWeb/views/image/footer/blog-fbk.png" class="image_footer img-responsive"></a></li>
						<li><a href="http://sifinomina.blogspot.mx/"> <img src="/Intsol/IntsolWeb/views/image/footer/blog-ico.png" class="image_footer img-responsive"></a></li>
						<li><a href="#"> <img src="/Intsol/IntsolWeb/views/image/footer/blog-twr.png" class="image_footer img-responsive" style="padding: 0px; margin: 0px;"></a></li>
				</ul>
			</div>
			<div class="clearfix" style="font-size: 1.5em; background-color: #eeeeee;"></div>
			<div class="col-xs-12 col-lg-12" style="background-color: #eeeeee;">
			<h4>O si lo prefiere nosotros nos comunicamos</h4>
			</div>
			<div class="clearfix" style="font-size: 1.5em; background-color: #eeeeee;"></div>
			<div class="col-xs-1 col-lg-1" style="background-color: #eeeeee;">
			</div>
			<div class="col-xs-11 col-lg-11" style="background-color: #eeeeee;">
				<div class="form-group" id="form-nombre">
				 	<label for="nombre" class="col-lg-2 control-label parrafo">Nombre:</label>
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
				 	<label for="e-mail" class="col-lg-2 control-label parrafo">e-mail:</label>
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
				 	<label for="telefono" class="col-lg-2 control-label parrafo">Teléfono:</label>
					<div class="input-group">
						<div class="input-group-addon">
							<span class="glyphicon glyphicon-earphone"></span>
						</div>
						<input type="text" class="form-control" aria-describedby="basic-addon1" id="telefono_">
					</div>
				</div>
				<div class="form-group">
				 	<center><button class="btn btn-primary" onclick="enviarContactoVentas();">Enviar</button></center> <!-- data-toggle="modal" data-target="#myModal" -->
				</div>
			</div>
			<div class="clearfix" style="font-size: 1.5em; background-color: #eeeeee;"></div>
		</div>
</div>
<div class="modal fade" id="myModal1" role="dialog"> </div>
<!-- Footer -->
<div class="container-fluid footer2" id="footerIntsol"> </div>
<script type="text/javascript" src="/Intsol/IntsolWeb/views/bootstrap/js/jquery.js"></script>
<script type="text/javascript" src="/Intsol/IntsolWeb/views/bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript" src="/Intsol/IntsolWeb/views/JS.js"></script>
</body>
</html>