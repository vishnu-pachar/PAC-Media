
// Testimonial swiper starts

var testiSwiper = new Swiper(".testiSwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    speed: 1800,
    autoplay: {
        delay: 2000
    },
    navigation: {
        nextEl: ".testi-swiper-next",
        prevEl: ".testi-swiper-prev",
    },
});

// Testimonial swiper ends
// Second section starts
let stp = gsap.matchMedia();

stp.add("(min-width: 991px)", () => {

    // Section enters
    let tlStepEnter = gsap.timeline({
        scrollTrigger: {
            trigger: ".step-sec1",
            start: "15% 80%",
            end: "15% 0%",
            // toggleActions: "play pause resume reset",
            scrub: 1,
            // markers: true
        }
    });

    tlStepEnter.from(".step4", {
        x: -500,
        y: -500,
        opacity: 0,
        rotate: -120,
    }, 0)
    tlStepEnter.from(".step5", {
        y: "100%",
        opacity: 0,
        rotate: 10,
    }, 0)
    tlStepEnter.from(".step6", {
        rotate: 180,
        opacity: 0,
        x: 500,
        y: 500,
    }, 0)


    // Section exits
    let tlStepExit = gsap.timeline({
        scrollTrigger: {
            trigger: ".step-sec1",
            start: "100% 65%",
            end: "100% 20%",
            // toggleActions: "play pause resume reset",
            scrub: 1,
            // markers: true
        }
    });

    tlStepExit.to(".step4", {
        x: -500,
        opacity: 0,
    }, 0)
    tlStepExit.to(".step5", {
        y: "-100%",
        opacity: 0,
    }, 0)
    tlStepExit.to(".step6", {
        x: 500,
        opacity: 0,
    }, 0)
});
// Second section ends

// Third section starts
let thrd = gsap.matchMedia();

thrd.add("(min-width: 991px)", () => {

    // Section enters
    let tlStepEnter = gsap.timeline({
        scrollTrigger: {
            trigger: ".Section-Work",
            start: "15% 80%",
            end: "15% 0%",
            // toggleActions: "play pause resume reset",
            scrub: 1,
            // markers: true
        }
    });

    tlStepEnter.from(".step7", {
        x: -500,
        y: -500,
        opacity: 0,
        rotate: -120,
    }, 0)
    tlStepEnter.from(".step8", {
        y: "100%",
        opacity: 0,
        rotate: 10,
    }, 0)
    tlStepEnter.from(".step9", {
        rotate: 180,
        opacity: 0,
        x: 500,
        y: 500,
    }, 0)


    // Section exits
    let tlStepExit = gsap.timeline({
        scrollTrigger: {
            trigger: ".Section-Work",
            start: "100% 65%",
            end: "100% 20%",
            // toggleActions: "play pause resume reset",
            scrub: 1,
            // markers: true
        }
    });

    tlStepExit.to(".step7", {
        x: -500,
        opacity: 0,
    }, 0)
    tlStepExit.to(".step8", {
        y: "-100%",
        opacity: 0,
    }, 0)
    tlStepExit.to(".step9", {
        x: 500,
        opacity: 0,
    }, 0)
});
// Third section ends
// step section starts
let mmm = gsap.matchMedia();

mmm.add("(min-width: 991px)", () => {

    // Section enters
    let tlStepEnter = gsap.timeline({
        scrollTrigger: {
            trigger: ".step-sec",
            start: "15% 80%",
            end: "15% 0%",
            // toggleActions: "play pause resume reset",
            scrub: 1,
            // markers: true
        }
    });

    tlStepEnter.from(".step1", {
        x: -500,
        y: -500,
        opacity: 0,
        rotate: -120,
    }, 0)
    tlStepEnter.from(".step2", {
        y: "100%",
        opacity: 0,
        rotate: 10,
    }, 0)
    tlStepEnter.from(".step3", {
        rotate: 180,
        opacity: 0,
        x: 500,
        y: 500,
    }, 0)


    // Section exits
    let tlStepExit = gsap.timeline({
        scrollTrigger: {
            trigger: ".step-sec",
            start: "100% 65%",
            end: "100% 20%",
            // toggleActions: "play pause resume reset",
            scrub: 1,
            // markers: true
        }
    });

    tlStepExit.to(".step1", {
        x: -500,
        opacity: 0,
    }, 0)
    tlStepExit.to(".step2", {
        y: "-100%",
        opacity: 0,
    }, 0)
    tlStepExit.to(".step3", {
        x: 500,
        opacity: 0,
    }, 0)
});
// step section ends

$(document).ready(function () {
    $("video").prop('muted', true);

    $("video").click(function () {
        $(this).prop('muted', !$(this).prop('muted'));
        $(this).parent().find(".mute").toggle();
        $(this).parent().find(".unmute").toggle();
    });

    $(".speakers").click(function () {
        $(this).parent().find("video").prop('muted', !$(this).parent().find("video").prop('muted'));
        $(this).find(".mute").toggle();
        $(this).find(".unmute").toggle();
    });
});


/*Counter Script*/
var a = 0;
$(window).scroll(function () {
    var oTop = $(".counter-sec").offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
        $(".counter-value").each(function () {
            var $this = $(this),
                countTo = $this.attr("data-count");
            $({
                countNum: $this.text(),
            }).animate(
                {
                    countNum: countTo,
                },
                {
                    duration: 1200,
                    easing: "swing",
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                    },
                }
            );
        });
        a = 1;
    }
});
/*Counter Script ends*/

// banefit flip card

if ($(window).width() > 991) {
    $(document).on("mouseenter", ".flip-front", function () {
        $(this).parent().addClass("active");
    });

    $(document).on("mouseleave", ".flip-back", function () {
        $(this).parent().removeClass("active");
    });
} else {
    $(document).on("click", ".flip-front", function () {
        $(this).parent().addClass("active");
    });

    $(document).on("click", ".flip-back", function () {
        $(this).parent().removeClass("active");
    });
}

// banefit flip card (we will edit this.)

// FAQ Accordian
var acc = document.querySelectorAll(".acc-gradient");

$(".acc-container .acc-gradient:first-child").addClass("active");
$(".acc-container .acc-gradient:nth-child(1) .faq-detail").slideDown();

acc.forEach((el) =>
    el.addEventListener("click", () => {
        if (el.classList.contains("active")) {
            $(el).find(".faq-detail").slideUp();
            $(el).removeClass("active");
        } else {
            $(".faq-detail").slideUp();
            $(".acc-gradient").removeClass("active");
            $(el).find(".faq-detail").slideDown();
            $(el).addClass("active");
        }
    })
);
  // FAQ Accordian