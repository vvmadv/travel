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
    let scrollTop = 0;
    $(".mobile-burger").click(function () {
        scrollTop = window.scrollY;
        // console.log(scrollTop);
        $(".mobile-burger span").toggleClass("active")
        $(".menu").toggleClass("open")
        $(".nav").toggleClass("open")
        $(".works").toggleClass("active")
        if ($(".header-bottom").hasClass("fixed") && $(".nav").hasClass("open")) {
            $("body").addClass("overlay")
        } else {
            $("body").removeClass("overlay")
        }
        if($("body").hasClass("overlay")) {
            window.scrollTo(0, scrollTop)
        }
    })

        $(".header-link").click(function (e) {
            e.preventDefault()
           $("html, body").animate({
            scrollTop: $(".header-bottom").offset().top
           }, 800)
           return false; 
        }) 

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
