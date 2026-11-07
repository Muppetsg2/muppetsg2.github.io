/* 
   =====================================================================
   PROJECTS – one object = one project.
   New project? Copy an object, change the values, and you’re all set.
   The order in the array = the order on the page.
   =====================================================================
*/

/*
    Template project:
    {
        id: "unique-name-id",                 // Unique, no spaces – subpage address: project.html?id=unique-name-id
        title: "Game Name",                   // Name on the website
        featured: true,                       // True = large card in "Highlights"
        engine: "Unity",                      // label on the cover
        award: "",                            // Optional, e.g., "Game jam winner" (leave empty if none)
        summary: "Short info about project",  // Short info what project is about. It is shown on project card
        description: [
            "First paragraph of description",
            "Second paragraph of description",
        ],
        tags: ["Unity", "Arcade", "Windows", "Android"],         // A filter is created from them
        icon: "assets/img/projects/unique-name-id-icon.webp",    // Square icon (256x256)
        cover: "assets/img/projects/unique-name-id-cover.webp",  // Cover image (1280x720)
        trailer: "https://www.youtube.com/watch?v=2yJgwwDcgV8",  // YouTube, Vimeo or null
        links: [
            // kind: download | play | source | store | external – chooses icon
            // primary: true – main button on the “Highlights” tab
            // note may use:
            // - {ext} (".exe", from the url)
            // - {size} ("28.9 MB", read by the page itself – files on this site and GitHub release files: github.com/<user>/<repo>/releases/latest/download/<file>)
            { label: "Android", note: "Google Play", url: "https://play.google.com/store/apps/details?id=com.companyName.GameId", kind: "store", primary: true },
            { label: "Windows 64-bit", note: ".exe · 30 MB", url: "Downloads/ExeFile.exe", kind: "download" },
        ],
        info: { engine: "Unity", "version.pc": "1.5.0", "version.android": "1.5.9" },  // table on the subpage – any key-value pair can be entered
        role: "",                                                                      // Optional, e.g., "Gameplay Programmer" (leave empty if none)
        team: [
            // Optional
            { name: "Person 1", role: "Role 1" },
        ],
        features: [
            // Optional
            { title: "Title1", text: "Description" }
        ],
        stack: ["Unity", "C#"], // Optional, array of libraries / tools
    },
*/

export const projects = [
    {
        id: "shooter",
        title: "Shooter",
        featured: true,
        engine: "Unity",
        award: "",
        summary: "Challenge your friends to a high-score battle and tune the gameplay with tons of settings.",
        description: [
            "Want to challenge your friends to see who scores the most points? This game is made for you.",
            "You'll find a lot of settings that change the gameplay to fit you. Find your favourite setup and try your best to beat the high score.",
        ],
        tags: ["Unity", "Arcade", "Windows", "Android"],
        icon: "assets/img/projects/shooter-icon.webp",
        cover: "assets/img/projects/shooter-cover.webp",
        trailer: "https://www.youtube.com/watch?v=d_IHK5qQBHs",
        links: [
            { label: "Android", note: "Google Play", url: "https://play.google.com/store/apps/details?id=com.Muppetsg2.Shooter", kind: "store", primary: true },
            { label: "Windows 64-bit", note: ".exe · 30 MB", url: "Downloads/Shooter 1.5.0 x64.exe", kind: "download" },
        ],
        info: { engine: "Unity", "version.pc": "1.5.0", "version.android": "1.5.0" },
    },
];
