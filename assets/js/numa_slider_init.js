document.addEventListener("DOMContentLoaded", function () {
    var secondarySlider = new Splide("#numa_slider_thumbs", {
        fixedWidth: 100,
        fixedHeight: 100,
        gap: 8,
        cover: true,
        isNavigation: true,
        arrows: false,
    }).mount();

    var primarySlider = new Splide("#numa_slider_main", {
        type: "loop",
        heightRatio: 3 / 4,
        pagination: false,
        arrows: false,
        cover: true,
    });

    primarySlider.sync(secondarySlider).mount();
});
