/*
    =================================================================
    The "updated" entry in the Download panel on the project subpage.
    =================================================================
*/

// timeZone: "UTC" – to prevent "2026-03-01" from turning into February west of London
const MONTH = new Intl.DateTimeFormat("en", { month: "long", year: "numeric", timeZone: "UTC" });

/** "2026-03", "2026-03-09", or a full ISO date → "March 2026" ("" if it is not a date) */
export function formatMonth(value) {
    const date = new Date(/^\d{4}-\d{2}$/.test(value) ? value + "-01" : value);
    return isNaN(date) ? "" : MONTH.format(date);
}

/** Date of the latest release for the "login/repo" repository on GitHub, or null */
async function latestRelease(repo) {
    const key = "gh-release-date:" + repo;
    try {
        const saved = sessionStorage.getItem(key);
        if (saved) return saved;
    } catch {}
    const res = await fetch(`https://api.github.com/repos/${repo}/releases/latest`);
    if (!res.ok) return null;
    const date = (await res.json()).published_at;
    try {
        sessionStorage.setItem(key, date);
    } catch {}
    return date;
}

/** Text for the line: "March 2026" or "" if there is nothing to show */
export async function updatedText(value) {
    if (!value) return "";
    if (value.startsWith("github:")) {
        const date = await latestRelease(value.slice("github:".length)).catch(() => null);
        return date ? formatMonth(date) : "";
    }
    return formatMonth(value);
}

/** Adds “updated · March 2026” to the table in the Download panel (or creates the table) */
export async function showUpdated(value) {
    const text = await updatedText(value);
    if (!text) return;
    const row = `<div><dt>updated</dt><dd>${text}</dd></div>`;
    const table = document.getElementById("project-info");
    if (table) table.insertAdjacentHTML("beforeend", row);
    else document.querySelector(".download-list")?.insertAdjacentHTML("afterend", `<dl class="info-table" id="project-info">${row}</dl>`);
}
