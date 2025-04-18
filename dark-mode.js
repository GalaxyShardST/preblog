// @license magnet:?xt=urn:btih:0b31508aeb0634b347b8270c7bee4d411b5d4109&dn=agpl-3.0.txt AGPL-3.0-or-later

// This script is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

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

// @license-end
