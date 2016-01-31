function scrollRightGallery(selector) {
  selector = $(selector);
    if($(document).all) {
      selector.find("img:first-child").fadeOut().appendTo(selector);
      selector.find("img:first-child").fadeIn();
    } else{
      selector.find("img:first-child").animate({"opacity":"0"}, 300, function(){
      selector.find("img:first-child").remove().css("opacity","1").appendTo(selector);
      });
    }
}

function scrollLeftGallery(selector) {
  selector = $(selector);
    if($(document).all) {
      selector.find("img:first-child").fadeOut().appendTo(selector);
      selector.find("img:first-child").fadeIn();
    } else{
      selector.find("img:first-child").animate({"opacity":"0"}, 300, function(){
      	var lastChild = selector.find("img:last-child");
      	selector.find("img:first-child").remove().css("opacity","1").appendTo(selector);
        lastChild.remove().css("opacity","1").prependTo(selector);
    });
    }
}

$(document).ready(function () {
   $('#scroll-right').click(function(event) {
   		event.preventDefault();
   		scrollRightGallery('.gallery');
   	});

   $('#scroll-left').click(function(event) {
   		event.preventDefault();
   		scrollLeftGallery('.gallery');
   	});
   $("#menu-icon").on("click", function(event) {
      var menu = $(".header-menu");
      event.preventDefault();
       menu.slideToggle();
       $(window).resize(function() {
       var wid = $(window).width();
       if (wid>760&&menu.is(":hidden")) {
       menu.removeAttr("style");
      };
    });
  });
});