document.addEventListener("DOMContentLoaded", function() {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const body = document.body;

    // Check local storage for dark mode preference
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
        darkModeToggle.textContent = "☀️"; // Change to sun icon
    }

    darkModeToggle.addEventListener("click", function() {
        body.classList.toggle("dark-mode");
        
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
            darkModeToggle.textContent = "☀️"; // Sun icon for light mode
        } else {
            localStorage.setItem("darkMode", "disabled");
            darkModeToggle.textContent = "🌙"; // Moon icon for dark mode
        }
    });
});