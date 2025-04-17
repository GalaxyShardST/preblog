
let darkMode = localStorage.getItem("dark-mode");
if (darkMode) {
    document.documentElement.classList.add("dark-mode");
}

document.addEventListener("DOMContentLoaded", () => {
    let button = document.getElementById("theme-switcher");

    button.addEventListener("click", () => {
        darkMode = !darkMode;

        if (darkMode) {
            localStorage.setItem("dark-mode", true);
            document.documentElement.classList.add("dark-mode");
        } else {
            localStorage.removeItem("dark-mode");
            document.documentElement.classList.remove("dark-mode");
        }
    });
});
