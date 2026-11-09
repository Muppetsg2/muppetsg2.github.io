/*
    ===========
    Home page
    ===========
*/

import { projects } from "../../data/projects.js";
import { renderHeader, renderFooter, renderContacts } from "./layout.js";
import { featuredCard, projectCard, tagButton } from "./cards.js";
import { countTags, esc } from "./utils.js";
import { icon } from "./icons.js";

const allTags = countTags(projects);

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
    // Highlights = all projects with featured: true
    document.getElementById("featured").innerHTML = projects
        .filter((p) => p.featured)
        .map((p) => featuredCard(p, activeTag))
        .join("");

    const allButton = `<button type="button" class="tag${activeTag ? "" : " is-on"}" data-tag-all aria-pressed="${!activeTag}">All <span class="tag-count">${projects.length}</span></button>`;
    document.getElementById("tag-filter").innerHTML = allButton + allTags.map(({ tag, count }) => tagButton(tag, activeTag, count)).join("");

    const shown = activeTag ? projects.filter((p) => (p.tags || []).includes(activeTag)) : projects;

    document.getElementById("result-info").innerHTML = activeTag
    ? `<span>// ${shown.length} of ${projects.length} projects tagged “${esc(activeTag)}”</span>
        <button type="button" class="tag" data-tag-all>${icon("close", 12)} clear filter</button>`
    : `<span>// showing all ${projects.length} projects</span>`;

    document.getElementById("project-grid").innerHTML = shown.map((p) => projectCard(p, activeTag)).join("");
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
