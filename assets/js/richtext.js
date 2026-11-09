/*
    ======================================================
    Simple formatting for project texts (data/projects.js)
    ======================================================
*/

/*
   summary and description:
     **bold**   *italics*   [link text](https://…)

   For the description field only, at the beginning of a line:
     "\tText"     – indented line (a tab character creates an indentation)
     "- Text"     – list item; consecutive items form a single list
     "-❤ Text"    – list item with a custom bullet: anything between the "-"
                     and the first space (e.g., ❤, ★, →, 1., etc.)
     "\t-❤ Text"  – tab characters can also precede a list item, creating an indented list;
                     "\t\t" represents two levels of indentation, and so on.

   The `esc()` function is applied first, so any HTML included in the data is treated as plain text.
*/

import { esc, href, targetAttrs } from "./utils.js";

const LINK = /\[([^\]]+)\]\(([^)\s]+)\)/g; // [text](address)

/** **bold** and *italics* → <strong> / <em> */
function format(text) {
    return esc(text)
        .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
        .replace(/\*(.+?)\*/g, "<em>$1</em>");
}

/** [text](address) → <a>. Only http(s), mailto, and paths within the site are supported –
    anything else (e.g., "javascript:") remains plain text. External links open in a new tab */
function link(label, url) {
    const safe = /^(https?:|mailto:)/i.test(url) || !/^[a-z][a-z0-9+.-]*:/i.test(url);
    if (!safe) return format(label);
    return `<a class="rich-link" href="${href(url)}"${targetAttrs(url)}>${format(label)}</a>`;
}

/** Text with **bolding**, *italics*, and [links](…) → HTML. We extract the links first,
    so their addresses remain untouched by both `esc()` and the asterisks */
export function inlineText(text) {
    const source = String(text ?? "");
    let html = "";
    let last = 0;
    for (const m of source.matchAll(LINK)) {
        html += format(source.slice(last, m.index)) + link(m[1], m[2]);
        last = m.index + m[0].length;
    }
    return html + format(source.slice(last));
}

/** The same text without asterisks or link URLs – for use where HTML is not permitted (e.g., <meta> tags) */
export function plainText(text) {
    return String(text ?? "")
        .replace(LINK, "$1")
        .replace(/\*\*(.+?)\*\*/g, "$1")
        .replace(/\*(.+?)\*/g, "$1");
}

/** Description lines → paragraphs, indentations, and lists */
export function richText(lines) {
    let html = "";
    let items = [];
    const flush = () => {
        if (items.length) html += `<ul class="rich-list">${items.join("")}</ul>`;
        items = [];
    };
    for (const line of lines) {
        const level = line.match(/^\t*/)[0].length;
        const rest = line.slice(level);
        const indent = level ? ` style="--level: ${level}"` : "";
        const point = rest.match(/^-(\S*)\s+(.*)$/);
        if (point) {
            const [, marker, text] = point;
            items.push(
                marker
                ? `<li class="has-marker"${indent}><span class="rich-marker" aria-hidden="true">${esc(marker)}</span>${inlineText(text)}</li>`
                : `<li${indent}>${inlineText(text)}</li>`
            );
            continue;
        }
        flush();
        html += level ? `<p class="indent"${indent}>${inlineText(rest)}</p>` : `<p>${inlineText(rest)}</p>`;
    }
    flush();
    return html;
}
