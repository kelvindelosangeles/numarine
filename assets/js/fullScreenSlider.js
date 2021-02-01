document.addEventListener("DOMContentLoaded", function () {
    new Splide(".full_screen_slider", {
        type: "fade",
        autoplay: true,
        rewind: true,
        pauseOnHover: false,
        pagination: false,
        arrows: false,
        fixedHeight: "80vh",
        fixedWidth: "100vw",
        cover: true,
        interval: 3000,
    }).mount();
});
