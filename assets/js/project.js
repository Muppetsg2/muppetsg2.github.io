/*
    =============================================================
    Project subpage – one file for everyone: project.html?id=<id>
    =============================================================
*/

import { projects } from "../../data/projects.js";
import { privacyPolicies } from "../../data/privacy.js";
import { renderHeader, renderFooter } from "./layout.js";
import { tagList, primaryLink } from "./cards.js";
import { icon, LINK_ICONS } from "./icons.js";
import { esc, href, targetAttrs, parseVideo } from "./utils.js";
import { richText, inlineText } from "./richtext.js";
import { showUpdated } from "./updated.js";
import { noteNow, fillDownloadNotes } from "./downloads.js";

const id = new URLSearchParams(location.search).get("id");
const project = projects.find((x) => x.id === id);
const main = document.getElementById("project");

renderHeader();
renderFooter();

if (project) renderProject(project);
else renderNotFound();

function renderNotFound() {
    document.title = "Project not found – Muppetsg2";
    main.innerHTML = `
    <div class="container not-found">
        <p class="eyebrow">// 404</p>
        <h1>Project not found</h1>
        <p class="lead">There is no project with the id “${esc(id || "")}”.</p>
        <a class="btn btn-primary" href="index.html#projects">${icon("arrowLeft", 18, "arrow is-back")} Back to projects</a>
    </div>`;
}

function renderProject(p) {
    document.title = `${p.title} – Muppetsg2`;

    // Trailer as a "facade": an image plus a button. The player loads only after being clicked.
    const video = parseVideo(p.trailer);
    const poster = p.cover || video?.thumb || null;
    const posterImg = poster
    ? `<img src="${href(poster)}" alt="${esc(p.title)} screenshot">`
    : `<div class="media-placeholder is-large"><span>${esc(p.title)}</span></div>`;
    const media = video
    ? `<div class="video" data-embed="${esc(video.embed)}" data-title="${esc(p.title)} trailer">
            ${posterImg}
            <button type="button" class="video-play" aria-label="Play ${esc(p.title)} trailer">${icon("play", 36)}</button>
            <span class="badge badge-dark">${video.provider} · trailer</span>
        </div>`
    : `<div class="video is-static">${posterImg}</div>`;

    const description = richText(p.description || [p.summary]);

    const policy = privacyPolicies.find((x) => x.project === p.id);
    const policyLink = policy
    ? `<a class="policy-link" href="privacy.html?id=${encodeURIComponent(policy.id)}">
            ${icon("shield", 18)}
            <span><strong>Privacy policy</strong><small>how this game handles your data</small></span>
            ${icon("arrowRight", 16, "arrow")}
        </a>`
    : "";

    const mainLink = primaryLink(p);
    const links = (p.links || []).length
    ? p.links
        .map(
            (l) => `
            <a class="btn-download${l === mainLink ? " is-primary" : ""}" href="${href(l.url)}"${targetAttrs(l.url)}>
                <span><strong>${esc(l.label)}</strong>${l.note ? `<small data-note="${esc(l.note)}" data-url="${esc(l.url)}">${esc(noteNow(l.note, l.url))}</small>` : ""}</span>
                ${icon(LINK_ICONS[l.kind] || "external", 20, "arrow")}
            </a>`
        )
        .join("")
    : `<p class="muted">No downloads available right now.</p>`;

    const info = p.info
    ? `<dl class="info-table" id="project-info">${Object.entries(p.info)
        .map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`)
        .join("")}</dl>`
    : "";

    const features = p.features?.length
    ? `<section class="detail-text">
            <p class="eyebrow">// under the hood</p>
            <div class="feature-grid">
            ${p.features
                .map(
                (f) => `<div class="feature">
                    <strong class="feature-title">${f.icon ? icon(f.icon, 20) : ""}${esc(f.title)}</strong>
                    <span>${inlineText(f.text)}</span>
                </div>`
                )
                .join("")}
            </div>
            ${p.stack?.length ? `<div class="tag-list is-static">${p.stack.map((s) => `<span class="tag">${esc(s)}</span>`).join("")}</div>` : ""}
        </section>`
    : "";

    const team = p.role || p.team?.length
    ? `<div class="panel">
        ${p.role ? `<h2 class="panel-title">My role</h2><p>${esc(p.role)}</p>` : ""}
        ${
            p.team?.length
            ? `<h2 class="panel-title">Team</h2><dl class="info-table is-plain">${p.team
                .map((m) => `<div><dt>${esc(m.name)}</dt><dd>${esc(m.role)}</dd></div>`)
                .join("")}</dl>`
            : ""
        }
        </div>`
    : "";

    main.innerHTML = `
    <div class="container detail">
        <a class="back-link" href="index.html#projects">${icon("arrowLeft", 16)} cd ../projects</a>

        <header class="detail-head">
            ${p.icon ? `<img class="detail-icon" src="${href(p.icon)}" alt="" width="88" height="88">` : ""}
            <div>
                ${p.award ? `<p class="award">★ ${esc(p.award)}</p>` : ""}
                <h1>${esc(p.title)}</h1>
                ${tagList(p.tags)}
            </div>
        </header>

        <div class="detail-layout">
            <div class="detail-main">
                ${media}
                <section class="detail-text">
                    <p class="eyebrow">// about the game</p>
                    ${description}
                </section>
                ${features}
            </div>

            <aside class="detail-side">
                <div class="panel">
                    <h2 class="panel-title">Download</h2>
                    <div class="download-list">${links}</div>
                    ${info}
                    ${policyLink}
                </div>
                ${team}
            </aside>
        </div>
    </div>`;

    fillDownloadNotes(main);
    showUpdated(p.updated);
}

document.addEventListener("click", (e) => {
    // Tag on a subpage → home page with a filter enabled
    const tag = e.target.closest("[data-tag]");
    if (tag) location.href = `index.html?tag=${encodeURIComponent(tag.dataset.tag)}#all-projects`;

    // Clicking "play" → only then do we insert the player
    const play = e.target.closest(".video-play");
    if (play) {
        const box = play.closest(".video");
        const iframe = document.createElement("iframe");
        iframe.src = box.dataset.embed;
        iframe.title = box.dataset.title;
        iframe.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
        box.replaceChildren(iframe);
    }
});
