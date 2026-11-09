/*
    ===============================================
    Menu (header) and footer – common to all pages.
    ===============================================
*/

import { socials } from "../../data/socials.js";
import { icon, fillIcons } from "./icons.js";
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
        .map((s) => `<a class="icon-btn" href="${href(s.url)}"${targetAttrs(s.url)} aria-label="${esc(s.name)}">${icon(s.icon)}<span class="nav-social-name">${esc(s.name)}</span></a>`)
        .join("");

    el.innerHTML = `
    <nav class="nav container" aria-label="Main">
        <a class="brand" href="index.html">
            <img src="assets/img/logo.png" alt="" width="40" height="37">
            <span class="brand-name">MUPPETSG2</span>
        </a>
        <div class="nav-menu" id="nav-menu">
            <div class="nav-links">
                <a href="index.html#projects">Projects</a>
                <a href="index.html#about">About</a>
                <a href="index.html#contact">Contact</a>
            </div>
            <div class="nav-socials">${iconLinks}</div>
        </div>
        <div class="nav-actions">
            <button type="button" class="icon-btn" data-theme-toggle></button>
            <button type="button" class="icon-btn menu-toggle" aria-controls="nav-menu" aria-expanded="false" aria-label="Open menu">${icon("menu")}</button>
        </div>
    </nav>`;

    el.querySelector("[data-theme-toggle]").addEventListener("click", () => {
        setTheme(currentTheme() === "light" ? "dark" : "light");
    });
    systemLight.addEventListener("change", updateThemeButton);
    updateThemeButton();

    // Phone: the ☰ button shows and hides the menu (CSS hides it on a narrow screen)
    const toggle = el.querySelector(".menu-toggle");
    const setMenu = (open) => {
        el.classList.toggle("is-open", open);
        toggle.setAttribute("aria-expanded", String(open));
        toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
        toggle.innerHTML = icon(open ? "close" : "menu");
    };
    toggle.addEventListener("click", () => setMenu(!el.classList.contains("is-open")));
    el.querySelectorAll(".nav-links a").forEach((a) => a.addEventListener("click", () => setMenu(false)));
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") setMenu(false);
    });
    
    fillIcons();
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
            <a href="privacy.html">Privacy policies</a>
            <a href="#top">Back to top ↑</a>
        </div>
    </div>`;
}

/* ---------- Contact cards (home page) ---------- */
export function renderContacts() {
    const el = document.getElementById("contact-list");
    if (!el) return;
    el.innerHTML = socials
        .map(
            (s) => `
            <a class="contact-card" href="${href(s.url)}"${targetAttrs(s.url)}>
                <span class="contact-icon">${icon(s.icon)}</span>
                <span class="contact-text"><strong>${esc(s.name)}</strong><span>${esc(s.handle)}</span></span>
                ${icon("arrowUpRight", 16, "contact-arrow")}
            </a>`
        )
        .join("");
}
