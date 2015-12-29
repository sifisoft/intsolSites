	function headerSifi (cuenta,enlace,nProducto,nPesta,nSolucion){
	var no,ki,re,inv,cf; switch(nProducto){ case 1 :no="active"; ki=""; re=""; inv=""; cf=""; break; case 2 :no=""; ki="active"; re=""; inv=""; cf=""; break;
	case 3 :no=""; ki=""; re="active"; inv=""; cf=""; break; case 4 :no=""; ki=""; re=""; inv="active"; cf=""; break; case 5 :no=""; ki=""; re=""; inv=""; cf="active"; break; }
	var pro, so, em; switch (nPesta) { case 1: pro ="active"; break; case 2: so ="active"; break; case 3: em ="active"; break; }
	
	var hosting, desarrollo, soporte, asesoria;
	switch(nSolucion){
	case 1 : hosting = "active"; break;
	case 2 : desarrollo = "active"; break;
	case 3 : soporte = "active"; break;
	case 4 : asesoria = "active"; break;
	}
	
	var string = "<div class=\"container-fluid\">\
				<div class=\"navbar-header\" style=\"padding-left: 2%; padding-right: 2%;\">\
					<button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar-1\">\
						<span class=\"sr-only\">Menu</span>\
						<span class=\"icon-bar\"></span>\
						<span class=\"icon-bar\"></span>\
						<span class=\"icon-bar\"></span>\
					</button>\
					<a class=\"navbar-brand\" href=\"/Intsol\">\
						<img alt=\"INTSOL\" src=\"/Intsol/IntsolWeb/views/image/index/logo.png\" class=\"logo\">\
					</a>\
				</div>\
				<div class=\"collapse navbar-collapse row\" id=\"navbar-1\" style=\"padding-right: 2%; width: 100%; height: 100%\">\
					<ul class=\"nav navbar-nav\">\
						<li class=\"dropdown "+pro+"\">\
							<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\">\
								<strong>Productos <span class=\"caret\"></span></strong>\
							</a>\
							<ul class=\"dropdown-menu\">\
								<li class=\""+no+"\"><a href=\"/Intsol/IntsolWeb/views/jsp/productos/SifiNomina.jsp\">SIFI N&oacute;mina</a></li>\
								<li class=\""+inv+"\"><a href=\"/Intsol/IntsolWeb/views/jsp/productos/SifiInventario.jsp\">SIFI Inventario</a></li>\
								<li class=\""+cf+"\"><a href=\"/Intsol/IntsolWeb/views/jsp/productos/SifiFacturas.jsp\">SIFI Finanzas</a></li>\
							</ul>\
						</li>\<li class=\"dropdown "+so+"\">\
							<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\">\
								<strong>Soluciones <span class=\"caret\"></span></strong>\
							</a>\
							<ul class=\"dropdown-menu\">\
								<li class=\""+hosting+"\"><a href=\"javascript:void(0)\">Hosting</a></li>\
								<li class=\""+desarrollo+"\"><a href=\"/Intsol/IntsolWeb/views/jsp/soluciones/development.jsp\">Desarrollo Web</a></li>\
								<li class=\"divider\"></li>\
								<li class=\""+soporte+"\"><a href=\"/Intsol/IntsolWeb/views/jsp/soporte/soporte.jsp\">Soporte T&eacute;cnico</a></li>\
								<li class=\""+asesoria+"\"><a href=\"javascript:void(0)\">Asesor&iacute;a y Mantenimiento</a></li>\
							</ul>\
						</li>\
						<li class=\""+em+"\" style=\"padding: 0px;\"><a href=\"/Intsol/IntsolWeb/views/jsp/empresa/empresa.jsp\"><strong>Empresa</strong></a></li>\
					</ul>\
					<ul class=\"nav navbar-nav navbar-right\">\
						<li class=\"pull-right\">\
							<a style=\"width:240px; padding: 0px;\">\
								<p class=\"text-right\" style=\"margin-right:7%;padding-bottom: 0px; margin-bottom:5px; height:10px; \">Cont&aacute;ctenos: ventas@sifi.com.mx</p>\
								<p class=\"text-right\" style=\"margin-right:7%;padding-bottom: 0px; margin-bottom:5px; height:11px; \">Tel. (594) 1040 154</p>";
	if(cuenta=="S")	
	string=string+"<p class=\"text-right\" style=\"margin-right:7%;padding-bottom: 0px; margin-bottom:5px; height:11px;\"><a class=\"linkSifi\" onclick=\"window.open('"+enlace+"','','fullscreen,scrollbars,resizable=Yes,titlebars=No, toolbar=No,scrollbars=No,location=No,statusbar=No,menubar=No')\">Mi cuenta</a></p>";
	string=string+"</a>\
						</li>\
					</ul>\
				</div>\
			</div>";
		return string;
}


