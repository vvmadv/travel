$(document).ready(function () {
    $(".testimonial-slider").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: false,
        autoplaySpeed: 5000,
    });

    // mobile menu
    $(".mobile-burger").click(function () {
        $(".mobile-burger span").toggleClass("active")
        $(".menu").toggleClass("open")
        $(".nav").toggleClass("open")
        $(".works").toggleClass("active")
        if ($(".header-bottom").hasClass("fixed") && $(".nav").hasClass("open")) {
            $("body").addClass("overlay")
        } else {
            $("body").removeClass("overlay")
        }
    })

        // $(".unactive").slick({
        //     settings:"unslick"
        // }) 
    

    let headerBottom = $(".header-bottom")
    $(document).scroll(function () {
        if ($(".header-bottom").hasClass("fixed") && $(".nav").hasClass("open")) {
            $("body").addClass("overlay")
        } else {
            $("body").removeClass("overlay")
        }
        
        if ($(this).scrollTop() > 782) {
            headerBottom.addClass("fixed")
            if (headerBottom.hasClass("fixed")) {}
        } else {
            headerBottom.removeClass("fixed")
        }
    })

});
