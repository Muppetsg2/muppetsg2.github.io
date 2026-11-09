/*
    ========================================================================
    SVG icons embedded in the code. `currentColor` refers to the text color,
    so the icons automatically change color along with the theme.
    ========================================================================
*/

const PATHS = {
    // ---- Social Icons ----
    github: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>',
    linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
    itch: '<rect x="2" y="7" width="20" height="11" rx="5"/><path d="M7 11v3M5.5 12.5h3M15 12h.01M18 13h.01"/>',
    youtube: '<rect x="2" y="5" width="20" height="14" rx="4"/><path d="M10 9l5 3-5 3z"/>',
    facebook: '<path d="M15 3h-2.5A3.5 3.5 0 0 0 9 6.5V10H6.5v3.5H9V21h3.5v-7.5H15l.5-3.5h-3V7a1 1 0 0 1 1-1H15z"/>',
    instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>',
    vroid: '<g transform="matrix(0.2714775,0,0,0.2714775,-16.814141,-54.308893)"><path d="m 94.714631,139.472 -17.184876,9.92169 -17.184877,-9.92169 10e-7,-19.84338 17.184876,-9.9217 17.184876,9.9217 z" transform="matrix(1.4562182,0.84074798,-0.84074798,1.4562182,102.15715,-9.5846088)" stroke-width="4.381"/><path d="m 84.047364,236.31734 17.135846,27.89406 16.29838,-26.28355 c 0,0 1.09008,-1.80702 2.01251,-1.80702 h 8.3702 l -4.82852,-6.96948 h -8.92823 c 0,0 -0.39858,-0.16508 -1.35518,1.17866 -0.95659,1.34379 -11.47253,17.93733 -11.47253,17.93733 l -6.570886,-10.85485 c 0,0 -0.53952,-1.04683 -1.81988,-1.03073 -1.28036,0.0161 -8.84171,-0.0644 -8.84171,-0.0644 z" fill="currentColor" stroke-width="0.921"/></g>',
    
    // ---- Arrow Icons ----
    arrowRight: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    arrowLeft: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
    arrowUpRight: '<path d="M7 17L17 7M8 7h9v9"/>',

    // ---- Get Project Icons ----
    link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
    external: '<path d="M14 4h6v6M20 4l-9 9"/><path d="M19 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5"/>',
    download: '<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>',
    play: '<path d="M8 5v14l11-7z" fill="currentColor"/>',
    phone: '<rect x="6" y="2" width="12" height="20" rx="2"/><path d="M11 18h2"/>',

    // ---- Pages Icons ----
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>',
    moon: '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>',
    close: '<path d="M18 6L6 18M6 6l12 12"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    chevronRight: '<path d="M9 6l6 6-6 6"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/>',
    chip: '<rect x="6" y="6" width="12" height="12" rx="2"/><path d="M10 2v4M14 2v4M10 18v4M14 18v4M2 10h4M2 14h4M18 10h4M18 14h4"/>',
    layers: '<path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>',
    gamepad: '<path d="M6 11h4M8 9v4M15 12h.01M18 10h.01"/><path d="M17.32 5H6.68a4 4 0 0 0-3.98 3.59l-.9 7.04A2.5 2.5 0 0 0 4.28 18.5c.8 0 1.53-.38 2-1l1.2-1.6a2 2 0 0 1 1.6-.9h5.84a2 2 0 0 1 1.6.8l1.2 1.6c.47.62 1.2 1 2 1a2.5 2.5 0 0 0 2.48-2.87l-.9-7.04A4 4 0 0 0 17.32 5z"/>',
    
    // ---- Feature icons ----
    googlePlayGames: '<g transform="matrix(0.90971243,0,0,0.90971243,1.0967033,1.0905471)"><circle cx="7.3630219" cy="10.016612" r="1.0395831" fill="currentColor" stroke="none"/><circle cx="7.3630219" cy="13.983277" r="1.0395831" fill="currentColor" stroke="none"/><circle cx="5.3937716" cy="11.999528" r="1.054082" fill="currentColor" stroke="none"/><circle cx="9.3663549" cy="12.015018" r="1.0535196" fill="currentColor" stroke="none"/><path stroke-width="2.198" d="M 5.2675781,2 C 4.1162112,2.0190234 3.0683594,2.9456253 3.0683594,4.234375 v 3.6210938 h 6.1386718 a 3.5074992,3.5074992 0 0 1 3.4550778,2.9023432 l 1.16211,6.646485 5.996093,-3.472656 c 1.484167,-0.86 1.484167,-3.003282 0,-3.863282 L 6.4179688,2.3046875 C 6.0460939,2.0890625 5.6513671,1.9936589 5.2675781,2 Z M 3.0683594,16.146484 v 3.619141 c 0,1.719167 1.8621098,2.792188 3.3496094,1.929687 L 10.535156,19.310547 7.3710938,16.146484 Z"/></g>',
    puzzle: '<path d="M3.5 8H7a2.5 2.5 0 1 1 5 0h4v4a2.5 2.5 0 1 1 0 5v4h-4a2.5 2.5 0 1 0-5 0H3.5v-4.5a2.5 2.5 0 1 0 0-4.5V8z"/>',
    flame: '<path d="M12 2.5c.5 3.5 6 5.5 6 11a6 6 0 0 1-12 0c0-2.5 1.2-4.3 2.5-5.5.3 2 1 3 2 3.5 0-3.5.5-6.5 1.5-9z"/>',
    gauge: '<path d="M4.2 18.5a9 9 0 1 1 15.6 0"/><path d="M12 14.5l4-4"/><circle cx="12" cy="14.5" r="1"/>',
    droplet: '<path d="M12 3s6.5 6.6 6.5 11.5a6.5 6.5 0 0 1-13 0C5.5 9.6 12 3 12 3z"/>',
    palette: '<path d="M12 3a9 9 0 0 0 0 18c1.2 0 1.8-1 1.4-2-.4-1.1.3-2.3 1.5-2.3H17a4 4 0 0 0 4-4C21 7.2 17 3 12 3z"/><circle cx="7.5" cy="11.5" r="1"/><circle cx="10" cy="7.5" r="1"/><circle cx="15" cy="7.5" r="1"/>',
    star: '<path d="M12 3l2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3l-5.6 2.9 1.1-6.2L3 9.6l6.2-.9L12 3z"/>',
    vr: '<path d="M4 7h16a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-4.2l-2.3-2.5h-3L8.2 17H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z"/>',
    chart: '<path d="M3 20h18"/><path d="M6 16v-5M11 16V5M16 16V9"/>',
    monitor: '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>',
    alert: '<path d="M10.3 3.9 2.4 17.5A2 2 0 0 0 4.1 20.5h15.8a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/>',
    dice: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 8h.01M16 8h.01M12 12h.01M8 16h.01M16 16h.01"/>',
    signpost: '<path d="M12 3v18M8 21h8"/><path d="M5 6h12l3 2.5-3 2.5H5V6z"/>',
    zap: '<path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z"/>',
    crown: '<path d="M3 8l4.5 4L12 5l4.5 7L21 8l-2 11H5L3 8z"/>',
    bubbles: '<circle cx="9" cy="14" r="6"/><circle cx="17.5" cy="6.5" r="3.5"/><path d="M6 13a3 3 0 0 1 3-3"/>',
    bug: '<path d="M8 12.5a4 4 0 0 1 8 0V16a4 4 0 0 1-8 0v-3.5z"/><path d="M10 6.5a2 2 0 0 1 4 0M12 12.5V20M8 14H4M16 14h4M8.5 18 5 20.5M15.5 18l3.5 2.5M8.5 10.5 5.5 8M15.5 10.5l3-2.5"/>',
    timer: '<circle cx="12" cy="13" r="8"/><path d="M12 9v4l2.5 2.5M10 2h4"/>',
    cube: '<path d="M12 2.5 3.5 7v10l8.5 4.5 8.5-4.5V7L12 2.5z"/><path d="M3.5 7 12 11.5 20.5 7M12 11.5v10"/>',
    window: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M9 9v11"/>',
    folder: '<path d="M3 6.5A2.5 2.5 0 0 1 5.5 4H9l2.5 2.5h7A2.5 2.5 0 0 1 21 9v8.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5v-11z"/>',
    hexagon: '<path d="M12 2.5 20.2 7.25v9.5L12 21.5l-8.2-4.75v-9.5L12 2.5z"/>',
    wind: '<path d="M3 8h10a3 3 0 1 0-3-3"/><path d="M3 12h15a3 3 0 1 1-3 3"/><path d="M3 16h6"/>',
    maze: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 3v10h5M17 7v14M11 7h6M7 17h6"/>',
    users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 4.6a3.5 3.5 0 0 1 0 6.8M21.5 20a6.5 6.5 0 0 0-3.5-5.8"/>',
    map: '<path d="M9 4 3 6.5v13.5l6-2.5 6 2.5 6-2.5V4l-6 2.5L9 4z"/><path d="M9 4v13.5M15 6.5V20"/>',
    skull: '<path d="M12 3a8 8 0 0 0-8 8c0 2.4 1.1 4.3 3 5.5V20a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-3.5c1.9-1.2 3-3.1 3-5.5a8 8 0 0 0-8-8z"/><circle cx="9" cy="11.5" r="1.5"/><circle cx="15" cy="11.5" r="1.5"/><path d="M10.5 21v-2.5M13.5 21v-2.5"/>',
    crosshair: '<circle cx="12" cy="12" r="8"/><path d="M12 2v5M12 17v5M2 12h5M17 12h5"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
    levelUp: '<path d="M3 17l6-6 4 4 8-8"/><path d="M15 7h6v6"/>',
    rocket: '<path d="M12 2.5c2.8 2.2 4.5 5.6 4.5 9.5v4.5h-9V12c0-3.9 1.7-7.3 4.5-9.5z"/><path d="M7.5 12.5 4.5 15.5v3.5l3-1.5M16.5 12.5l3 3v3.5l-3-1.5M10 19.5l2 2 2-2"/><circle cx="12" cy="10" r="1.5"/>',
    book: '<path d="M4 19.5V5.5A2.5 2.5 0 0 1 6.5 3H20v14H6.5A2.5 2.5 0 0 0 4 19.5zm0 0A2.5 2.5 0 0 0 6.5 22H20v-5"/>',
    infinity: '<path d="M12 12c-2-2.7-3.6-4-5.5-4a4 4 0 0 0 0 8c1.9 0 3.5-1.3 5.5-4zm0 0c2 2.7 3.6 4 5.5 4a4 4 0 0 0 0-8c-1.9 0-3.5 1.3-5.5 4z"/>',
    wand: '<path d="M4 20 15 9"/><path d="M13 7l4 4"/><path d="M19 2.5v4M17 4.5h4M20.5 11v2M19.5 12h2"/>',
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
