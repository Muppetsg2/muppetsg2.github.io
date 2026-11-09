/*
    ==========================================
    Small utility functions used by all pages.
    ==========================================
*/

/** Converts special HTML characters into safe equivalents – the text will never break the page. */
export function esc(value) {
    return String(value ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;");
}

/** Safe link address. Local paths containing spaces are encoded. */
export function href(url) {
    if (!url) return "#";
    const absolute = /^(https?:|mailto:|#)/i.test(url);
    return esc(absolute ? url : encodeURI(url));
}

/** Links to other websites open in a new tab. */
export function targetAttrs(url) {
    return /^https?:/i.test(url || "") ? ' target="_blank" rel="noopener"' : "";
}

/** It recognizes a YouTube or Vimeo link and returns the player address. */
export function parseVideo(url) {
    if (!url) return null;
    let m = url.match(/(?:youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/i);
    if (m) {
        return {
            provider: "YouTube",
            embed: `https://www.youtube-nocookie.com/embed/${m[1]}?autoplay=1&rel=0`,
            thumb: `https://i.ytimg.com/vi/${m[1]}/hqdefault.jpg`,
        };
    }
    m = url.match(/vimeo\.com\/(?:video\/)?(\d+)/i);
    if (m) {
        return { provider: "Vimeo", embed: `https://player.vimeo.com/video/${m[1]}?autoplay=1`, thumb: null };
    }
    return null;
}

/** Counts tags from all projects: [{ tag, count }], with the most frequent ones first. */
export function countTags(projects) {
    const counts = new Map();
    for (const p of projects) for (const t of p.tags || []) counts.set(t, (counts.get(t) || 0) + 1);
    return [...counts.entries()]
        .map(([tag, count]) => ({ tag, count }))
        .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag));
}

/** Project webpage address. */
export function projectUrl(p) {
    return `project.html?id=${encodeURIComponent(p.id)}`;
}
