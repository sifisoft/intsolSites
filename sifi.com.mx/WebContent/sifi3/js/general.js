function formSubmit(){

	var action = $(".slides form").attr("action");

	$(".slides form").submit(function(event) {
    	event.preventDefault();
    	$.post( action, {  },
      		function( data ) {
          		$(".slides form").parent("div").html( data );
      	}
    );

    });
	
}

/* APLICA PLUGIN A LOS MENÚS */
$(function(){
	formSubmit();	
});