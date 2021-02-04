document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("mobile_sidebar");
    const menuButton = document.querySelectorAll(".menu_button");

    menuButton.forEach((a) => {
        a.addEventListener("click", () => {
            sidebar.classList.toggle("open");
            console.log(sidebar);
        });
    });
});
