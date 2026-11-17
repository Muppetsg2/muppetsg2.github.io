/*
    ==========================================================================
    Code window (like the one in the hero) for library examples:
    { file, code, lang? }

    lang – coloring preset: "c", "cpp", "csharp", "python", "cmake", "shell" or "text"
           (also "c++", "c#", "cs", "py", "bash", "terminal", "plain").
           Without lang the preset is guessed from the file name:
             .c → c,  .cpp .h .hpp → cpp,  .cs → csharp,  .py → python,
             CMakeLists.txt .cmake → cmake,  Terminal .sh → shell,
             anything else → text (no colors).

    Every code window gets a "Copy" button (addCopyButtons), shown on hover.

    The same classes as the hero:
    .c comment, .s string, .p preprocessor, .m macro, .bk branch keyword,
    .k keyword, .n number, .ns namespace, .f function, .cs class / type,
    .v variable
    ==========================================================================
*/

import { esc } from "./utils.js";
import { icon } from "./icons.js";

const words = (text) => new Set(text.split(/\s+/).filter(Boolean));

/* ---------- C, C++ and C#: one tokenizer, different word lists ---------- */

// Groups: comment | string | preprocessor line start | number | word.
// Comments and strings come first, so they "swallow" everything inside them.
const C_TOKEN = new RegExp(
    [
    /(\/\/[^\n]*|\/\*[\s\S]*?\*\/)/.source,                                                                      // // … and /* … */
        /(@"(?:""|[^"])*"|\$?"(?:\\.|[^"\\\n])*"|'(?:\\.|[^'\\\n])*'|<[\w./-]+\.(?:h|hpp|hh|hxx|inl)>)/.source,  // "…", '…', @"…", $"…", <header.h>
        /(^[ \t]*#[ \t]*[a-z]+)/.source,                                                                         // #include, #define, #region… at the start of a line
        /\b(0[xX][\da-fA-F']+[uUlL]*|\d[\d']*\.?\d*(?:[eE][+-]?\d+)?[fFuUlLdDmM]*)/.source,                      // 42, 0.1f, 0xFF, 1'000
        /\b([A-Za-z_]\w*)/.source,                                                                               // names
    ].join("|"),
    "gm"
);

const C_KEYWORDS = "auto char const double enum extern float inline int long register restrict short signed sizeof static struct typedef union unsigned void volatile _Bool bool true false";
const C_BRANCH = "if else for while do switch case default break continue return goto";
const C_TYPES = "size_t ptrdiff_t FILE wchar_t va_list int8_t int16_t int32_t int64_t uint8_t uint16_t uint32_t uint64_t intptr_t uintptr_t";

/* ---------- Python: comment | string | @decorator | number | name ---------- */

