$(document).ready(function () {

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        dots: true,
        autoplay: true,
        autoplayTimeout: 4000,
        responsiveClass: true,
        responsive: {
            0: {
                autoplay: false,
                items: 1
            },
            600: {
                autoplay: false,
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    //SMOOTH SCROLL FOR IE/ EDGE /SAFARI
    
    $("a").on('click', function(event) {
        
        if (this.hash !== " ") {
            event.preventDefault();
            
            var hash = this.hash;
            
            $('html, body').animate({
                scrollTop: $(hash).offset().top
                }, 600, function(){
                window.location.hash = hash;   
            });
        }
    });

    //STICKY MENU
    $(".js-content-section").waypoint(function (direction) {

        if (direction == "down") {
            $("nav").addClass("sticky");
        } else {
            $("nav").removeClass("sticky");
        }


    });
});

//MOBILE MENU

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}