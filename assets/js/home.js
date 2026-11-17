/*
    ===========
    Home page
    ===========
*/

import { entries, typeOf } from "./catalog.js";
import { renderHeader, renderFooter, renderContacts } from "./layout.js";
import { featuredCard, projectCard, libraryCard, tagButton } from "./cards.js";
import { countTags, esc } from "./utils.js";
import { icon } from "./icons.js";
import { addCopyButtons } from "./code.js";

// Groups under the filter – in this order; a group without matching entries is not shown
const GROUPS = [
    { type: "game", id: "games", title: "Games", card: projectCard },
    { type: "app", id: "apps", title: "Apps", card: projectCard },
    { type: "library", id: "libraries", title: "Libraries", card: libraryCard },
];

const allTags = countTags(entries);

// The selected tag is kept in the URL (?tag=Unity) – this means you can send a filtered view to someone else.
let activeTag = new URLSearchParams(location.search).get("tag");
if (!allTags.some((t) => t.tag === activeTag)) activeTag = null;

function setActiveTag(tag) {
    activeTag = tag;
    const url = new URL(location.href);
    if (tag) url.searchParams.set("tag", tag);
    else url.searchParams.delete("tag");
    history.replaceState(null, "", url); // changes the address without reloading
    renderProjects();
}

function renderProjects() {
    // Highlights = games, apps and libraries with featured: true
    document.getElementById("featured").innerHTML = entries
        .filter((p) => p.featured)
        .map((p) => featuredCard(p, activeTag))
        .join("");

    const allButton = `<button type="button" class="tag${activeTag ? "" : " is-on"}" data-tag-all aria-pressed="${!activeTag}">All <span class="tag-count">${entries.length}</span></button>`;
    document.getElementById("tag-filter").innerHTML = allButton + allTags.map(({ tag, count }) => tagButton(tag, activeTag, count)).join("");

    const shown = activeTag ? entries.filter((p) => (p.tags || []).includes(activeTag)) : entries;

    document.getElementById("result-info").innerHTML = activeTag
    ? `<span>// ${shown.length} of ${entries.length} projects tagged “${esc(activeTag)}”</span>
        <button type="button" class="tag" data-tag-all>${icon("close", 12)} clear filter</button>`
    : `<span>// showing all ${entries.length} projects</span>`;

    // Games, Apps, Libraries – each group has its own heading and its own grid of cards
    document.getElementById("project-groups").innerHTML = GROUPS.map(({ type, id, title, card }) => {
        const list = shown.filter((p) => typeOf(p) === type);
        if (!list.length) return "";
        return `<h3 id="${id}" class="group-title">${title} <span class="tag-count">${list.length}</span></h3>
                <div class="project-grid">${list.map((p) => card(p, activeTag)).join("")}</div>`;
    }).join("");
}

// A single click listener for the entire page (event delegation)
document.addEventListener("click", (e) => {
    const allBtn = e.target.closest("[data-tag-all]");
    const tagBtn = e.target.closest("[data-tag]");
    if (!allBtn && !tagBtn) return;

    const tag = allBtn ? null : tagBtn.dataset.tag;
    const outsideFilter = !e.target.closest("#tag-filter, #result-info");
    setActiveTag(tag === activeTag ? null : tag);

    if (outsideFilter) {
        document.getElementById("all-projects").scrollIntoView({ behavior: "smooth", block: "start" });
    }
});

renderHeader();
renderFooter();
renderContacts();
renderProjects();
addCopyButtons(); // "Copy" button on the code window in the hero
