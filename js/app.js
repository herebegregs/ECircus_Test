document.addEventListener("DOMContentLoaded", function(){

    jQuery.fn.exists = function() {
        return this.length > 0;
    }

    $(window).on("load", function() {
        $("body").removeClass("preload");
      });

      const swiper = new Swiper('.swiper-container', {
        loop: false,
        breakpoints: {
            991: {
                slidesPerGroup: 4,
                loopFillGroupWithBlank: true,
                slidesPerView: 4,
                spaceBetween: 20,
            },
            768: {
                slidesPerGroup: 3,
                loopFillGroupWithBlank: true,
                slidesPerView: 3,
                spaceBetween: 20,
            },
            640: {
                slidesPerGroup: 2,
                loopFillGroupWithBlank: true,
                slidesPerView: 2,
                spaceBetween: 20,
            }
        },
        slidesPerView: 1,
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
