function cambiar(num){
var objeto=document.getElementById("el-item-"+num);
cfctCarousel.PagerClick(objeto,objeto);
jQuery("#carousel-cfct-module-34bf495f5ca88e9e490e5594c9c9e3e2 .car-content ul").cycle(num);
}

(function($) {

				cfctCarousel = {};
				cfctCarousel.PagerClick = function(i, el) {
					var _this = $(el);
					var _overlay = _this.parents(".carousel").find(".car-overlay");
					$(".car-header .car-title", _overlay).html($(".car-entry-title", _this).html());
					$(".car-description", _overlay).html( $(".car-entry-description", _this).html());
					$(".car-cta a", _overlay).attr("href", $(".car-entry-cta a", _this).attr("href"));
				};
				cfctCarousel.PagerAnchorBuilder = function(i, el) {
					return "&lt;li&gt;&lt;a href=\"#\"&gt;" + (i+1) + "&lt;/a&gt;&lt;/li&gt;";
				};
})(jQuery);