<%@page import="java.util.ArrayList"%>
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<link rel="stylesheet" href="/Intsol/IntsolWeb/test/reset.css"> <!-- CSS reset -->
<link rel="stylesheet" href="/Intsol/IntsolWeb/test/style.css"> <!-- Resource style -->
<script src="/Intsol/IntsolWeb/test/modernizr.js"></script> <!-- Modernizr -->
<style type="text/css">
html {height: 100%; margin: 0 !important; padding: 0 !important;}
body{height: 100%%; width: 100%; padding: 0px; margin: 0px;}
</style>
</head>
<body>
	<div  style="top:0px; margin-top: 0px;height: 100%;width: 100%" class="cd-container">
	<div class="cd-testimonials-wrapper cd-container">
		<ul class="cd-testimonials">
			<%
				List<Comentario> c = new ArrayList<Comentario>();
				Comentario c1 = new Comentario("Es muy rápido, es práctico y mur fácil de llevar y generar los reportes. Es una de las cosas que mas me gusta. Si me atoro en algo, así están para ayudarme siempre tan dispuestos    Es muy rápido, es práctico y mur fácil de llevar y generar los reportes. Es una de las cosas que mas me gusta. Si me atoro en algo, así están para ayudarme siempre tan dispuestos","Universidad Tecnológica de Tecámac","/Intsol/IntsolWeb/views/image/clientes/ICO1.png");
				Comentario c2 = new Comentario("Para nosotros la adquisición de SIFI NÓNIMA ha sido la mejor decisión, es un programa rápido y práctico que me ahorra tiempos","H. Ayuntamiento de Chicoloapan","/Intsol/IntsolWeb/views/image/clientes/Logo_P.png");
				Comentario c3 = new Comentario("Es un sistema muy amigable, práctico y fácil de manejar que permite llevar un mejor control de los descuentos por conceptos de créditos de Issemym y préstamos personales con descuentos a la nómina","H. Ayuntamiento de Papalotla","/Intsol/IntsolWeb/views/image/clientes/Logo_P.png");
				Comentario c4 = new Comentario("SIFI es un programa de nómina que me ha ayudado a cumplir de manera eficiente y puntual con el trabajo para el pago de los empleados, y que anteriormente absorbia mucho tiempo cada vez que capturaba de manera manual cada uno de los empleados y ahora realizarlo por medio de SIFI es más rápido y seguro <br> Actualmente ocupo menos tiempo en la elaboración de nómina, impresión de recibos, reporte de renumeraciones al personal de mandos medios y superiores permitiéndome cumplir con otras actividades","H. Ayuntamiento de Atenco","/Intsol/IntsolWeb/views/image/clientes/Logo_P.png");
				
				c.add(c1); c.add(c2); c.add(c3); c.add(c4); c.add(c1); c.add(c2); c.add(c3); c.add(c4);
				
				for(int i=0; i<3;i++){
					out.println("<li>");
					out.println("<p>"+c.get(i).getComment()+"</p>");
					out.println("<div class=\"cd-author\">");
					out.println("<img src=\""+c.get(i).getPathImage()+"\" alt=\"Author image\">");
					out.println("<ul class=\"cd-author-info\">");
					out.println("<li>"+c.get(i).getCompany()+"</li>");
					/*out.println("<li>"+c.get(i).getPerson()+"</li>");*/
					out.println("</ul></div></li>");
				}
				
			%>
		</ul> <!-- cd-testimonials -->
		<a href="#0" class="cd-see-all" style="margin: 0px; padding: 0px;">Ver todos</a>
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
					out.println("<li>"+c.get(i).getCompany()+"</li>");
					out.print("</ul></div></li>");
				}
				%>
			</ul>
		</div>	<!-- cd-testimonials-all-wrapper -->
		<a href="#0" class="close-btn">Close</a>
	</div> <!-- cd-testimonials-all -->
	</div>
	
<script src="/Intsol/IntsolWeb/test/jquery-2.1.1.js"></script>
<script src="/Intsol/IntsolWeb/test/masonry.pkgd.min.js"></script>
<script src="/Intsol/IntsolWeb/test/jquery.flexslider-min.js"></script>
<script src="/Intsol/IntsolWeb/test/main.js"></script> <!-- Resource jQuery -->

</body>
</html>
<%!
	public class Comentario{
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