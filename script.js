


var swiper = new Swiper(".mySwiper", {
        slidesPerView: 2.2,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 3000, // Autoplay with 3 seconds delay
            disableOnInteraction: false, // Continue autoplay after user interaction
        },
});