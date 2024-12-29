$(document).ready(function () {
    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear')
    });
});

document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Portfolio | CodeWithTanveer";
            $("#favicon").attr("href", "assets/images/favicon.jpg");
        }
        else {
            document.title = "Portfolio | Tanveer Ahmad";
            $("#favicon").attr("href", "assets/images/favicon.jpg");
        }
    });
// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
    strings: ["Front-End Developer", "SQL Developer", "Java Full Stack Developer"],
    loop: true,
    typeSpeed: 60,
    backSpeed: 30,
    backDelay: 500,
});






    


