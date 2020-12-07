@@include('support_webp.js');

document.getElementsByClassName('wrapper')[0].classList.add('loaded');

// $('.icon-menu').click(function (event) {
//     $(this).toggleClass('active');
//     $('.menu__body').toggleClass('active');
//     $('body').toggleClass('lock');
// });

function ibg() {

    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    }
}

ibg();

let navOpen = document.getElementById('navOpen');
let navClose = document.getElementById('navClose');

document.getElementById('navContent').style.display = "none";
// document.getElementById('navContent').style.display = "block";

// navOpen.style.display = "none";

navOpen.addEventListener("click", function () {
    document.getElementById('openBtn').style.transform = "rotate(90deg) !important";

    document.getElementById('navContent').style.display = "block";
    // navOpen.style.display = "none";
});

navClose.addEventListener("click", function () {
    document.getElementById('openBtn').style.transform = "rotate(90deg) !important";

    document.getElementById('navContent').style.display = "none";
    // navOpen.style.display = "block";
});

/*owl carousel */

$('.owl-carousel').owlCarousel({
    loop: true,
    nav: true,
    autoplay: true,
    dots: false,
    navText: [
        "<img src=\'img/icons/left-arrow.png\'>",
        "<img src=\'img/icons/right-arrow.png\'>"
    ],
    margin: 10,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        480: {
            items: 1,
            nav: true
        },
        768: {
            items: 2,
            nav: false
        },
        993: {
            items: 3,
            nav: true,
            loop: false
        },
        1440: {
            items: 4,
            nav: true,
            loop: false
        }
    }
})