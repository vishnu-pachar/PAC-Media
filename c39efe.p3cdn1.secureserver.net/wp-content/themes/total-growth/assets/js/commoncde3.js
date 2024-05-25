/*================================= Sticky Header Starts =================================*/




function fixedHeader() {
    var sticky = $('#header'),
        scroll = $(window).scrollTop();
    if (scroll >= 10) sticky.addClass('fixHeader');
    else sticky.removeClass('fixHeader');
}






$(window).scroll(function (e) {
    fixedHeader();
});
fixedHeader();
/* Sticky Header Ends */


$('#header').load('header.html', function () {
    fixedHeader();
    if ($(window).outerWidth() <= 990) {
        var MobileMenu = new MobileNav({
            initElem: "nav",
            menuTitle: "Menu",
        });
    }
    const navItems = document.querySelectorAll(".nav-item");
    navItems.forEach((item) => {
        const hasDropdowns = item.querySelector(".dropdown") !== null;
        if (hasDropdowns) {
            item.classList.add("dr-icon");
        }
    });


    // const btns = document.querySelectorAll(".button");
    // console.log(btns);
    // btns.forEach((btn) => {
    //     btn.addEventListener("mousemove", function (e) {
    //         const position = btn.getBoundingClientRect();
    //         const x = e.pageX - position.left - position.width / 2;
    //         const y = e.pageY - position.top - position.height / 2;
    //         btn.style.transform =
    //             "translate(" + x * 0.3 + "px, " + y * 0.5 + "px)";
    //     });
    // });

    // btns.forEach((btn) => {
    //     btn.addEventListener("mouseout", function (e) {
    //         btn.style.transform = "translate(0px, 0px)";
    //     });
    // });
});

$('#footer').load('footer.html');


/* common tab start */
$('.tabgroup > div').hide();
$('.tabgroup > div:first-of-type').show();
$('.tabs a').click(function (e) {
    e.preventDefault();
    var $this = $(this),
        tabgroup = '#' + $this.parents('.tabs').data('tabgroup'),
        others = $this.closest('li').siblings().children('a'),
        target = $this.attr('href');
    others.removeClass('active');
    $this.addClass('active');
    $(tabgroup).children('div').hide();
    $(target).show();
});
/* common tab end */



/* Form Feild Functionality */
$(document).on('input', '.form-field', function () {
    if ($(this).val().length > 0) {
        $(this).addClass('field--not-empty');
    } else {
        $(this).removeClass('field--not-empty');
    }
});
/* Form Feild Functionality ends */



/* Password View */
$(document).on('click', '.view-pass', function () {

    inp = $(this).parents('.form-grp').find('input');
    type = inp.attr('type');

    if (type == 'password') {
        inp.attr('type', 'text');
        $(this).removeClass('ph-eye-slash').addClass('ph-eye');
    } else {
        inp.attr('type', 'password');
        $(this).removeClass('ph-eye').addClass('ph-eye-slash');
    }
});
/* // Password View */


$(document).ready(function () {
    var magnets = document.querySelectorAll('.button')
    var strength = 50

    magnets.forEach((magnet) => {
        magnet.addEventListener('mousemove', moveMagnet);
        magnet.addEventListener('mouseout', function (event) {
            TweenMax.to(event.currentTarget, 1, { x: 0, y: 0, ease: Power4.easeOut })
        });
    });

    function moveMagnet(event) {
        var magnetButton = event.currentTarget
        var bounding = magnetButton.getBoundingClientRect()

        //console.log(magnetButton, bounding)

        gsap.to(magnetButton, 1, {
            x: (((event.clientX - bounding.left) / magnetButton.offsetWidth) - 0.5) * strength,
            y: (((event.clientY - bounding.top) / magnetButton.offsetHeight) - 0.5) * strength,
            ease: Power4.easeOut
        })

        //magnetButton.style.transform = 'translate(' + (((( event.clientX - bounding.left)/(magnetButton.offsetWidth))) - 0.5) * strength + 'px,'+ (((( event.clientY - bounding.top)/(magnetButton.offsetHeight))) - 0.5) * strength + 'px)';
    }


    var magnets = document.querySelectorAll('.people-img')
    var strength = 50

    magnets.forEach((magnet) => {
        magnet.addEventListener('mousemove', moveMagnet);
        magnet.addEventListener('mouseout', function (event) {
            TweenMax.to(event.currentTarget, 1, { x: 0, y: 0, ease: Power4.easeOut })
        });
    });

    function moveMagnet(event) {
        var magnetButton = event.currentTarget
        var bounding = magnetButton.getBoundingClientRect()

        //console.log(magnetButton, bounding)

        gsap.to(magnetButton, 1, {
            x: (((event.clientX - bounding.left) / magnetButton.offsetWidth) - 0.5) * strength,
            y: (((event.clientY - bounding.top) / magnetButton.offsetHeight) - 0.5) * strength,
            ease: Power4.easeOut
        })

        //magnetButton.style.transform = 'translate(' + (((( event.clientX - bounding.left)/(magnetButton.offsetWidth))) - 0.5) * strength + 'px,'+ (((( event.clientY - bounding.top)/(magnetButton.offsetHeight))) - 0.5) * strength + 'px)';
    }



    var textAnim = document.querySelectorAll(".text-gradient")


    textAnim.forEach(section => {
        gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "0% 65%",
                end: "0% 65%",
                toggleActions: "play none none reverse",
                // scrub: 1,
                // markers: true
            }
        }).to(section, {
            backgroundSize: "100%",
            backgroundPosition: "0% 0%",
            duration: 1.5,
            ease: "back.out(1.2)"
        })
    });




});