function goVentas(){ window.location.assign("/Intsol/IntsolWeb/views/jsp/soporte/obtengalo.jsp");}


function footerIntsol(){
	var string ="<div class=\"footer-info\" style=\"padding-left: 2%;\">\
		<div class=\"col-sm-8\">\
			  <h3 class=\"titleF\">Mapa del sitio</h3>\
			  <div class=\"\">\
			  	<ul class=\"map\">\
				  	<li><a href=\"/Intsol\">Inicio</a></li>\
				  	<li><a href=\"/Intsol/IntsolWeb/views/jsp/empresa/empresa.jsp\">Empresa</a></li>\
		<li><a href=\"/Intsol/IntsolWeb/views/jsp/productos/SifiNomina.jsp\">Sifi N&oacute;mina</a></li>\
		<li><a href=\"/Intsol/IntsolWeb/views/jsp/productos/SifiFacturas.jsp\">Sifi Finanzas</a></li>\
		<li><a href=\"/Intsol/IntsolWeb/views/jsp/productos/SifiInventario.jsp\">Sifi Inventario</a></li>\
		<li><a href=\"/Intsol/IntsolWeb/views/jsp/soluciones/development.jsp\">Desarrollo Web</a></li>\
		<li><a href=\"javascript:void(0)\">Hosting</a></li>\
		<li><a href=\"/Intsol/IntsolWeb/views/jsp/soporte/obtengalo.jsp\">Ventas</a></li>\
		<li><a href=\"javascript:void(0)\">Asesor&iacute;a</a></li>\
		<li><a href=\"/Intsol/IntsolWeb/views/jsp/soporte/soporte.jsp\">Soporte</a></li>\
				  </ul>\
			  </div>\
		</div>\
		<div class=\"col-sm-4\">\
			<h3 class=\"titleF\">S&iacute;guenos en:</h3>\
			<ul class=\"social\">\
				<li><a href=\"https://www.facebook.com/SIFI-SOFT-1399008183705717/timeline/\" target=\"_blank\"> <img src=\"/Intsol/IntsolWeb/views/image/footer/blog-fbk.png\" class=\"image_footer facebook\"></a></li>\
				<li><a href=\"http://sifinomina.blogspot.mx/\" target=\"_blank\"> <img src=\"/Intsol/IntsolWeb/views/image/footer/blog-ico.png\" class=\"image_footer blog\"></a></li>\
				<li><a href=\"#\"> <img src=\"/Intsol/IntsolWeb/views/image/footer/blog-twr.png\" class=\"image_footer twitter\" style=\"padding: 0px; margin: 0px;\"></a></li>\
			</ul>\
		</div>\
	</div>\
	<div class=\"clearfix\"></div>\
	<div style=\"padding-bottom: 7px; padding-top: 7px; background: #bebebe;\">\
		<table width=\"100%\">\
			<tr>\
				<td align=\"center\">\
					&copy; Copyright 2015 INTSOL S.A. de C.V. Todos los derechos reservados. T&eacute;rminos legales y Condiciones de uso de INTSOL S.A. de C.V.\
				</td>\
			</tr>\
		</table>\
	</div>";
	
	return string;
}


function setHeaderAndFooter(cuenta,enlace,nProducto,nPesta,nSolucion){
	var s = headerSifi(cuenta,enlace,nProducto,nPesta,nSolucion);
	var header = document.getElementById('headIntsol');
	header.innerHTML = s;
	var footer = document.getElementById('footerIntsol');
	footer.innerHTML = footerIntsol();
	return true;
}


/*Los siguientes métodos son para los formularios que aparecerán en distintos JSP*/



function enviarDesarrollo(){
	var n = document.getElementById("nombre_").value;
	var e = document.getElementById("email_").value;
	var t= document.getElementById("telefono_").value;
	var d= document.getElementById("descripcion_").value;
	if(validarDesarrollo()){
		$.ajax({
			type : 'POST',
			url : '/Intsol/SendEmail',
			data : {from: 'develop',name:n,email:e,phone:t,comment:d},
			success : function(result){
				var cuerpo = getContentModal("Gracias por su confianza", result, "Cerrar");
				$('#myModal').html(cuerpo);
				$("#form-nombre").attr("class","form-group");
				$("#form-email").attr("class","form-group");
				$("#form-descripcion").attr("class","form-group");
				$('#nombre_').val("");
				$('#email_').val("");
				$('#telefono_').val("");
				$('#descripcion_').val("");
				$('#myModal').modal('show');
			}
		})
	}
	
}


