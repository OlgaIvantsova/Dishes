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
        var firstChild = selector.find("img:first-child");
      	var prevChild = firstChild.prev();
        prevChild.remove().css("opacity","1").prependTo(selector);
      	firstChild.remove().css("opacity","1").appendTo(selector);
        
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

   $("#menu-icon").click(function(event) {
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

   $('.choice-item').click(function(event){ 
      event.preventDefault();
      var radioBtn = $(this).find(":radio");
      var attr = radioBtn.attr("checked");
      if(attr == "checked") {
        radioBtn.removeAttr("checked");
        $(this).find(".radiobtn-active").addClass("radiobtn-ic").removeClass("radiobtn-active");
      } else {
        radioBtn.attr("checked","checked");
        $(this).find(".radiobtn-ic").addClass("radiobtn-active").removeClass("radiobtn-ic");
      };
    });

    $('.arrow-down').click(function(e){
            e.preventDefault();
            var oldInputValue = $(this).parent().parent().find('input').val();
            oldInputValue = parseInt(oldInputValue);
            if(!oldInputValue && oldInputValue <= 1){
                return;
            }
            $(this).parent().parent().find('input').val(oldInputValue - 1);
        });
        $('.arrow-top').click(function(e){
            e.preventDefault();
            var oldInputValue = $(this).parent().parent().find('input').val();
            oldInputValue = parseInt(oldInputValue);
            if(!oldInputValue){
              oldInputValue=0;
            }
            $(this).parent().parent().find('input').val(oldInputValue + 1);
        });  
  // $(function(){
  //           $("#datepicker1").datepicker();
  //           $("#datepicker2").datepicker();
  //           $("#datepicker3").datepicker();
  //           $("#datepicker4").datepicker();
  //      });

});