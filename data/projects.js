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
        // Optional, the page shows only the month: “March 2026”
        // Possible formats:
        // - "2026-03"                   - manually
        // - "2026-03-09"                - the full date works too
        // - "github:Muppetsg2/Shooter"  - date of the latest release on GitHub
        updated: "2026-03-09"
    },
*/

export const projects = [
    {
        id: "marry-kiss-kill",
        title: "Marry, Kiss & Kill",
        featured: false,
        engine: "Unity",
        summary: "A party app with three game modes: enter names and pick, let the phone decide, or choose from a list of celebrities.",
        description: [
            "Bring some fun to your next gathering with this simple party game! Whether you're playing with friends or just looking for a good laugh, there are three ways to play:",
            "\t-❤ **Enter Names & Pick** – for groups of two or more.",
            "\t-❤ **Let the Phone Decide** – simply let your phone make the choice, with any number of players.",
            "\t-❤ **Choose from Celebrities** – let the phone pick from a selection of famous people.",
            "The app is all about having fun together, sharing laughs, and maybe revealing a secret or two. Your choices are never saved or sent anywhere, so you can play with complete privacy!",
        ],
        tags: ["Unity", "Party", "Android", "Team"],
        icon: "assets/img/projects/marry-kiss-and-kill-icon.webp",
        cover: "assets/img/projects/marry-kiss-and-kill-cover.webp",
        trailer: null,
        links: [
            { label: "Android", note: "Google Play", url: "https://play.google.com/store/apps/details?id=com.MAIPA.INCandMuppetsg2.MKandK", kind: "store", primary: true },
        ],
        role: "UI Designer, VFX & Data Curator",
        team: [
            { name: "Marceli Antosik", role: "UI Designer, VFX & Data Curator" },
            { name: "Patryk Antosik", role: "Game Designer & Gameplay Programmer" },
        ],
        info: { engine: "Unity", language: "C#", version: "2.4d" },
        updated: "2026-03-08",
    },

    {
        id: "shooter",
        title: "Shooter",
        featured: false,
        engine: "Unity",
        summary: "Challenge your friends in this action-packed score-chasing game! Customize your gameplay, fight different enemy types, unlock powerful weapons, and climb the levels to achieve the highest score.",
        description: [
            "Want to challenge your friends and see who can score the most points? Then this game is made for you!",
            "With plenty of customization options, you can adjust the gameplay to suit your preferences. Find your favourite setup, jump into the action, and do your best to beat the high score!",
            "Here's what you can expect:",
            "\t- **3 Map Sizes** 🗺️:",
            "\t\t- 30×30",
            "\t\t- 60×60",
            "\t\t- 100×100",
            "\t- **3 Different Enemy Types** 😈*:",
            "\t\t- Normal",
            "\t\t- Large",
            "\t\t- Small and Fast",
            "\t- **2 Additional Weapons** 🔫**:",
            "\t\t- AK-47",
            "\t\t- Bazooka",
            "*Each enemy type changes its appearance and stats as the score increases.",
            "**These weapons spawn randomly across the map, giving you an extra advantage in battle.",
        ],
        tags: ["Unity", "Arcade", "Windows", "Android", "Google Play", "Solo"],
        icon: "assets/img/projects/shooter-icon.webp",
        cover: "assets/img/projects/shooter-cover.webp",
        trailer: "https://www.youtube.com/watch?v=d_IHK5qQBHs",
        links: [
            { label: "Windows 64-bit", note: "{ext} · {size}", url: "Downloads/Shooter 1.5.0 x64.exe", kind: "download", primary: true },
            { label: "Windows 32-bit", note: "{ext} · {size}", url: "Downloads/Shooter 1.5.0 x32.exe", kind: "download" },
            { label: "Android", note: "Google Play", url: "https://play.google.com/store/apps/details?id=com.Muppetsg2.Shooter", kind: "store" },
        ],
        role: "Solo Developer",
        team: [
            { name: "Marceli Antosik", role: "Solo Developer" },
        ],
        info: { engine: "Unity", language: "C#", "version.windows": "1.5.0", "version.android": "1.5.9" },
        features: [
            { title: "Different Map Sizes", text: "Choose from 3 map sizes: 30×30, 60×60, and 100×100. Pick the one that suits your playstyle!" },
            { title: "Different Enemy Types", text: "Face 3 types of enemies: Normal, Large, and Small but Fast. Each type has unique stats and appearance that evolve as your score increases." },
            { title: "Additional Weapons", text: "Find powerful weapons scattered randomly across the map, including the AK-47 and Bazooka. Use them to gain an advantage over your enemies." },
            { title: "Event-Themed Maps", text: "Discover special map themes available only during certain dates and seasonal events." },
            { title: "Leveling System", text: "Earn points to level up and increase the damage you deal. The higher your level, the stronger you become!" },
            { title: "Google Play Games Integration", icon: "googlePlayGames", text: "Unlock achievements and compete with other players by submitting your scores to Google Play leaderboards." },
        ],
        updated: "2026-03-09",
    },

    {
        id: "diler",
        title: "Diler – The Last 7Week",
        featured: false,
        engine: "Unity",
        summary: "An action-packed space shooter where you help a dealer recover his debts, uncover the mystery of the last 7week, and choose from 6 different spaceships across two game modes.",
        description: [
            "Get behind the controls of a spaceship and take down the dealer's debtors in this action-packed space shooter! Choose from *6* different spaceships and help the dealer settle some unfinished business.",
            "The game features two modes:",
            "\t-★ **Story Mode** – Uncover the full story, solve the mystery of the last 7week, and help the dealer collect the debts he's owed.",
            "\t-★ **Endless Mode** – Beat your own high scores or compete with your friends. Survive for as long as you can and see how far you can go!",
        ],
        tags: ["Unity", "Action", "Space Shooter", "Android", "Google Play", "Team"],
        icon: "assets/img/projects/diler-icon.webp",
        cover: "assets/img/projects/diler-cover.webp",
        trailer: "https://www.youtube.com/watch?v=byNMAhhpPEM",
        links: [
            { label: "Android", note: "Google Play", url: "https://play.google.com/store/apps/details?id=com.MAIPA.INC.Muppetsg2.Last7Weeks", kind: "store", primary: true },
        ],
        role: "Level & UI Designer & Google Play Integration",
        team: [
            { name: "Marceli Antosik", role: "Level & UI Designer & Google Play Integration" },
            { name: "Patryk Antosik", role: "3D Models & Gameplay Programmer" },
        ],
        info: { engine: "Unity", language: "C#", version: "1.5.3" },
        features: [
            { title: "Google Play Games Integration", icon: "googlePlayGames", text: "Earn Achievements and post your scores in google play leaderboards." },
        ],
        updated: "2026-03-10",
    },

    {
        id: "the-wizards",
        title: "The Wizards",
        featured: false,
        engine: "Unity",
        summary: "A platformer inspired by MaiPa's videos, where four wizards join forces to save the world from an evil lord and his darkness.",
        description: [
            "**The Wizards** is a platformer about a team of four wizards who must save the world from an evil force threatening to corrupt it. Step into the shoes of one of four unique wizards and stop the Evil Lord from plunging the world into darkness!",
            "A platforming adventure inspired by the videos created by [**MaiPa**](https://www.youtube.com/@maipa01).",
            "This is my first game made with Unity!"
        ],
        tags: ["Unity", "Platformer", "Windows", "Android", "Google Play", "Team"],
        icon: "assets/img/projects/the-wizards-icon.webp",
        cover: "assets/img/projects/the-wizards-cover.webp",
        trailer: "https://www.youtube.com/watch?v=xD1GqSaPBaw",
        links: [
            { label: "Windows 64-bit", note: "{ext} · {size}", url: "Downloads/The Wizards 3.2b x64.exe", kind: "download", primary: true },
            { label: "Windows 32-bit", note: "{ext} · {size}", url: "Downloads/The Wizards 3.2b x32.exe", kind: "download" },
            { label: "Android", note: "Google Play", url: "https://play.google.com/store/apps/details?id=com.MAIPA.INC.Muppetsg2Company.TheWizards", kind: "store" },
        ],
        role: "Level & UI Designer & Google Play Integration",
        team: [
            { name: "Marceli Antosik", role: "Level & UI Designer & Google Play Integration" },
            { name: "Patryk Antosik", role: "Gameplay Programmer" },
        ],
        info: { engine: "Unity", language: "C#", "version.windows": "3.2b", "version.android": "3.2c" },
        features: [
            { title: "Event Theme Levels", text: "Complete Event Theme Levels." },
            { title: "Google Play Games Integration", icon: "googlePlayGames", text: "Earn Achievements for completing levels." },
        ],
        updated: "2026-03-11",
    },
];
