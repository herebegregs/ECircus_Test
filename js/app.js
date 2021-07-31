document.addEventListener("DOMContentLoaded", function(){

    jQuery.fn.exists = function() {
        return this.length > 0;
    }

    $(window).on("load", function() {
        $("body").removeClass("preload");
      });
});
