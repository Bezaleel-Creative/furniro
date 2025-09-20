const menuBtn = document.querySelector(".open-menu i")
const closeBtn = document.querySelector(".close-menu i")
const menu = document.querySelector(".links")

menuBtn.addEventListener("click", ()=>{
    menu.classList.add("show")
    closeBtn.classList.add("active")
    menuBtn.style.display = "none"
})

closeBtn.addEventListener("click", ()=>{
    menu.classList.remove("show")
    closeBtn.classList.remove("active")
    menuBtn.style.display = "block"
})


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
        breakpoints: {
            // when window width is >= 0px
            0: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            // when window width is >= 580px
            580: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        }
});





