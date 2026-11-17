/*
    ======================================================================
    Everything that has a subpage project.html?id=…:
    games and tools from data/projects.js, libraries from data/libraries.js
    ======================================================================
*/

import { projects } from "../../data/projects.js";
import { libraries } from "../../data/libraries.js";

/** Type names – the badge in the corner of a "Highlights" card and the text on the subpage */
export const TYPE_NAMES = { game: "Game", app: "App", library: "Library" };

/** "library" for entries from libraries.js, "tool" for type: "tool", otherwise "game" */
export function typeOf(entry) {
    if (libraries.includes(entry)) return "library";
    return entry.type === "app" ? "app" : "game";
}

/** Games, tools and libraries in one array */
export const entries = [...projects, ...libraries];

// The same id in two entries = two entries under one address. We warn in the console (F12).
const seen = new Set();
for (const e of entries) {
    if (seen.has(e.id)) console.warn(`Duplicate id "${e.id}" – project.html?id=${e.id} shows only the first entry.`);
    seen.add(e.id);
}

/** The entry with the given id, or undefined */
export function findEntry(id) {
    return entries.find((e) => e.id === id);
}
