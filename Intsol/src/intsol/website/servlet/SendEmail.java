package intsol.website.servlet;


import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;

@WebServlet("/SendEmail")
public class SendEmail extends HttpServlet {
	private static final long serialVersionUID = 1L;

    public SendEmail() {
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.getWriter().println("HOLA :)");
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		if(request.getContentLength()>0){
		Logger logEmail = Logger.getLogger("com.sifiS_MAIL");
		String from = request.getParameter("from");
		String nombre = request.getParameter("name");
		String email = request.getParameter("email");
		String phone = request.getParameter("phone");
		String comment = request.getParameter("comment");
		if(from.equals("develop")){
			logEmail.error("\nExiste una nueva petición de desarrollo de sistema nueva. "
					+ "Detalles:\n\n"
					+ "Nombre: "+nombre+"\n"
					+ "Email: "+email+"\n"
					+ "Telefono: "+phone+"\n"
					+ "Petición: "+comment+"\n\nPor favor póngase en contacto a la brevedad"
					);
			response.getWriter().println("Su solicitud ha sido recibida exitosamente");
		}
		else if(from.equals("support")){
			logEmail.error("\nExiste una nueva petición de contácto para Soporte Técnico. "
					+ "Detalles:\n\n"
					+ "Nombre: "+nombre+"\n"
					+ "Email: "+email+"\n"
					+ "Telefono: "+phone+"\n\nPor favor póngase en contacto a la brevedad");
			response.getWriter().println("Su solicitud ha sido recibida exitosamente");
		}
		else if(from.equals("ventas")){
			logEmail.error("\nLa siguiente persona esta interesada en un producto SIFI. "
					+ "Detalles:\n\n"
					+ "Nombre: "+nombre+"\n"
					+ "Email: "+email+"\n"
					+ "Telefono: "+phone+"\n\nPor favor póngase en contacto a la brevedad");
			response.getWriter().println("Su solicitud ha sido recibida exitosamente");
		}
		
		}
		else{
			System.out.println("Empty Request");
		}
	}

}