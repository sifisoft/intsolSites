$(document).ready(function(){
 	$('ul.thumb li').Zoomer({speedView:300,speedRemove:100,altAnim:true,speedTitle:400,debug:false});
    $(".showPacket").click(function() {
    	switch(this.id){
    	case "1":
    		JoinMe.Content.updateMainContent("getit/licencia.html");
    		break;
    	case "2":
    		JoinMe.Content.updateMainContent("getit/renta.html");
    		break;
    	case "3":
    		JoinMe.Content.updateMainContent("getit/online.html");
    		break;
    	}
    });
});