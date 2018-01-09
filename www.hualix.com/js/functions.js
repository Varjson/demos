// is in weixin browser
function is_weixin() {  
    var ua = navigator.userAgent.toLowerCase();
    if(ua.match(/MicroMessenger/i)=="micromessenger") {
        return true;  
    } else {  
        return false;  
    }  
}

function is_mobile() {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/Android|iPad|iPhone/i) === null)
    {
        return false;
    }
    return true;
}

// jump to youzan store
function yz_jump(url, tag) {
    if (is_weixin()) {
       window.location.href = url;
    } else {
       window.location.hash = tag;
    }
}

//LOADER
$(window).on("load", function () {
    "use strict";
    $(".loader").fadeOut(800);
});

jQuery(function ($) {
    "use strict";
    var $window = $(window);

    // ------- Back to Top -------
    $("body").append('<a href="#" class="back-top"><i class="fa fa-angle-up"></i></a>');
    var amountScrolled = 700;
    var backBtn = $("a.back-top");
    $window.on("scroll", function () {
        if ($window.scrollTop() > amountScrolled) {
            backBtn.addClass("back-top-visible");
        } else {
            backBtn.removeClass("back-top-visible");
        }
    });
    backBtn.on("click", function () {
        $("html, body").animate({
            scrollTop: 0
        }, 700);
        return false;
    });
    
    /* ------- jump to youzan ------ */
    $(".yzjump").on("click", function (event) {
        var urls = {
            'taocan': 'https://h5.youzan.com/v2/tag/beknuy8v',
            'peixun': 'https://h5.youzan.com/v2/feature/1i5zj3cuf',
            'maihua': 'https://kdt.im/VJTEnr',
            'qita': 'https://kdt.im/VJTEnr'
        }
        if (is_weixin() || is_mobile())
        {
            if (event.target.id in urls) {
                window.location.href = urls[event.target.id];
                return false;
            }
        }
        return true;
    });

    /* ------- Smooth scroll ------- */
    $(".scroll").on("click", function (event) {
        var menu = $("nav.navbar").innerHeight();
        event.preventDefault();
        $("html,body").animate({
            scrollTop: ($(this.hash).offset().top - 10)
        }, 1000);
    });
      
     /*------ MENU Fixed ------*/
    $window.scroll(function () {
        var $scroll = $window.scrollTop();
        var $navbar = $(".navbar");
        if ($scroll > 100) {
            $navbar.addClass("fixedmenu");
        } else {
            $navbar.removeClass("fixedmenu");
        }
    });
    
    /* ------- Sidebar Toggle ------ */
    $(".menu-icon").on("click",function () {
        $(".overlay-menu").toggleClass("open");
    });
    if($(".full-nav li a").hasClass("scroll")){
     $(".full-nav li a").on("click",function () {
        $(".overlay-menu").removeClass("open");
    });
    }
    
    //Full Height Banner BG
  function resizebanner(){
     $("#text-rotate").css("height", $(window).height());
  }
   $(window).resize(function(){
        resizebanner(); 
    });
     resizebanner();
    
    

    /* ------ Swiper Slider ------ */

    /*Page bannerr*/
    $(".text-rotator").each(function () {
        var $this = $(this);
        $this.find(".swiper-container").swiper({
            effect: "fade",
            autoplay: 3000,
            grabCursor: true,
            paginationClickable: true,
            pagination: $this.find(".swiper-pagination")
        });
    });


    /*Blog*/
    $(".blog_slides").each(function () {
        var $this = $(this);
        $this.find(".swiper-container").swiper({
            setWrapperSize: 'true',
            slidesPerView: 1,
            controlBy: "container",
            effect: "fade",
            autoplay: false,
            speed: 600,
            paginationClickable: true,
            pagination: $this.find(".swiper-pagination")
        });
    });

    /*Teams Slider with 4 slides*/
    $(".ivy-team").each(function () {
        var $this = $(this);
        $this.find(".swiper-container").swiper({
            slidesPerView: 4,
            slidesPerColumn: 1,
            spaceBetween: 20,
            controlBy: "container",
            grabCursor: true,
            autoplayDisableOnInteraction: true,
            autoplay: 2500,
            // Responsive breakpoints
            breakpoints: {
                // when window width is <= 320px
                320: {
                    slidesPerView: 1,
                    spaceBetween: 30
                },
                // when window width is <= 480px
                480: {
                    slidesPerView: 1,
                    spaceBetween: 30
                },
                // when window width is <= 1024px
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 20
                },
                // when window width is <= 1280px
                1280: {
                    slidesPerView: 3,
                    spaceBetween: 20
                }
            },
            // If we need pagination
            paginationClickable: true,
            pagination: $this.find(".swiper-pagination")

        });
    });


    /*Blog OR News for home PAge */
    $(".our-blog").each(function () {
        var $this = $(this);
        $this.find(".swiper-container").swiper({
            slidesPerView: 3,
            spaceBetween: 20,
            grabCursor: true,
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                480: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                900: {
                    slidesPerView: 2,
                    spaceBetween: 20
                }
            },
            paginationClickable: true,
            pagination: $this.find(".swiper-pagination")

        });
    });


    /*Work with us LOGOS*/
    $(".partners").each(function () {
        var $this = $(this);
        $this.find(".swiper-container").swiper({
            slidesPerView: 5, 
            spaceBetween: 15,
            controlBy: 'slide',
            grabCursor: true,
            autoplay: 2500,
            speed: 300,
            // Responsive breakpoints
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 10
                },
                480: {
                    slidesPerView: 2,
                    spaceBetween: 10
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 10
                },
                900: {
                    slidesPerView: 3,
                    spaceBetween: 10
                }
            },
        });
    });

    
    /*Twitter in Slidebar*/
    $(".tweetes").each(function () {
        var $this = $(this);
        $this.find(".swiper-container").swiper({
            slidesPerView: 1,
            autoplay: 3000,
            grabCursor: true,
            controlBy: "container",
        });
    });


    /*Equal Heights*/
    if ($(".equalheight").length) {
        $(".equalheight").matchHeight({
            property: "height"
        });
    }


    /*Toggle POPOVER for share buttns*/
    $(".share").on("click", function () {
        $(".share_purpose").fadeToggle();
    });

    
    /* ------ Revolution*/
    $("#maxo-main").show().revolution({
        sliderType: "standard",
        sliderLayout: "fullscreen",
        fullScreenOffsetContainer: "header",
        scrollbarDrag: "true",
        dottedOverlay: "none",
        delay: 3000,
        navigation: {
            bullets: {
                style: "",
                enable: true,
                rtl: false,
                hide_onmobile: false,
                hide_onleave: false,
                hide_under: 320,
                hide_over: 9999,
                tmp: '',
                direction: "horizontal",
                space: 10,
                h_align: "center",
                v_align: "bottom",
                h_offset: 15,
                v_offset: 30
            },
            arrows: {
                enable: true,
                hide_onmobile: true,
                hide_onleave: false,
                hide_under: 767,
                left: {
                    h_align: "left",
                    v_align: "bottom",
                    h_offset: 20,
                    v_offset: 30,
                },
                right: {
                    h_align: "right",
                    v_align: "bottom",
                    h_offset: 20,
                    v_offset: 30
                },
            },
            touch: {
                touchenabled: "on",
                swipe_threshold: 75,
                swipe_min_touches: 1,
                swipe_direction: "horizontal",
                drag_block_vertical: false,
            }
        },
        viewPort: {
            enable: true,
            outof: "pause",
            visible_area: "90%"
        },
        responsiveLevels: [4096, 1024, 778, 480],
        gridwidth: [1170, 1024, 750, 480],
        gridheight: [600, 500, 500, 350],
        lazyType: "none",
        parallax: {
            type: "mouse",
            origo: "slidercenter",
            speed: 9000,
            levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50],
        },
        shadow: 0,
        spinner: "off",
        stopLoop: "off",
        stopAfterLoops: -1,
        stopAtSlide: -1,
        shuffle: "off",
        autoHeight: "off",
        hideThumbsOnMobile: "off",
        hideSliderAtLimit: 0,
        hideCaptionAtLimit: 0,
        hideAllCaptionAtLilmit: 0,
        debugMode: false,
        fallbacks: {
            simplifyAll: "off",
            nextSlideOnWindowFocus: "off",
            disableFocusListener: false,
        }
    });
    
    
    // =========== Parallax ===========
    if ($window.width() > 1030) {
      $(".parallax").parallax("50%", 0.03);
        $(".page-header").parallax("50%", 0.2);
   }
  


    // +++++  CubeFolio
    // gallery
    $("#work-gallery").cubeportfolio({
        filters: "#work-filters",
        layoutMode: "mosaic",
        defaultFilter: '*',
        animationType: "fadeOut",
        gapHorizontal: 20,
        gapVertical: 20,
        gridAdjustment: "responsive",
        mediaQueries: [{
            width: 1500,
            cols: 3
        }, {
            width: 1100,
            cols: 3
        }, {
            width: 480,
            cols: 2
        }, {
            width: 320,
            cols: 1
        }],
        displayType: "fadeIn",
        displayTypeSpeed: 400,
    });
    
    $("#cube-gallery").cubeportfolio({
        filters: "#cube-filters",
        layoutMode: "grid",
        defaultFilter: '*',
        animationType: "fadeOut",
        gapHorizontal: 20,
        gapVertical: 20,
        gridAdjustment: "responsive",
        mediaQueries: [{
            width: 1500,
            cols: 3
        }, {
            width: 1100,
            cols: 3
        }, {
            width: 480,
            cols: 2
        }, {
            width: 320,
            cols: 1
        }],
        displayType: "fadeIn",
        displayTypeSpeed: 400,
    });
    


    //FancyBox  Popup
    $("[data-fancybox]").fancybox({
        arrows : true,
        infobar : true,
        thumbs: false,
    });


});