function enviarContacto(){
	var n = document.getElementById("nombre_").value;
	var e = document.getElementById("email_").value;
	var t= document.getElementById("telefono_").value;
	if(validarContacto()){
		$.ajax({
			type : 'POST',
			url : '/Intsol/SendEmail',
			data : {from: 'support',name:n,email:e,phone:t},
			success : function(result){
				var cuerpo = getContentModal("Gracias por su confianza, nosotros nos comunicaremos con usted a la brevedad", result, "Cerrar");
				$('#myModal1').html(cuerpo);
				$("#form-nombre").attr("class","form-group");
				$("#form-email").attr("class","form-group");
				$("#form-descripcion").attr("class","form-group");
				$('#nombre_').val("");
				$('#email_').val("");
				$('#telefono_').val("");
				$('#myModal1').modal('show');
			}
		})
	}
	
}


function enviarContactoVentas(){
	var n = document.getElementById("nombre_").value;
	var e = document.getElementById("email_").value;
	var t= document.getElementById("telefono_").value;
	if(validarContacto()){
		$.ajax({
			type : 'POST',
			url : '/Intsol/SendEmail',
			data : {from: 'ventas',name:n,email:e,phone:t},
			success : function(result){
				var cuerpo = getContentModal("Gracias por su confianza, nosotros nos comunicaremos con usted a la brevedad", result, "Cerrar");
				$('#myModal1').html(cuerpo);
				$("#form-nombre").attr("class","form-group");
				$("#form-email").attr("class","form-group");
				$("#form-descripcion").attr("class","form-group");
				$('#nombre_').val("");
				$('#email_').val("");
				$('#telefono_').val("");
				$('#myModal1').modal('show');
			}
		})
	}
	
}


function validarContacto(){
	var n=false;
	var e=false;
	var d=false;
	
	var nombre = document.getElementById("nombre_").value;
	if(nombre==null || nombre.length ==0 || /^\s+$/.test(nombre)){
		$("#form-nombre").attr("class","form-group has-error");
		$("#error-nombre").html("Escriba su nombre");
		n = false;
	}
	else{
		$("#form-nombre").attr("class","form-group has-success");
		$("#error-nombre").html("");
		n = true;
	}

	
	var email = document.getElementById("email_").value;
	if(!IsEmail(email)){
		$("#form-email").attr("class","form-group has-error");
		$("#error-email").html("Ingrese un correo electr&oacute;nico valido");
		e = false;
	}
	else{
		$("#form-email").attr("class","form-group has-success");
		$("#error-email").html("");
		e = true;
	}
	
	var resultado = false;
	if(n==true&&e==true) resultado = true; else resultado = false;
	return resultado;
}


function validarDesarrollo(){
		var n=false;
		var e=false;
		var d=false;
		
		var nombre = document.getElementById("nombre_").value;
		if(nombre==null || nombre.length ==0 || /^\s+$/.test(nombre)){
			$("#form-nombre").attr("class","form-group has-error");
			$("#error-nombre").html("Escriba su nombre");
			n = false;
		}
		else{
			$("#form-nombre").attr("class","form-group has-success");
			$("#error-nombre").html("");
			n = true;
		}
	
		
		var email = document.getElementById("email_").value;
		if(!IsEmail(email)){
			$("#form-email").attr("class","form-group has-error");
			$("#error-email").html("Ingrese un correo electr&oacute;nico valido");
			e = false;
		}
		else{
			$("#form-email").attr("class","form-group has-success");
			$("#error-email").html("");
			e = true;
		}
		
		
		var descripcion = document.getElementById("descripcion_").value;
		if(descripcion==null || descripcion.length ==0 || /^\s+$/.test(descripcion)){
			$("#form-descripcion").attr("class","form-group has-error");
			$("#error-descripcion").html("Ingrese una breve descripci&oacute;n de la aplicaci&oacute;n que se desarrollar&aacute;");
			d = false;
		}
		else{
			$("#form-descripcion").attr("class","form-group has-success");
			$("#error-descripcion").html("");
			d = true;
		}
		
		var resultado = false;
		if(n==true&&e==true&&d==true) resultado = true; else resultado = false;
		return resultado;
}

function IsEmail(email) {
	  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	  return regex.test(email);
}

function getContentModal(header,body,btn_footer){
	var string = "<div class=\"modal-dialog modal-lg\">\
			<div class=\"modal-content\">\
				<div class=\"modal-header\">\
					<button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\
					<h4 class=\"modal-title\">"+header+"</h4>\
				</div>\
				<div class=\"modal-body\">\
					<p>"+body+"</p>\
				</div>\
				<div class=\"modal-footer\">\
					<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">"+btn_footer+"</button>\
				</div>\
			</div></div>";
	return string;
}
