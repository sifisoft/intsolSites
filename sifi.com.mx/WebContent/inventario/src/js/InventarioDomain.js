var Inventario = new function Inventario(){
	this.commonSingletonInstance = null;

    // Get the instance of the class
    // If there's none, instanciate one
    var getInstance = function ()
    {
    	
        if (!this.commonSingletonInstance)
        {
            this.commonSingletonInstance = new createInstance();
        }
        return this.commonSingletonInstance;
    };
	
	   var createInstance = function (){
		var $this = this;
		var f_showanimation=true;
		this.Historial = new function(){

		this.createHistory = function(){
			GuardarCookie("history_back","0",Caduca(31));
			var a = [" "];
			var cookieStr = '';
			for(var i=0;i<a.length;i++) {
			    cookieStr += a[i]+',';
			}
			cookieStr = cookieStr.substr(0,cookieStr.length-1);
			
			if(CojerCookie("historial")==null){
			GuardarCookie("historial",cookieStr,Caduca(31));
			//alert(cookieStr);
			return true;
			}else{
			if(CojerCookie("historial").split(",").length>1){
			setTimeout('$("#go-back").fadeIn(500);',1500);
			}
			return false;
			}
		};
		
		this.addHistory = function(item){
			var historial;
			historial = CojerCookie("historial");
			//alert(historial);
			if(item == null || item == ""){
				return false;
			}
			if(historial==null){
				$this.Historial.createHistory();
			}
			historial_a = historial.split(",");
			//alert(CojerCookie("ptl"));
			//alert(item);
			historial_a[historial_a.length]=item;
			var i;
			var cookieStr='';
			//Serialize
			for(i=0;i<historial_a.length;i++){
				cookieStr += historial_a[i]+',';
			}
			cookieStr = cookieStr.substr(0,cookieStr.length-1);
			//saveCookie
			GuardarCookie("historial",cookieStr,Caduca(31));
			GuardarCookie("history_back","1",Caduca(31));
			setTimeout('$("#go-back").fadeIn(500);',500);
			if(f_showanimation){
			$this.Historial.info_animation();
			}
			return true;
		};
		
		this.clearHistory =  function(){
			BorrarCookie("historial");
		};
		this.info_animation = function(){
			setTimeout('$("#shower").animate({top:110,opacity:1},500,function(){$(".info_div").fadeIn(800);});',500);
			$("#sta").bind('click',function(){
				$this.Historial.stopAnimation();
			});
		};
		this.stopAnimation = function(){
			
				$(".info_div").fadeOut(500);
				$("#shower").fadeOut(500,function(){
				$("#shower").css({top:"260px",opacity:1});
				});
			
			f_showanimation=false;
		};
		this.getHistory = function(){
			var historial = CojerCookie("historial");
			if(historial==null){
			$this.Historial.createHistory();
			return CojerCookie("historial").split(",");
			}else{
			return CojerCookie("historial").split(",");
			}
		};
		this.getLastItem = function(){
			var historial = $this.Historial.getHistory();
			return historial[historial.length-1];
		};
		this.serialize = function(historial){
			var cookieStr='';
			//Serialize
			var i;
			for(i=0;i<historial.length;i++){
				cookieStr += historial[i]+',';
			}
			cookieStr = cookieStr.substr(0,cookieStr.length-1);
			//saveCookie
			GuardarCookie("historial",cookieStr,Caduca(31));
		}
		this.removeItem = function(){
			var historial = $this.Historial.getHistory();
			historial.pop();
			$this.Historial.serialize(historial);
		};
		this.go_back = function(){
			var ptl = $this.Historial.getLastItem();
			$this.Historial.removeItem();
			var historial = CojerCookie("historial").split(",");
			if(historial.length<2){
				GuardarCookie("history_back","0",Caduca(31));
				$("#go-back").fadeOut(10);
			}
	    	if(ptl!=null){
	    		 window.parent.frames[0].JoinMe.Content.updateMainContent(ptl);
	    		 GuardarCookie("ptl",ptl,Caduca(31));
	    	}
	    	
		};
		
		};
	    };

	   return getInstance();

}; 