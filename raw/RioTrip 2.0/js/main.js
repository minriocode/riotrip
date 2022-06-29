(function ($) {
    "use strict";

    $(document).ready(function($){
 
        // homepage slider
		$(".slider-area").owlCarousel({
            items: 1,
            loop: false,
            autoplay: true,
            nav: false,
            dots: false,
			mouseDrag: false,
			animateOut: 'fadeOut',
			lazyLoad: true,
            responsive:{
                0:{
                    items:1,
                    nav:false,
                    loop:true
                },
                600:{
                    items:1,
                    nav:true,
                    loop:true
                },
                1000:{
                    items:1,
                    nav:true,
                    loop:true
                }
            }
        });
/* 		
        $(".package-carousel").owlCarousel({
            items: 4,
            loop: true,
            autoplay: false,
            nav: true,
            dots: false,
            navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
			responsiveClass:true,
			lazyLoad: true,
            responsive:{
                0:{
                    items:1,
                    nav:false,
                    loop:true
                },
                600:{
                    items:3,
                    nav:true,
                    loop:true
                },
                1000:{
                    items:4,
                    nav:true,
                    loop:true
                }
            }
        }); */

        $(".hotels-carousel").owlCarousel({
            items: 2,
            loop: true,
            autoplay: false,
            nav: true,
            dots: false,
            navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
			responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:false,
                    loop:true
                },
                600:{
                    items:1,
                    nav:true,
                    loop:true
                },
                1000:{
                    items:2,
                    nav:true,
                    loop:true
                }
            }
        });

        // stikcy js
        $("#sticker").sticky({
            topSpacing: 0
        });  
    });


    jQuery(window).on("load",function(){
        jQuery(".loader").fadeOut(1000);
    });
	
    
	
}(jQuery));

