// @license magnet:?xt=urn:btih:0b31508aeb0634b347b8270c7bee4d411b5d4109&dn=agpl-3.0.txt AGPL-3.0-or-later

// This script is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

let defaultIsDark = false;

if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        const isDark = event.matches;
        defaultIsDark = isDark;
        if (isDark) {
            document.documentElement.classList.add("dark-mode");
        } else {
            document.documentElement.classList.remove("dark-mode");
        }
    });
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        defaultIsDark = true;
        document.documentElement.classList.add("dark-mode");
    }
}

const originalTheme = localStorage.getItem("theme");
if (originalTheme == "dark") {
    document.documentElement.classList.add("dark-mode");
} else if (originalTheme == "light") {
    document.documentElement.classList.remove("dark-mode");
}

document.addEventListener("DOMContentLoaded", () => {
    let button = document.getElementById("theme-switcher");

    button.addEventListener("click", () => {
        document.documentElement.classList.toggle("dark-mode");
        const isDark = document.documentElement.classList.contains("dark-mode");

        if ((defaultIsDark && isDark) || (!defaultIsDark && !isDark)) {
            localStorage.removeItem("theme");
        } else if (isDark) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });
});

// @license-end
