// JavaScript for toggling dropdown in the navbar
document.addEventListener("DOMContentLoaded", function () {
    const accountDropdown = document.querySelector(".account .dropdown");
    document.querySelector(".account").addEventListener("click", function () {
        accountDropdown.classList.toggle("show");
    });

    // Close dropdown when clicking outside
    window.addEventListener("click", function (event) {
        if (!event.target.matches(".account")) {
            const dropdowns = document.querySelectorAll(".dropdown");
            dropdowns.forEach(function (dropdown) {
                if (dropdown.classList.contains("show")) {
                    dropdown.classList.remove("show");
                }
            });
        }
    });
});
// Add these JavaScript codes to instructors.js

document.addEventListener("DOMContentLoaded", function () {
    const loadMoreButton = document.querySelector(".load-more");

    loadMoreButton.addEventListener("click", function () {
        // Add your logic here for loading more instructors
        // For demonstration purposes, you can show an alert
        alert("Load more functionality will be implemented here.");
    });
});