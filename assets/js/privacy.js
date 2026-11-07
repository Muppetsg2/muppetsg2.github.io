/*
    ===========================================================================
    privacy.html – a list of policies or a single policy (privacy.html?id=<id>)
    ===========================================================================
*/

import { privacyPolicies } from "../../data/privacy.js";
import { privacyTemplates } from "../../data/privacy-templates.js";
import { projects } from "../../data/projects.js";
import { renderHeader, renderFooter } from "./layout.js";
import { icon } from "./icons.js";
import { esc, href, targetAttrs, projectUrl } from "./utils.js";

renderHeader();
renderFooter();

const id = new URLSearchParams(location.search).get("id");
if (!id) {
    showList();
} else {
    const policy = privacyPolicies.find((p) => p.id === id);
    if (policy) showPolicy(policy);
    else showMissing();
}

/* ---------- privacy.html → all policy cards ---------- */
function showList() {
    document.getElementById("policy-list").hidden = false;
    document.getElementById("policy-cards").innerHTML = privacyPolicies
        .map((p) => {
            const project = projects.find((x) => x.id === p.project);
            const image = project && (project.icon || project.cover);
            return `
            <a class="policy-card" href="privacy.html?id=${encodeURIComponent(p.id)}">
                ${image ? `<img src="${href(image)}" alt="" loading="lazy">` : `<span class="policy-placeholder">${esc(p.app.slice(0, 2))}</span>`}
                <span class="policy-card-text">
                    <strong>${esc(p.app)}</strong>
                    <small>${esc(p.provider)}</small>
                    <small class="policy-date">effective ${esc(p.effective)}</small>
                </span>
                ${icon("arrowRight", 18, "arrow")}
            </a>`;
        })
        .join("");
}

/* ---------- Typesetting ---------- */

/** Template sections + changes from the entry (replace / remove / insert) */
function buildSections(template, changes = {}) {
    const sections = template.sections.map((s) => ({ ...s }));
    for (const [key, change] of Object.entries(changes)) {
        const index = sections.findIndex((s) => s.key === key);
        if (change === null) {
            if (index >= 0) sections.splice(index, 1);
            continue;
        }
        const merged = { ...(index >= 0 ? sections[index] : {}), ...change, key };
        if (index >= 0 && !change.after) {
            sections[index] = merged;
            continue;
        }
        if (index >= 0) sections.splice(index, 1);
        const anchor = sections.findIndex((s) => s.key === change.after);
        sections.splice(anchor >= 0 ? anchor + 1 : sections.length, 0, merged);
    }
    return sections;
}

/** First, it escapes the text, then it inserts {fields} from the entry */
function fill(text, values) {
    return esc(text).replace(/\{(\w+)\}/g, (match, name) => (name in values ? esc(values[name]) : match));
}

function sectionHtml(section, values) {
    const title = section.title ? `<h2>${fill(section.title, values)}</h2>` : "";
    const paragraphs = (section.text || []).map((t) => `<p>${fill(t, values)}</p>`).join("");
    const list = section.list?.length ? `<ul>${section.list.map((t) => `<li>${fill(t, values)}</li>`).join("")}</ul>` : "";
    return `<section class="legal-section">${title}${paragraphs}${list}</section>`;
}

/* ---------- privacy.html?id=… → one policy ---------- */
function showPolicy(p) {
    const template = privacyTemplates[p.template || "no-data"];
    if (!template) return showMissing();

    const values = { pricing: "Free" };
    for (const [k, v] of Object.entries(p)) if (typeof v === "string") values[k] = v;

    document.title = `${p.app} – Privacy Policy`;
    document.getElementById("policy").hidden = false;
    document.getElementById("policy-title").textContent = p.app;
    document.getElementById("policy-summary").innerHTML = fill(p.summary || template.summary, values);
    document.getElementById("policy-sections").innerHTML = buildSections(template, p.sections)
        .map((s) => sectionHtml(s, values))
        .join("");
    document.getElementById("policy-contact").innerHTML = fill(p.contact || template.contact, values);
    document.getElementById("policy-mail").href = `mailto:${p.email}`;

    const tags = [`effective ${p.effective}`, ...(p.tags || template.tags || [])]
        .map((t) => `<span class="tag">${esc(t)}</span>`)
        .join("");
    const store = p.store ? `<a class="tag tag-link" href="${href(p.store)}"${targetAttrs(p.store)}>Google Play ${icon("external", 12)}</a>` : "";
    document.getElementById("policy-tags").innerHTML = tags + store;

    const project = projects.find((x) => x.id === p.project);
    if (project) {
        document.getElementById("policy-back").href = projectUrl(project);
        document.getElementById("policy-back-label").textContent = project.title;
    }
}

function showMissing() {
    document.title = "Policy not found – Muppetsg2";
    document.getElementById("policy-missing").hidden = false;
}
