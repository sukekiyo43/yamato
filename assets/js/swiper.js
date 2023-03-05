
// スワイパー
const swiper = new Swiper("#swiper", {
    breakpoints: {
        1100: {
            slidesPerView: 3.38,
        },

        600: {
            slidesPerView: 2,
        },
    },
    // speed: '1s',
    centeredSlides: true,
    loop: true,
    loopAdditionalSlides: 5,
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

