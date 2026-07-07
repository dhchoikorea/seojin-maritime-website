/*
==========================================================
SEOJIN MARITIME CO., LTD.
Official Website v1.0
main.js
==========================================================
*/

document.addEventListener("DOMContentLoaded", function () {

    "use strict";

    /* ======================================================
       NAVBAR SCROLL
    ====================================================== */

    const navbar = document.querySelector(".navbar");

    function navbarScroll() {

        if (!navbar) return;

        if (window.scrollY > 80) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    }

    navbarScroll();

    window.addEventListener("scroll", navbarScroll);



    /* ======================================================
       HERO SLIDER
    ====================================================== */

    const heroSlider = document.querySelector("#mainSlider");

    if (heroSlider && typeof bootstrap !== "undefined") {

        new bootstrap.Carousel(heroSlider, {

            interval: 5000,

            pause: false,

            touch: true,

            wrap: true

        });

    }



    /* ======================================================
       INTERSECTION OBSERVER
    ====================================================== */

    const observer = new IntersectionObserver(function(entries){

        entries.forEach(function(entry){

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:0.15

    });



    document.querySelectorAll(

        ".business-card," +

        ".product-card," +

        ".history-box," +

        ".news-card," +

        ".shadow-box," +

        ".contact-info"

    ).forEach(function(item){

        item.classList.add("fade-item");

        observer.observe(item);

    });



    /* ======================================================
       COUNTER
    ====================================================== */

    const counters = document.querySelectorAll(".counter-item h2");

    counters.forEach(function(counter){

        const original = counter.innerText;

        const number = parseInt(original.replace(/[^0-9]/g,""));

        if(isNaN(number)) return;

        const suffix = original.replace(/[0-9]/g,"");

        let current = 0;

        const step = Math.max(1, Math.ceil(number / 80));

        function update(){

            current += step;

            if(current >= number){

                counter.innerText = number + suffix;

                return;

            }

            counter.innerText = current + suffix;

            requestAnimationFrame(update);

        }

        update();

    });



    /* ======================================================
       SMOOTH SCROLL
    ====================================================== */

    document.querySelectorAll('a[href^="#"]').forEach(function(anchor){

        anchor.addEventListener("click", function(e){

            const target = document.querySelector(this.getAttribute("href"));

            if(target){

                e.preventDefault();

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });

});
