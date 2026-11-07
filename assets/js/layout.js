/*
    ===============================================
    Menu (header) and footer – common to all pages.
    ===============================================
*/

import { socials } from "../../data/socials.js";
import { icon } from "./icons.js";
import { esc, href, targetAttrs } from "./utils.js";

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
        </div>
    </nav>`;
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
