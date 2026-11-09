/*
   ==================================================================================================
   {ext} i {size} w notatkach przycisków pobierania.

   W data/projects.js piszesz np.:
   { label: "Windows 64-bit", note: "{ext} · {size}", url: "Downloads/Gra.exe", kind: "download" }
   a strona pokaże ".exe · 28.9 MB" – po podmianie pliku nic nie poprawiasz ręcznie.

   {ext}  – brane z końca adresu, działa dla każdego linku.
   {size} – odczytywane z serwera, działa dla:
            • plików na Twojej stronie (np. "Downloads/…")      → zapytanie HEAD
            • plików z releasu na GitHubie:
              https://github.com/<login>/<repo>/releases/latest/download/<plik>
              https://github.com/<login>/<repo>/releases/download/<tag>/<plik>
                                                                → API GitHuba
            Inne strony nie pozwalają przeglądarce czytać swoich plików (CORS),
            więc tam {size} po prostu znika – razem ze swoim " · ".
   ==================================================================================================
*/

const SEP = " · ";
const cache = new Map();

/** "Downloads/Gra x64.exe" → ".exe"; "" if the address does not end with an extension */
export function fileExt(url) {
    try {
        const name = decodeURIComponent(new URL(url, location.href).pathname.split("/").pop());
        const match = name.match(/\.([a-z0-9]{1,8})$/i);
        return match ? "." + match[1].toLowerCase() : "";
    } catch {
        return "";
    }
}

/** 30337021 → "28.9 MB" (calculated using 1024, as shown in Windows) */
export function formatSize(bytes) {
    const units = ["B", "KB", "MB", "GB"];
    let value = bytes;
    let i = 0;
    while (value >= 1024 && i < units.length - 1) {
        value /= 1024;
        i++;
    }
    return `${value.toFixed(i === 0 || value >= 100 ? 0 : 1)} ${units[i]}`;
}

/** Inserts values ​​into {keys}; parts that turn out empty disappear, along with the " · " */
export function fillNote(note, values) {
    return note
        .split(SEP)
        .map((part) => part.replace(/\{(\w+)\}/g, (all, key) => (key in values ? values[key] ?? "" : all)).trim())
        .filter(Boolean)
        .join(SEP);
}

/** File size in bytes, or null if it cannot be read */
export function fileSize(url) {
    if (!cache.has(url)) cache.set(url, readSize(url).catch(() => null));
    return cache.get(url);
}

async function readSize(url) {
    const u = new URL(url, location.href);

    const gh = u.hostname === "github.com" && u.pathname.match(/^\/([^/]+)\/([^/]+)\/releases\/(?:latest\/download|download\/([^/]+))\/([^/]+)$/);
    if (gh) {
        const [, user, repo, tag, file] = gh;
        const api = `https://api.github.com/repos/${user}/${repo}/releases/${tag ? "tags/" + tag : "latest"}`;
        const release = await cachedJson(api);
        const asset = release?.assets?.find((a) => a.name === decodeURIComponent(file));
        return asset ? asset.size : null;
    }

    if (u.origin === location.origin) {
        const res = await fetch(u, { method: "HEAD" });
        const length = Number(res.headers.get("Content-Length"));
        return res.ok && length > 0 ? length : null;
    }

    return null;
}

/** We memorize the answer for the duration of the card. */
async function cachedJson(url) {
    const key = "gh:" + url;
    try {
        const saved = sessionStorage.getItem(key);
        if (saved) return JSON.parse(saved);
    } catch {}
    const res = await fetch(url);
    if (!res.ok) return null;
    const data = await res.json();
    try {
        sessionStorage.setItem(key, JSON.stringify({ assets: data.assets.map(({ name, size }) => ({ name, size })) }));
    } catch {}
    return data;
}

/** The text is available immediately: {ext} is known right away, while {size} displays "…" until the value arrives */
export function noteNow(note, url) {
    return fillNote(note, { ext: fileExt(url), size: "…" });
}

/** Finds all <small data-note> elements within `root` and populates {size} */
export function fillDownloadNotes(root) {
    root.querySelectorAll("small[data-note]").forEach(async (el) => {
        const note = el.dataset.note;
        const url = el.dataset.url;
        if (!note.includes("{size}")) return;
        const bytes = await fileSize(url);
        const text = fillNote(note, { ext: fileExt(url), size: bytes ? formatSize(bytes) : "" });
        el.textContent = text;
        el.hidden = !text;
    });
}
