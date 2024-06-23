document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".button-container button");
    const linksContainer = document.querySelector(".links-container");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const chapter = this.getAttribute("data-chapter");
            const chapterLinks = document.querySelector(`.chapter-links[data-chapter="${chapter}"]`);

            // Hide all other chapter links
            document.querySelectorAll(".chapter-links").forEach(link => {
                link.style.display = "none";
            });

            // Show the clicked chapter links
            chapterLinks.style.display = "flex";
            linksContainer.style.display = "flex";
        });
    });
});
