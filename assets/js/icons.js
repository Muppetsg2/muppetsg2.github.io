/*
    ========================================================================
    SVG icons embedded in the code. `currentColor` refers to the text color,
    so the icons automatically change color along with the theme.
    ========================================================================
*/

const PATHS = {
    github: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>',
    linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
    itch: '<rect x="2" y="7" width="20" height="11" rx="5"/><path d="M7 11v3M5.5 12.5h3M15 12h.01M18 13h.01"/>',
    youtube: '<rect x="2" y="5" width="20" height="14" rx="4"/><path d="M10 9l5 3-5 3z"/>',
    facebook: '<path d="M15 3h-2.5A3.5 3.5 0 0 0 9 6.5V10H6.5v3.5H9V21h3.5v-7.5H15l.5-3.5h-3V7a1 1 0 0 1 1-1H15z"/>',
    instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>',
    vroid: '<g transform="matrix(0.2714775,0,0,0.2714775,-16.814141,-54.308893)"><path d="m 94.714631,139.472 -17.184876,9.92169 -17.184877,-9.92169 10e-7,-19.84338 17.184876,-9.9217 17.184876,9.9217 z" transform="matrix(1.4562182,0.84074798,-0.84074798,1.4562182,102.15715,-9.5846088)" stroke-width="4.381"/><path d="m 84.047364,236.31734 17.135846,27.89406 16.29838,-26.28355 c 0,0 1.09008,-1.80702 2.01251,-1.80702 h 8.3702 l -4.82852,-6.96948 h -8.92823 c 0,0 -0.39858,-0.16508 -1.35518,1.17866 -0.95659,1.34379 -11.47253,17.93733 -11.47253,17.93733 l -6.570886,-10.85485 c 0,0 -0.53952,-1.04683 -1.81988,-1.03073 -1.28036,0.0161 -8.84171,-0.0644 -8.84171,-0.0644 z" fill="currentColor" stroke-width="0.921"/></g>',
    link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
    arrowRight: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    arrowLeft: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
    arrowUpRight: '<path d="M7 17L17 7M8 7h9v9"/>',
    external: '<path d="M14 4h6v6M20 4l-9 9"/><path d="M19 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5"/>',
    download: '<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>',
    play: '<path d="M8 5v14l11-7z" fill="currentColor"/>',
    phone: '<rect x="6" y="2" width="12" height="20" rx="2"/><path d="M11 18h2"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>',
    moon: '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>',
    close: '<path d="M18 6L6 18M6 6l12 12"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    chevronRight: '<path d="M9 6l6 6-6 6"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/>',
    chip: '<rect x="6" y="6" width="12" height="12" rx="2"/><path d="M10 2v4M14 2v4M10 18v4M14 18v4M2 10h4M2 14h4M18 10h4M18 14h4"/>',
    layers: '<path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>',
};

/** Returns the <svg> code. name – name from the list above, size – size in px, extraClass – additional class. */
export function icon(name, size = 20, extraClass = "") {
    const body = PATHS[name] || PATHS.link;
    return `<svg class="icon ${extraClass}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${body}</svg>`;
}

/** 
 * Replaces every <span data-icon="name"> on the page with an icon from the list above.
 * data-size – size in px (default is 18);
 * the tag's class is applied to the <svg> element (e.g., class="arrow").
*/
export function fillIcons(root = document) {
    root.querySelectorAll("[data-icon]").forEach((el) => {
        el.outerHTML = icon(el.dataset.icon, Number(el.dataset.size) || 18, el.className);
    });
}

/** Which icon corresponds to which type of link (the `kind` field in `projects.js`). */
export const LINK_ICONS = {
    download: "download",
    play: "itch",
    source: "github",
    store: "phone",
    external: "external",
};
