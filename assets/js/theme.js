/*
    ======================
    Theme - light or dark
    ======================
*/

(function () {
    try {
        var saved = localStorage.getItem("theme");
        if (saved === "light" || saved === "dark") {
            document.documentElement.dataset.theme = saved;
        }
    } catch (e) {
        /* localStorage can sometimes be blocked – in such cases, the system theme is used instead. */
    }
})();
