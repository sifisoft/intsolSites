$(document).ready(function(){
$(".sub-footer a").each(function() {
	$(this).bind("click",function(){
	load_process(this.id);
	});
});
});
function load_process(id){
	if(id=="" || id == null){
		return;
	}
	
	if(CojerCookie("ptl")==id+".html"){return;}
	
	Inventario.Historial.addHistory(CojerCookie("ptl"));
	GuardarCookie("ptl",id+".html",Caduca(31));
	load_content(id + ".html",false);
}