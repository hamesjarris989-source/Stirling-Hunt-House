function toggleSection(title) {

    const content = title.nextElementSibling;
    const arrow = title.querySelector(".arrow");

    if (content.style.display === "block") {
        content.style.display = "none";
        arrow.textContent = "▸";
    } else {
        content.style.display = "block";
        arrow.textContent = "▾";
    }

}
