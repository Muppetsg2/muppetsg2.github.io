/*
    ================================================================================
    "Components": functions that turn a single design into the HTML code for a card.
    ================================================================================
*/

import { icon, LINK_ICONS } from "./icons.js";
import { esc, href, targetAttrs, parseVideo, projectUrl } from "./utils.js";
import { inlineText } from "./richtext.js";

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

/* ---------- Large card (featured: true) ---------- */
export function featuredCard(p, activeTag) {
    const video = parseVideo(p.trailer);
    const main = primaryLink(p);
    const image = p.cover ? `<img src="${href(p.cover)}" alt="${esc(p.title)} cover" loading="lazy">` : placeholder(p, "is-large");

    return `
    <article class="card card-featured">
        <a class="card-media" href="${projectUrl(p)}" aria-label="${esc(p.title)} – details">
            ${image}
            ${p.engine ? `<span class="badge badge-dark">${esc(p.engine)}</span>` : ""}
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

    let media;
    if (p.icon) {
        // A square icon on a blurred copy of itself
        media = `<img class="media-blur" src="${href(p.icon)}" alt="" loading="lazy">
                <img class="media-icon" src="${href(p.icon)}" alt="${esc(p.title)} icon" loading="lazy">`;
    } else if (p.cover) {
        media = `<img src="${href(p.cover)}" alt="${esc(p.title)} cover" loading="lazy">`;
    } else {
        media = placeholder(p);
    }

    // Quick button exclusively for "play" links (e.g., itch.io)
    const quick =
    main && main.kind === "play"
        ? `<a class="btn btn-ghost btn-small" href="${href(main.url)}"${targetAttrs(main.url)}>Play ${icon("external", 14)}</a>`
        : "";

    return `
    <article class="card">
        <a class="card-media is-small" href="${projectUrl(p)}" aria-label="${esc(p.title)} – details">
            ${media}
            ${p.featured ? `<span class="badge badge-star">★ highlight</span>` : ""}
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

/* ---------- Small card (suggestions on page 404) ---------- */
export function miniCard(p) {
    const image = p.icon || p.cover;
    return `
    <a class="mini-card" href="${projectUrl(p)}">
        ${image ? `<img src="${href(image)}" alt="" loading="lazy">` : `<span class="mini-placeholder">${esc(p.title.slice(0, 2))}</span>`}
        <span class="mini-text"><strong>${esc(p.title)}</strong><small>${esc((p.tags || []).slice(0, 3).join(" · "))}</small></span>
    </a>`;
}