// Strings may have a prefix (f"…", r"…", b"…") and three quotes ("""…""").
const PY_TOKEN =
    /(#[^\n]*)|((?:[rRbBuUfF]{1,2})?(?:"""[\s\S]*?"""|'''[\s\S]*?'''|"(?:\\.|[^"\\\n])*"|'(?:\\.|[^'\\\n])*'))|(@[\w.]+)|\b(0[xXoObB][\da-fA-F_]+|\d[\d_]*\.?[\d_]*(?:[eE][+-]?\d+)?j?)|\b([A-Za-z_]\w*)/g;

const LANGS = {
    c: cFamily({ keywords: C_KEYWORDS, branch: C_BRANCH, types: C_TYPES }),

    cpp: cFamily({
        keywords:
            C_KEYWORDS +
            " alignas alignof class concept consteval constexpr constinit const_cast decltype delete dynamic_cast explicit" +
            " export final friend mutable namespace new noexcept nullptr operator override private protected public" +
            " reinterpret_cast requires static_assert static_cast template this thread_local typename using virtual" +
            " char8_t char16_t char32_t co_await co_yield",
        branch: C_BRANCH + " try catch throw co_return",
        types:
            C_TYPES +
            " string string_view wstring vector array map unordered_map set unordered_set list deque queue stack optional" +
            " variant any tuple pair span function unique_ptr shared_ptr weak_ptr mutex thread atomic byte nullptr_t" +
            " ostream istream iostream fstream ifstream ofstream stringstream filesystem path",
        namespaceAfter: "namespace",
    }),

    csharp: cFamily({
        keywords:
            "abstract as base bool byte char checked class const decimal delegate double enum event explicit extern false fixed" +
            " float implicit in int interface internal is lock long namespace new null object operator out override params" +
            " private protected public readonly ref sbyte sealed short sizeof stackalloc static string struct this true typeof" +
            " uint ulong unchecked unsafe ushort using virtual void volatile var dynamic async await get set init value record" +
            " nameof when where",
        branch: C_BRANCH + " foreach try catch finally throw yield",
        types: "",
        namespaceAfter: "using namespace",
        macros: false, // in C# ALL_CAPS names are ordinary constants
        capitalTypes: true, // in C# Tooltip.Show(…), Debug.Log(…) – a capital name is almost always a class
    }),

    /* ---------- CMake: comment | string | ${VAR} | command( | KEYWORD | number ---------- */
    cmake: {
        token: /(#[^\n]*)|("(?:\\.|[^"\\])*")|(\$\{[^}\n]*\})|\b([A-Za-z_]\w*)(?=\s*\()|\b([A-Z][A-Z0-9_]+)\b|(?<![\w.])(\d[\d.]*)\b/g,
        classify: (m) => (m[1] ? "c" : m[2] ? "s" : m[3] ? "v" : m[4] ? "f" : m[5] ? "k" : m[6] ? "n" : ""),
    },

    /* ---------- Terminal: comment | string | $VAR | first word = command | --flag ---------- */
    shell: {
        token: /(^[ \t]*#[^\n]*)|("(?:\\.|[^"\\])*"|'[^'\n]*')|(\$\{?\w+\}?)|(^[ \t]*[\w./-]+)|((?<=\s)--?[\w-]+)/gm,
        classify: (m) => (m[1] ? "c" : m[2] ? "s" : m[3] ? "v" : m[4] ? "f" : m[5] ? "k" : ""),
    },

    python: pythonRules(),

    text: null, // no colors
};

function pythonRules() {
    const KEYWORDS = words("and as assert async await class def del from global import in is lambda nonlocal not or pass with None True False self cls");
    const BRANCH = words("if elif else for while break continue return try except finally raise yield match case");

    return {
        token: PY_TOKEN,
        classify(m, code, state) {
            const [text, comment, string, decorator, number, word] = m;
            if (comment) return "c";
            if (string) return "s";
            if (decorator) return "m"; // @staticmethod, @dataclass
            if (number) return "n";

            const previous = state.previous;
            state.previous = word;
            state.modules ??= new Set(); // names brought in by import – shown as namespaces later too
            const line = code.slice(code.lastIndexOf("\n", m.index) + 1, m.index);
            const after = code.slice(m.index + text.length);

            if (BRANCH.has(word)) return "bk";
            if (KEYWORDS.has(word)) return "k";
            if (previous === "def") return "f"; // def name(…)
            if (previous === "class") return "cs"; // class Name:
            if (previous === "import" || previous === "from" || (previous === "as" && /^\s*(import|from)\b/.test(line))) {
                state.modules.add(word); // import unreal → unreal.… is a namespace
                return "ns";
            }
            if (state.modules.has(word)) return "ns";
            if (/^[A-Z][A-Z0-9_]+$/.test(word)) return "m"; // SCENE, MAX_SIZE – constants
            if (/^\s*\(/.test(after)) return "f"; // name(…) – a function or a constructor
            if (/^[A-Z]/.test(word)) return "cs"; // VoxImportType – a class
            return "v";
        },
    };
}

/** Coloring rules shared by C, C++ and C#; only the word lists differ */
function cFamily({ keywords, branch, types, namespaceAfter = "", macros = true, capitalTypes = false }) {
    const KEYWORDS = words(keywords);
    const BRANCH = words(branch);
    const TYPES = words(types);
    const NS_AFTER = words(namespaceAfter);
    const TYPE_AFTER = words("class struct enum union typename new");

    return {
        token: C_TOKEN,
        classify(m, code, state) {
            const [text, comment, string, directive, number, word] = m;
            if (comment) return code[m.index - 1] === ":" ? "" : "c"; // "https://…" is not a comment
            if (string) return "s";
            if (directive) return "p";
            if (number) return "n";

            const previous = state.previous;
            state.previous = word;
            const after = code.slice(m.index + text.length);

            if (BRANCH.has(word)) return "bk";
            if (KEYWORDS.has(word)) return "k";
            if (NS_AFTER.has(previous)) return "ns";                                                 // using NativeTooltips; namespace std
            if (after.startsWith("::")) return "ns";                                                 // UnrealQOI::Load → UnrealQOI is a namespace
            if (macros && /^[A-Z][A-Z0-9_]+$/.test(word)) return "m";                                // TEXT(…), UE_LOG, V4C_FLAG_… – macros and constants
            if (/^\s*(<[^<>;()]*>\s*)?\(/.test(after)) return "f";                                   // Load(…) and AddComponent<T>(…) are functions
            if (TYPES.has(word) || TYPE_AFTER.has(previous)) return "cs";                            // known types; class Foo, new Foo
            if (/^\s*[*&]*\s*[A-Za-z_]\w*\s*[;=,)[{(]/.test(after)) return "cs";                     // FQOIImage Image; v4c_scene* scene = … – the name before a declared name is a type
            if (/^(<|\s*>|\s*[*&]+\s*[)>,])/.test(after) || code[m.index - 1] === "<") return "cs";  // TArray<FColor>, (UTexture2D*)
            if (capitalTypes && /^[A-Z]/.test(word)) return "cs";
            return "v";                                                                              // everything else is a variable – in C++ also Image, Error, Capture
        },
    };
}

const ALIASES = { "c++": "cpp", cs: "csharp", "c#": "csharp", py: "python", python3: "python", bash: "shell", sh: "shell", terminal: "shell", plain: "text", none: "text" };
const BY_EXTENSION = { c: "c", h: "cpp", hh: "cpp", hpp: "cpp", hxx: "cpp", inl: "cpp", cc: "cpp", cpp: "cpp", cxx: "cpp", cs: "csharp", py: "python", cmake: "cmake", sh: "shell", bash: "shell" };

/** The preset for a block: its lang, or a guess from the file name */
export function blockLang(block) {
    if (block.lang) {
        const lang = String(block.lang).toLowerCase();
        return ALIASES[lang] || (lang in LANGS ? lang : "text");
    }
    const file = String(block.file || "").toLowerCase();
    if (file === "cmakelists.txt") return "cmake";
    if (/^(terminal|shell|console|bash)$/.test(file)) return "shell";
    return BY_EXTENSION[file.match(/\.([a-z]+)$/)?.[1]] || "text";
}

/** Code → HTML with colors. Every piece goes through esc(), so <, > and & can't break the page. */
export function highlight(code, lang = "cpp") {
    const rules = LANGS[lang];
    if (!rules) return esc(code);
    const state = {};
    let html = "";
    let last = 0;
    for (const m of code.matchAll(rules.token)) {
        const cls = rules.classify(m, code, state);
        html += esc(code.slice(last, m.index)) + (cls ? `<span class="${cls}">${esc(m[0])}</span>` : esc(m[0]));
        last = m.index + m[0].length;
    }
    return html + esc(code.slice(last));
}

/** Removes the indentation the code got from the data file, and empty lines at the edges */
function dedent(text) {
    const lines = String(text ?? "").replace(/^\s*\n/, "").trimEnd().split("\n");
    const pad = Math.min(...lines.filter((l) => l.trim()).map((l) => l.match(/^ */)[0].length));
    return lines.map((l) => l.slice(pad)).join("\n");
}

/** { file, code, lang? } → a window with dots, the file name and highlighted code */
export function codeWindow(block) {
    const lang = blockLang(block);
    return `
    <figure class="code-window is-example">
        <div class="code-bar"><span class="dot"></span><span class="dot"></span><span class="dot"></span>${esc(block.file || "")}</div>
        <pre class="lang-${lang}">${highlight(dedent(block.code), lang)}</pre>
    </figure>`;
}

/* ---------- "Copy" button on code windows ---------- */

/** Adds a copy button to every code window inside root that has none yet (hero, library examples).
    The <pre> gets wrapped in .code-body, so the button can sit in its top right corner, under the bar. */
export function addCopyButtons(root = document) {
    root.querySelectorAll(".code-window").forEach((win) => {
        const pre = win.querySelector("pre");
        if (!pre || win.querySelector(".code-copy")) return;
        const body = document.createElement("div");
        body.className = "code-body";
        pre.replaceWith(body);
        body.append(pre);
        // The hero window is aria-hidden (decoration) – its button stays out of the Tab order
        const hidden = win.closest("[aria-hidden='true']") ? ' tabindex="-1"' : "";
        body.insertAdjacentHTML(
            "afterbegin",
            `<button type="button" class="code-copy"${hidden} aria-label="Copy code">${icon("copy", 15)}<span>Copy</span></button>`
        );
    });
}

/** Puts text into the clipboard; the older execCommand way when the Clipboard API is not available */
async function copyText(text) {
    try {
        await navigator.clipboard.writeText(text);
    } catch {
        const area = document.createElement("textarea");
        area.value = text;
        area.style.position = "fixed";
        area.style.opacity = "0";
        document.body.append(area);
        area.select();
        document.execCommand("copy");
        area.remove();
    }
}

// One listener for every copy button on the page (event delegation)
document.addEventListener("click", async (e) => {
    const btn = e.target.closest(".code-copy");
    if (!btn) return;
    const pre = btn.closest(".code-window").querySelector("pre");
    await copyText(pre.textContent.replace(/^\n/, "").trimEnd());
    btn.classList.add("is-done");
    btn.innerHTML = `${icon("check", 15)}<span>Copied</span>`;
    clearTimeout(btn.resetTimer);
    btn.resetTimer = setTimeout(() => {
        btn.classList.remove("is-done");
        btn.innerHTML = `${icon("copy", 15)}<span>Copy</span>`;
    }, 1600);
});
