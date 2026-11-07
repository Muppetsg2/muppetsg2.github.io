/*
    ===============================================
    Menu (header) and footer – common to all pages.
    ===============================================
*/

import { socials } from "../../data/socials.js";
import { icon } from "./icons.js";
import { esc, href, targetAttrs } from "./utils.js";

/* ---------- Theme ---------- */
const root = document.documentElement;
const systemLight = window.matchMedia("(prefers-color-scheme: light)");

function currentTheme() {
    return root.dataset.theme || (systemLight.matches ? "light" : "dark");
}

function setTheme(next) {
    const system = systemLight.matches ? "light" : "dark";
    try {
        if (next === system) {
            delete root.dataset.theme;
            localStorage.removeItem("theme");
        } else {
            root.dataset.theme = next;
            localStorage.setItem("theme", next);
        }
    } catch {
        root.dataset.theme = next;
    }
    updateThemeButton();
}

function updateThemeButton() {
    const btn = document.querySelector("[data-theme-toggle]");
    if (!btn) return;
    const light = currentTheme() === "light";
    btn.innerHTML = icon(light ? "moon" : "sun");
    btn.setAttribute("aria-label", light ? "Switch to dark mode" : "Switch to light mode");
}

/* ---------- Menu ---------- */
export function renderHeader() {
    const el = document.getElementById("site-header");
    if (!el) return;

    // Icons only for links with header: true
    const iconLinks = socials
        .filter((s) => s.header)
        .map((s) => `<a class="icon-btn" href="${href(s.url)}"${targetAttrs(s.url)} aria-label="${esc(s.name)}">${icon(s.icon)}</a>`)
        .join("");

    el.innerHTML = `
    <nav class="nav container" aria-label="Main">
        <a class="brand" href="index.html">
            <img src="assets/img/logo.png" alt="" width="40" height="37">
            <span class="brand-name">MUPPETSG2</span>
        </a>
        <div class="nav-links">
            <a href="index.html#projects">Projects</a>
            <a href="index.html#about">About</a>
            <a href="index.html#contact">Contact</a>
        </div>
        <div class="nav-actions">
            ${iconLinks}
            <button type="button" class="icon-btn" data-theme-toggle></button>
        </div>
    </nav>`;

    el.querySelector("[data-theme-toggle]").addEventListener("click", () => {
        setTheme(currentTheme() === "light" ? "dark" : "light");
    });
    systemLight.addEventListener("change", updateThemeButton);
    updateThemeButton();
}

/* ---------- Footer ---------- */
export function renderFooter() {
    const el = document.getElementById("site-footer");
    if (!el) return;
    el.innerHTML = `
    <div class="container footer-inner">
        <div class="footer-brand">
            <img src="assets/img/logo.png" alt="" width="28" height="26">
            <span>© ${new Date().getFullYear()} Marceli Antosik</span>
        </div>
        <div class="footer-links">
            <a href="#top">Back to top ↑</a>
        </div>
    </div>`;
}
