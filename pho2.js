document.addEventListener("DOMContentLoaded", function () {
    const loadMoreBtn = document.getElementById("loadMoreBtn");
    const hiddenRows = document.querySelectorAll(".image-row.hidden");
    let index = 0;

    loadMoreBtn.addEventListener("click", function () {
        if (index < hiddenRows.length) {
            hiddenRows[index].classList.remove("hidden");
            index++;
        }
        
        // Hide button when all images are loaded
        if (index >= hiddenRows.length) {
            loadMoreBtn.style.display = "none";
        }
    });
});