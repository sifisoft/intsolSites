<%@page import="java.util.ArrayList"%>
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scalable=1.0, maximun-scale=1.0, minimun-scale=1.0">

<link rel="stylesheet" href="/Intsol/IntsolWeb/test/reset.css">
<link rel="stylesheet" href="/Intsol/IntsolWeb/test/style.css">
<link rel="stylesheet" href="/Intsol/IntsolWeb/views/bootstrap/css/bootstrap.min.css">
<link rel="stylesheet" href="/Intsol/IntsolWeb/views/IntsolCSS.css">
<link rel="shortcut icon" href="/Intsol/IntsolWeb/views/image/empresa.png">
<script src="/Intsol/IntsolWeb/test/modernizr.js"></script>
<title>INTSOL</title>
<script type="text/javascript">
window.onload = ca;
function ca(){
	$('.carousel').carousel({
		  interval: 1000 * 5
		});
	setHeaderAndFooter("N","",0,0,0);
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
.car{
	/*height: 424.5px;*/
	height : auto;
	position: absolute;
    left: 0px;
    top: 0px;
    z-index: -1;
}
</style>
</head>
<body>
	<div class="container-fluid" id="todo">
		<div class="row navbar navbar-default navbar-fixed-top" style="padding: 0px; margin: 0px;" id="headIntsol"> </div>
		<div class="container-fluid col-lg-12">
			<div id="carousel-1" class="carousel slide" data-ride="carousel" style="min-height: 200px !important;">
				<ol class="carousel-indicators hidden-xs">
					<li data-target="#carousel-1" data-slide-to="0" class="active"></li>
					<li data-target="#carousel-1" data-slide-to="1"></li>
					<li data-target="#carousel-1" data-slide-to="2"></li>
				</ol>
				<!-- Contenedores -->
				<div class="carousel-inner" role="listbox" style="min-height: 100% !important;">
					<div class="item active total">
						<img alt="INTSOL" src="/Intsol/IntsolWeb/views/image/slide/BAN1.jpg" class="img-responsive show-lg show-md show-sm hidden-xs totalAncho">
						<img alt="INTSOL" src="/Intsol/IntsolWeb/views/image/slide/BAN1little.jpg" class="hidden-lg hidden-md hidden-sm show-xs img-responsive total">
						<div class="carousel-caption hidden-xs">
								<h3>Úselo en donde sea</h3>
						</div>
					</div>
					<div class="item total">
						<img alt="INTSOL" src="/Intsol/IntsolWeb/views/image/slide/BAN2.jpg" class="img-responsive show-lg show-md show-sm hidden-xs totalAncho">
						<img alt="INTSOL" src="/Intsol/IntsolWeb/views/image/slide/BAN2little.jpg" class="hidden-lg hidden-md hidden-sm show-xs img-responsive total">
						<div class="carousel-caption hidden-xs">
							<h3>Optimícese</h3>					
						</div>
					</div>
					<div class="item total">
						<img alt="INTSOL" src="/Intsol/IntsolWeb/views/image/slide/BAAN3.jpg" class="img-responsive show-lg show-md show-sm hidden-xs totalAncho">
						<img alt="INTSOL" src="/Intsol/IntsolWeb/views/image/slide/BAN3little.jpg" class="hidden-lg hidden-md hidden-sm show-xs img-responsive total">
						<div class="carousel-caption hidden-xs">
							<h3>Un sistema completo</h3>		
						</div>
					</div>
				</div>
				
				<!-- Controles -->
				
				<a href="#carousel-1" class="left carousel-control" role="button" data-slide="prev">
				<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
				<span class="sr-only">Anterior</span>
				</a>
				
				<a href="#carousel-1" class="right carousel-control" role="button" data-slide="next">
				<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
				<span class="sr-only">Siguiente</span>
				</a>
			</div>
		</div>
		
		<div class="container-fluid" id="espacio"> <div class="col-md-12" style="height: 40px;"></div></div> <!-- ESPACIO --> 
		
		<div class="container-fluid">
			<div class="col-md-12" style="height: 40px; background-color:#acabab; padding: 0px;">
				<center><p class="p1" style="color: #FFFFFF;padding-top: 5px;">Productos</p></center>
			</div>
		</div>
		
		
		<!--PRODUCTOS -->
		<div class="container-fluid">
				<div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 product">
					<div class="view2 view2-third">  
					<a href="/Intsol/IntsolWeb/views/jsp/productos/SifiNomina.jsp">
					     <img src="/Intsol/IntsolWeb/views/image/products/SIFINO3.jpg" class="img-responsive totalAncho">
					     <div class="mask2" style="background-color: #009FEA">  
					     <!-- <h2>Sifi Nómina</h2> -->  
					     <p>Solución Integral de Nómina y Recursos Humanos</p>  
					         <!-- <a href="/Intsol/IntsolWeb/views/jsp/productos/SifiNomina.jsp" class="info">Más</a> -->  
					     </div>
					</a>  
					</div>
				</div>
				
				<div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 product">
					<div class="view2 view2-third">  
					<a href="/Intsol/IntsolWeb/views/jsp/productos/SifiFacturas.jsp">
					     <img src="/Intsol/IntsolWeb/views/image/products/SIFIFA3.jpg" class="img-responsive totalAncho">
					     <div class="mask2" style="background-color: #5EA22C">  
					     <!-- <h2>Sifi Facturas</h2> -->  
					     <p>Tome el Control de su Factura Electrónica</p>  
					         <!-- <a href="/Intsol/IntsolWeb/views/jsp/productos/SifiNomina.jsp" class="info">Más</a> -->  
					     </div>
					</a>  
					</div>
				</div>
				<div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 product">
					<div class="view2 view2-third">  
					<a href="/Intsol/IntsolWeb/views/jsp/productos/SifiInventario.jsp">
					     <img src="/Intsol/IntsolWeb/views/image/products/SIFIIN3.jpg" class="img-responsive totalAncho">
					     <div class="mask2" style="background-color: #E16A00;">  
					     <!-- <h2>Sifi Inventario</h2>   -->
					     <p>Organice y aproveche al máximo su Inventario</p>  
					         <!-- <a href="/Intsol/IntsolWeb/views/jsp/productos/SifiNomina.jsp" class="info">Más</a> -->  
					     </div>
					</a>  
					</div>
				</div>
				
		</div>
		<div class="container-fluid" id="espacio"> <div class="col-md-12" style="height: 40px;"></div></div> <!-- ESPACIO --> 
		
		<div class="container-fluid">
			<div class="col-md-12" style="height: 40px; background-color:#acabab;">
				<center><p class="p1" style="color: #FFFFFF;padding-top: 5px;">Soluciones</p></center>
			</div>
		</div>
		<div class="container-fluid">
				<div class="col-xs-12 col-sm-6 col-md-3 col-lg-3 product product1">
					<a href="javascript:void(0)">
					     <img src="/Intsol/IntsolWeb/views/image/products/Hostiing1.jpg" class="img-responsive totalAncho">
					</a>  
				</div>
				<div class="col-xs-12 col-sm-6 col-md-3 col-lg-3 product product1">
					<a href="/Intsol/IntsolWeb/views/jsp/soluciones/development.jsp">
					     <img src="/Intsol/IntsolWeb/views/image/products/DesarrolloWeb1.jpg" class="img-responsive totalAncho">
					</a>
				</div>
				 
				<div class="col-xs-12 col-sm-6 col-md-3 col-lg-3 product product1">
					<a href="/Intsol/IntsolWeb/views/jsp/soporte/soporte.jsp">
					     <img src="/Intsol/IntsolWeb/views/image/products/Soport.jpg" class="img-responsive totalAncho">
					</a>  
				</div>
				<div class="col-xs-12 col-sm-6 col-md-3 col-lg-3 product product1">
					<a href="javascript:void(0)">
					     <img src="/Intsol/IntsolWeb/views/image/products/AsesoriaM.jpg" class="img-responsive totalAncho">
					</a>  
				</div>
		</div>
		
		<div class="container-fluid"> <div class="col-md-12" style="height: 40px;"></div></div> <!-- ESPACIO --> 
		
		<div class="container-fluid">
			<div class="col-md-12" style="height: 40px; background-color:#acabab;">
				<center><p class="p1" style="color: #FFFFFF;padding-top: 5px;">Algunos de nuestros clientes</p></center>
			</div>
		</div>
		<div class="container-fluid">
				<%
				//Number of customers must be multiple 12
				for(int i=0;i<=30;i++){
					out.println("<div class=\"col-xs-2 col-sm-1 col-md-2 col-lg-1 product\" style=\"background-color : #D7E1EA;\" >");
					out.println("<a style=\"width: 100%; height: 100%;\">");
					out.println("<img src=\"/Intsol/IntsolWeb/views/image/clientes/"+i+".png\" class=\"img-responsive ima-cliente\" style=\"width: 100%;\">");
					out.println("</a></div>");
				}
				
				for(int i=0; i<=4;i++){
					out.println("<div class=\"col-xs-2 col-sm-1 col-md-2 col-lg-1 product\" style=\"background-color : #D7E1EA;\" >");
					out.println("<a style=\"width: 100%; height: 100%;\">");
					out.println("<img src=\"/Intsol/IntsolWeb/views/image/clientes/t.png\" class=\"img-responsive ima-cliente\" style=\"width: 100%; opacity: 0;\">");
					out.println("</a></div>");
				}
				%>
		</div>
		
		<div class="container"> <div class="col-md-12" style="height: 40px;"></div></div> <!-- ESPACIO --> 
		<div class="container-fluid">
			<div class="col-md-12" style="height: 40px; background-color:#acabab;">
				<center><p class="p1" style="color: #FFFFFF;padding-top: 5px;">Algunos Testimonios</p></center>
			</div>
		</div>
		<div class="container-fluid">
			
			<div class="cd-testimonials-wrapper cd-container">
				<ul class="cd-testimonials">
					<%
						List<Comentario> c = new ArrayList<Comentario>();
						Comentario c1 = new Comentario("Es muy rápido, es práctico y muy fácil de llevar y generar los reportes. Es una de las cosas que mas me gusta. Si me atoro en algo, allí están para ayudarme siempre tan dispuestos","Universidad Tecnológica de Tecámac","/Intsol/IntsolWeb/views/image/clientes/Comentario1.png");
						Comentario c2 = new Comentario("Para nosotros la adquisición de SIFI NÓNIMA ha sido la mejor decisión, es un programa rápido y práctico que me ahorra tiempos","H. Ayuntamiento de Chicoloapan","/Intsol/IntsolWeb/views/image/clientes/Comentario2.png");
						Comentario c3 = new Comentario("Es un sistema muy amigable, práctico y fácil de manejar que permite llevar un mejor control de los descuentos por conceptos de créditos de Issemym y préstamos personales con descuentos a la nómina","H. Ayuntamiento de Papalotla","/Intsol/IntsolWeb/views/image/clientes/Comentario3.png");
						Comentario c4 = new Comentario("SIFI es un programa de nómina que me ha ayudado a cumplir de manera eficiente y puntual con el trabajo para el pago de los empleados, y que anteriormente absorbia mucho tiempo cada vez que capturaba de manera manual cada uno de los empleados y ahora realizarlo por medio de SIFI es más rápido y seguro <br> Actualmente ocupo menos tiempo en la elaboración de nómina, impresión de recibos, reporte de renumeraciones al personal de mandos medios y superiores permitiéndome cumplir con otras actividades","H. Ayuntamiento de Atenco","/Intsol/IntsolWeb/views/image/clientes/Comentario4.png");
						
						c.add(c1); c.add(c2); c.add(c3); c.add(c4); /*c.add(c1); c.add(c2); c.add(c3); c.add(c4);*/
						
						for(int i=0; i<3;i++){
							out.println("<li>");
							out.println("<p>"+c.get(i).getComment()+"</p>");
							out.println("<div class=\"cd-author\">");
							out.println("<img src=\""+c.get(i).getPathImage()+"\" alt=\"Author image\">");
							out.println("<ul class=\"cd-author-info\">");
							out.println("<li style=\"font-size : 100% !important\">"+c.get(i).getCompany()+"</li>");//  style=\"font-size : 25px !important\"
							out.println("</ul></div></li>");
						}
						
					%>
				</ul> <!-- cd-testimonials -->
				<a href="#0" class="cd-see-all" style="color: white; font-size: 100% !important; text-decoration: none">Ver todos</a>
			</div> <!-- cd-testimonials-wrapper -->
	
	
			<div class="cd-testimonials-all" style="margin: 0px; padding: 0;">
				<div class="cd-testimonials-all-wrapper">
					<ul>
						<%
						for(int i=0;i<c.size();i++){
							out.println("<li class=\"cd-testimonials-item\">");
							out.println("<p>"+c.get(i).getComment()+"</p>");
							out.println("<div class=\"cd-author\">");
							out.println("<img src=\""+c.get(i).getPathImage()+"\" alt=\"Author image\">");
							out.println("<ul class=\"cd-author-info\">");
							out.println("<li style=\"font-size : 100% !important\">"+c.get(i).getCompany()+"</li>");
							out.print("</ul></div></li>");
						}
						%>
					</ul>
				</div>	<!-- cd-testimonials-all-wrapper -->
				<a href="#0" class="close-btn">Close</a>
			</div> <!-- cd-testimonials-all -->
			
		</div>
	</div>
	   <div class="container-fluid footer2" id="footerIntsol"> </div>
<script src="/Intsol/IntsolWeb/test/jquery-2.1.1.js"></script>
<script src="/Intsol/IntsolWeb/test/masonry.pkgd.min.js"></script>
<script src="/Intsol/IntsolWeb/test/jquery.flexslider-min.js"></script>
<script src="/Intsol/IntsolWeb/test/main.js"></script> <!-- Resource jQuery -->

<script type="text/javascript" src="/Intsol/IntsolWeb/views/bootstrap/js/jquery.js"></script>
<script type="text/javascript" src="/Intsol/IntsolWeb/views/bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript" src="/Intsol/IntsolWeb/views/JS.js"></script>
</body>
</html>
<%!
	class Comentario{
	private String comment;
	private String person;
	private String company;
	private String pathImage;
	
	public Comentario(){}
	public Comentario(String comment, String company,String pathImage){this.comment = comment; this.company = company; this.pathImage = pathImage;}
	
	public String getComment(){return this.comment;}
	public void setComment(String comment){ this.comment = comment;}
	public String getPerson(){return this.person;}
	public void setPerson(String person){ this.person= person;}
	public String getCompany(){return this.company;}
	public void setCompany(String company){ this.company= company;}
	public String getPathImage(){return this.pathImage;}
	public void setPathImage(String pathImage){ this.pathImage= pathImage;}
}
%>