document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("mobile_sidebar");
    const menuButton = document.getElementById("menu_button");

    sidebar.addEventListener("click", () => {
        sidebar.classList.toggle("open");
        console.log(sidebar);
    });
    menuButton.addEventListener("click", () => {
        sidebar.classList.toggle("open");
        console.log(sidebar);
    });
});
