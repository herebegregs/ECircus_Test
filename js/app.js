document.addEventListener("DOMContentLoaded", function(){

    jQuery.fn.exists = function() {
        return this.length > 0;
    }

    $(window).on("load", function() {
        $("body").removeClass("preload");
      });

      const swiper = new Swiper('.swiper-container', {
        loop: false,
        slidesPerGroup: 4,
        loopFillGroupWithBlank: true,
        slidesPerView: 4,
        spaceBetween: 20,
        pagination: {
          el: '.swiper-pagination',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });
});
