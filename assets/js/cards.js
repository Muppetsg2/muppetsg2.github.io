/*
    ================================================================================
    "Components": functions that turn a single design into the HTML code for a card.
    ================================================================================
*/

import { icon, LINK_ICONS } from "./icons.js";
import { esc, href, targetAttrs, parseVideo, projectUrl } from "./utils.js";
import { inlineText } from "./richtext.js";
import { typeOf, TYPE_NAMES } from "./catalog.js";

/** Clickable tag */
export function tagButton(tag, activeTag, count) {
    const on = tag === activeTag;
    const n = count != null ? ` <span class="tag-count">${count}</span>` : "";
    return `<button type="button" class="tag${on ? " is-on" : ""}" data-tag="${esc(tag)}" aria-pressed="${on}">${esc(tag)}${n}</button>`;
}

/** All project tags */
export function tagList(tags, activeTag) {
    return `<div class="tag-list">${(tags || []).map((t) => tagButton(t, activeTag)).join("")}</div>`;
}

/** Link with primary: true */
export function primaryLink(p) {
    return (p.links || []).find((l) => l.primary) || (p.links || [])[0] || null;
}

/** Tile with a title, when the project has no image */
export function placeholder(p, size = "") {
    return `<div class="media-placeholder ${size}" data-short="${esc(p.title.slice(0, 2))}"><span>${esc(p.title)}</span></div>`;
}

/** Card image: an icon on a blurred copy of itself, a cover, or a tile with the title.
    preferIcon – small cards prefer the icon, large ones the cover. A library logo (is-logo) sits on a plate. */
function cardMedia(p, preferIcon) {
    const logo = typeOf(p) === "library" ? " is-logo" : "";
    const iconImg = p.icon
        ? `<img class="media-blur" src="${href(p.icon)}" alt="" loading="lazy">
            <img class="media-icon${logo}" src="${href(p.icon)}" alt="${esc(p.title)} icon" loading="lazy">`
        : "";
    const coverImg = p.cover ? `<img src="${href(p.cover)}" alt="${esc(p.title)} cover" loading="lazy">` : "";
    return (preferIcon ? iconImg || coverImg : coverImg || iconImg) || placeholder(p, preferIcon ? "" : "is-large");
}

/* ---------- Large card (featured: true) ---------- */
export function featuredCard(p, activeTag) {
    const video = parseVideo(p.trailer);
    const main = primaryLink(p);
    const label = p.engine || p.language; // badge: the game's engine or the library's language

    return `
    <article class="card card-featured">
        <a class="card-media" href="${projectUrl(p)}" aria-label="${esc(p.title)} – details">
            ${cardMedia(p, false)}
            ${label ? `<span class="badge badge-dark">${esc(label)}</span>` : ""}
            <span class="badge badge-type">${TYPE_NAMES[typeOf(p)]}</span>
            ${video ? `<span class="badge badge-trailer">${icon("play", 12)} Trailer · ${video.provider}</span>` : ""}
        </a>
        <div class="card-body">
            ${p.award ? `<p class="award">★ ${esc(p.award)}</p>` : ""}
            <h3 class="card-title"><a href="${projectUrl(p)}">${esc(p.title)}</a></h3>
            ${tagList(p.tags, activeTag)}
            <p class="card-text">${inlineText(p.summary)}</p>
            <div class="card-actions">
                ${main ? `<a class="btn btn-solid" href="${href(main.url)}"${targetAttrs(main.url)}>${icon(LINK_ICONS[main.kind] || "external", 18)} ${esc(main.label)}</a>` : ""}
                <a class="btn btn-secondary" href="${projectUrl(p)}">Details ${icon("arrowRight", 16, "arrow")}</a>
            </div>
        </div>
    </article>`;
}

/* ---------- Standard card (“All projects” grid) ---------- */
export function projectCard(p, activeTag) {
    const video = parseVideo(p.trailer);
    const main = primaryLink(p);

    // Quick button next to "Details" only for these kinds of the main link: itch.io and a game in the browser
    const QUICK_LABELS = { itch: "itch.io", web: "Play" };
    const quick =
    main && QUICK_LABELS[main.kind]
        ? `<a class="btn btn-ghost btn-small" href="${href(main.url)}"${targetAttrs(main.url)}>${QUICK_LABELS[main.kind]} ${icon("external", 14)}</a>`
        : "";

    return `
    <article class="card">
        <a class="card-media is-small" href="${projectUrl(p)}" aria-label="${esc(p.title)} – details">
            ${cardMedia(p, true)}
            ${p.featured ? `<span class="badge badge-star">★ <span class="badge-label">highlight</span></span>` : ""}
            ${video ? `<span class="badge badge-dark badge-corner">${icon("play", 11)} ${video.provider}</span>` : ""}
        </a>
        <div class="card-body is-small">
            <h3 class="card-title is-small"><a href="${projectUrl(p)}">${esc(p.title)}</a></h3>
            ${tagList(p.tags, activeTag)}
            <p class="card-text is-muted">${inlineText(p.summary)}</p>
            <div class="card-actions">
                <a class="btn btn-secondary btn-small" href="${projectUrl(p)}">Details ${icon("arrowRight", 16, "arrow")}</a>
                ${quick}
            </div>
        </div>
        <span class="card-chevron" aria-hidden="true">${icon("chevronRight", 18)}</span>
    </article>`;
}

/* ---------- Library card ("Libraries" group) ---------- */
export function libraryCard(p, activeTag) {
    const source = (p.links || []).find((l) => l.kind === "source");
    const logo = p.icon ? `<img src="${href(p.icon)}" alt="" loading="lazy">` : esc(p.title.slice(0, 2));

    return `
    <article class="card card-library">
        ${p.cover ? `<a class="card-media is-small" href="${projectUrl(p)}" tabindex="-1" aria-hidden="true"><img src="${href(p.cover)}" alt="" loading="lazy"></a>` : ""}
        <div class="card-body is-small">
            <div class="library-head">
                <span class="library-logo" aria-hidden="true">${logo}</span>
                <div>
                    ${p.featured ? `<span class="badge badge-star is-inline">★ <span class="badge-label">highlight</span></span>` : ""}
                    <h3 class="card-title is-small"><a href="${projectUrl(p)}">${esc(p.title)}</a></h3>
                    ${p.language ? `<p class="library-lang">${esc(p.language)}</p>` : ""}
                </div>
            </div>
            <p class="card-text is-muted">${inlineText(p.summary)}</p>
            ${tagList(p.tags, activeTag)}
            <div class="card-actions">
                <a class="btn btn-secondary btn-small" href="${projectUrl(p)}">Details ${icon("arrowRight", 16, "arrow")}</a>
                ${source ? `<a class="btn btn-ghost btn-small" href="${href(source.url)}"${targetAttrs(source.url)}>${icon("github", 14)} Code</a>` : ""}
            </div>
        </div>
        <span class="card-chevron" aria-hidden="true">${icon("chevronRight", 18)}</span>
    </article>`;
}

/* ---------- Small card (suggestions on page 404) ---------- */
export function miniCard(p) {
    const image = p.icon || p.cover;
    return `
    <a class="mini-card" href="${projectUrl(p)}">
        ${image ? `<img src="${href(image)}" alt="" loading="lazy">` : `<span class="mini-placeholder">${esc(p.title.slice(0, 2))}</span>`}
        <span class="mini-text"><strong>${esc(p.title)}</strong><small>${esc((p.tags || []).slice(0, 3).join(" · "))}</small></span>
    </a>`;
}
