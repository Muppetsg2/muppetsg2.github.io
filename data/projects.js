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
        id: "unique-name-id",                 // Unique in projects.js AND libraries.js, no spaces – subpage address: project.html?id=unique-name-id
        type: "game",                         // Optional – "app" puts it in the "Apps" group, without the field it's a game
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
            // kind: download | itch | web | source | store | external – chooses icon
            //       itch = page on itch.io, web = game playable in the browser (both get a quick button on the card)
            // primary: true – main button on the “Highlights” tab
            // note may use:
            // - {ext} (".exe", from the url)
            // - {size} ("28.9 MB", read by the page itself – files on this site and GitHub release files: github.com/<user>/<repo>/releases/latest/download/<file>)
            { label: "Android", note: "Google Play", url: "https://play.google.com/store/apps/details?id=com.companyName.GameId", kind: "store", primary: true },
            { label: "Windows 64-bit", note: ".exe · 30 MB", url: "Downloads/ExeFile.exe", kind: "download" },
        ],
        info: { engine: "Unity", "version.pc": "1.5.0", "version.android": "1.5.9" },  // table on the subpage – any key-value pair can be entered
        role: "",                                                                      // Optional, your role, e.g., "Gameplay Programmer" (leave empty if none)
        team: [
            // Optional – the OTHER people on the team (you are already shown under "My role")
            // Role names: job titles ("Programmer", "Designer", "Artist"), "A & B" for two, "A, B & C" for more
            { name: "Person 1", role: "Role 1" },
        ],
        features: [
            // Optional – icon: name from assets/js/icons.js (optional), text may use **bold**, *italic*, [links](url)
            { title: "Title1", icon: "star", text: "Description" }
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

    /* ---------- Games (type: "game") ---------- */

    // Steamline
    {
        id: "steamline",
        title: "Steamline",
        featured: true,
        engine: "Unreal Engine",
        award: "ZTGK 2026 · Game Design finalist",
        summary: "A logic-based puzzle game where you connect pipes, manage limited resources, and build efficient steam networks to power 19th-century factories.",
        description: [
            "**Steamline** is a logic-based puzzle game where you take on the role of an engineer responsible for supplying steam to a 19th-century factory.",
            "Design and manage a working steam network by solving puzzles and connecting pipes and other components correctly. Each factory has its own steam power requirements, while every boiler room has limited resources at your disposal.",
            "Your goal is to build an efficient steam system and deliver exactly what each factory needs. Can you keep the machines running?"
        ],
        tags: ["Unreal Engine", "Puzzle", "Team", "Windows", "itch.io", "Blueprints", "C++", "ZTGK"],
        icon: "assets/img/projects/steamline-icon.webp",
        cover: "assets/img/projects/steamline-cover.webp",
        trailer: "https://vimeo.com/1200578322",
        links: [
            { label: "Download on itch.io", note: "free", url: "https://muppetsg2.itch.io/steamline", kind: "itch", primary: true }
        ],
        info: {
            engine: "Unreal Engine",
            language: "Blueprints · C++",
            genre: "Puzzle",
            version: "1.0.7",
            team: "Ryba Team"
        },
        role: "Lead Programmer, Game Designer, VFX Artist & 3D Model Integration",
        team: [
            { name: "Grzegorz Ludziejewski", role: "Gameplay Programmer & VFX Artist" },
            { name: "Jakub Rajczyk", role: "3D Artist" },
            { name: "Magdalena Siuda", role: "3D Artist" },
            { name: "Łukasz Śmieszek", role: "Gameplay Programmer & Music Curator" }
        ],
        features: [
            { title: "Pipe Puzzles", icon: "puzzle", text: "Connect pipes and other components correctly to build a working steam network." },
            { title: "Limited Resources", icon: "flame", text: "Every boiler room has only so much at your disposal – plan before you build." },
            { title: "Exact Requirements", icon: "gauge", text: "Each factory needs its own amount of steam power. Deliver **exactly** what it needs." }
        ],
        updated: "2026-06-25"
    },

    // Destiny Painter
    {
        id: "destiny-painter",
        title: "Destiny Painter",
        featured: true,
        engine: "Unity",
        award: "ZTGK 2025 · Mobile Games finalist",
        summary: "An arcade-style platformer where you jump between colourful planets, solve colour-based challenges, and paint beautiful murals along the way.",
        description: [
            "**Destiny Painter** is an arcade-style game where you leap between colourful planets, leaving a trail of paint behind you.",
            "You can only land on planets that match your current colour, so every jump requires careful planning. Collect colour changers, avoid dangerous black planets, and find your way to the end of each level. Your precision and the number of jumps you make determine how many stars you earn.",
            "Each level is a new mural inspired by [**Tauros**](https://lodz.travel/files/public/_processed_/9/4/csm_OPIEMME_-_Jaracza_20__9__efc18b53d2.png) by **Opiemme**, waiting for you to bring it to life with your colourful trail."
        ],
        tags: ["Unity", "Arcade", "Team", "Android", "itch.io", "C#", "ZTGK"],
        icon: "assets/img/projects/destiny-painter-icon.webp",
        cover: "assets/img/projects/destiny-painter-cover.webp",
        trailer: "https://vimeo.com/1092907356",
        links: [
            { label: "Download on itch.io", note: "free", url: "https://muppetsg2.itch.io/destiny-painter", kind: "itch", primary: true },
            { label: "Source code", note: "All rights reserved (code)", url: "https://github.com/Muppetsg2/DestinyPainter", kind: "source" }
        ],
        info: {
            engine: "Unity",
            language: "C#",
            genre: "Arcade",
            version: "1.0.1",
            team: "Drop Table - 1"
        },
        role: "Art Lead, VFX Artist & Game Designer",
        team: [
            { name: "Patryk Antosik", role: "Player Movement & Animation Programmer" },
            { name: "Bartłomiej Włodarski", role: "Planets Behaviour Programmer" }
        ],
        features: [
            { title: "Colour Matching", icon: "droplet", text: "Land only on planets that match your current colour. Grab colour changers and avoid the black planets." },
            { title: "Living Murals", icon: "palette", text: "Every level is a new mural inspired by **Tauros** by **Opiemme** – your paint trail brings it to life." },
            { title: "Star Ratings", icon: "star", text: "Your precision and the number of jumps decide how many stars you earn." }
        ],
        updated: "github:Muppetsg2/DestinyPainter"
    },

    // CEO Simulator
    {
        id: "ceo-simulator",
        title: "CEO Simulator",
        featured: false,
        engine: "Unity",
        award: "ZTGK 2025 · Virtual Environment finalist",
        summary: "A satirical, low-poly CEO simulator where you make questionable business decisions, manage company resources, and try to keep your employees from starting a riot!",
        description: [
            "**CEO Simulator** is a satirical, low-poly management simulator where you step into the shoes of a company's CEO. Your job is to review documents brought in by employees and make important yes-or-no decisions that will shape the company's future.",
            "You can make your decisions in various creative ways:",
            "\t- **Red/Green Stamp** – Approve or reject documents.",
            "\t- **Trapdoor Button** – Send unwanted employees or documents away.",
            "\t- **Confetti Button** – Celebrate your questionable decisions.",
            "\t- **\"Good Job\" Sticker** – Reward your employees.",
            "\t- **Shredder** – Get rid of documents you don't want to deal with.",
            "\t- **Throw Objects** – Sometimes the simplest solution is to throw things at your employees.",
            "Every decision affects four key company statistics:",
            "\t- **Money** – Keep the company financially stable.",
            "\t- **Production** – Make sure the company keeps running.",
            "\t- **Employee Satisfaction** – Keep your workforce happy.",
            "\t- **Law and Order** – Maintain order within the company.",
            "You can monitor all these statistics on your office computer and try to keep them balanced.",
            "Your goal is to keep the company running for as long as possible. Make poor decisions, neglect your employees, or let your finances fall apart, and you might face bankruptcy, employee protests, or even a full-blown riot.",
            "**How long can you survive as CEO?**"
        ],
        tags: ["Unity", "Simulator", "Endless Runner", "Team", "VR", "itch.io", "C#", "ZTGK"],
        icon: "assets/img/projects/ceo-simulator-icon.webp",
        cover: "assets/img/projects/ceo-simulator-cover.webp",
        trailer: "https://vimeo.com/1092811852",
        links: [
            { label: "Download on itch.io", note: "free", url: "https://magnar303.itch.io/ceo-simulator", kind: "itch", primary: true },
            { label: "Meta Quest 2 & 3", note: "{ext} · {size}", url: "https://github.com/Muppetsg2/VRGame/releases/download/v1.0.0-ZTGK/CEOSimulator.apk", kind: "download" },
            { label: "Source code", note: "All rights reserved (code)", url: "https://github.com/Muppetsg2/VRGame", kind: "source" }
        ],
        info: {
            engine: "Unity",
            language: "C#",
            genre: "Simulator",
            version: "1.0.0",
            team: "Drop Table"
        },
        role: "In-Game Computer Programmer & Platform Compatibility Tester",
        team: [
            { name: "Patryk Antosik", role: "Stamp Programmer & Physics Objects Technical Designer" },
            { name: "Bartłomiej Włodarski", role: "Documents & Environment Programmer, Game Designer" },
            { name: "Maja Ochmańska", role: "Game Designer, 2D Artist & 3D Artist" }
        ],
        features: [
            { title: "Hands-On Decisions", icon: "vr", text: "Stamp, shred, throw or drop documents through a trapdoor – every choice is a physical action in VR." },
            { title: "Four Company Stats", icon: "chart", text: "Money, production, employee satisfaction, and law and order – keep them all balanced." },
            { title: "Office Computer", icon: "monitor", text: "Check how the company is doing on the computer on your desk." },
            { title: "Many Ways to Fail", icon: "alert", text: "Bankruptcy, employee protests, or a full-blown riot – it all depends on your decisions." }
        ],
        updated: "github:Muppetsg2/VRGame"
    },

    // Dog Of War
    {
        id: "dog-of-war",
        title: "Dog Of War",
        featured: false,
        engine: "Unity",
        summary: "A roguelike adventure with procedurally generated levels, where you help a cursed dog collect three pieces of a Wishing Star to break free from endless suffering.",
        description: [
            "A dog cursed to suffer endlessly seeks hope in a Wishing Star, hoping to finally break free from his torment.",
            "This is a roguelike game featuring procedurally generated levels. Your goal is to help the dog collect all three pieces of the Wishing Star and finally free himself from his curse.",
            "Made for **Komiks Game Jam 2k26**, based on the theme *\"Per Aspera Ad Astra\"*."
        ],
        tags: ["Unity", "Roguelike", "Team", "Windows", "itch.io", "C#", "Game Jam"],
        icon: "assets/img/projects/dog-of-war-icon.webp",
        cover: "assets/img/projects/dog-of-war-cover.webp",
        trailer: "https://www.youtube.com/watch?v=KrlpQl53lzg",
        links: [
            { label: "Download on itch.io", note: "free", url: "https://muppetsg2.itch.io/dog-of-war", kind: "itch", primary: true },
            { label: "Source code", note: "MIT license (code)", url: "https://github.com/Westesc/KGJ2026", kind: "source" }
        ],
        info: {
            engine: "Unity",
            language: "C#",
            genre: "Roguelike",
            version: "1.0",
            team: "Psy Apokalipsy"
        },
        role: "Procedural Generation Programmer & Level Designer",
        team: [
            { name: "Patryk Antosik", role: "Game Designer & Gameplay Programmer" },
            { name: "Mikołaj Kisiel", role: "AI Programmer" },
            { name: "Konrad Karwowski", role: "2D Artist" }
        ],
        features: [
            { title: "Procedural Levels", icon: "dice", text: "Levels are procedurally generated, so every run is different." },
            { title: "The Wishing Star", icon: "star", text: "Collect all three pieces of the Wishing Star to break the curse." }
        ],
        updated: "github:Westesc/KGJ2026"
    },

    // There Are Signs
    {
        id: "there-are-signs",
        title: "There Are Signs",
        featured: false,
        engine: "Unity",
        summary: "A logic-based platformer where you manipulate your surroundings with signs, kick your enemies, and fight your way to popularity in a Japanese school.",
        description: [
            "**There Are Signs** is a logic-based platformer where signs are more than just decorations – they're tools you can use to manipulate the environment and change how you move through the world.",
            "Use your kicks to take down enemies and overcome challenges as you explore Japanese streets and school grounds. Defeat your rivals and take on the school's toughest students to climb the social ladder and become popular!",
            "Made for **Komiks Game Jam 2k25**, based on the theme *\"There's No Accidents, Only Signs\"*."
        ],
        tags: ["Unity", "Platformer", "Team", "Windows", "itch.io", "C#", "Game Jam"],
        icon: "assets/img/projects/there-are-signs-icon.webp",
        cover: "assets/img/projects/there-are-signs-cover.webp",
        trailer: "https://www.youtube.com/watch?v=Ybg7Kx91Qes",
        links: [
            { label: "Download on itch.io", note: "free", url: "https://muppetsg2.itch.io/there-are-signs", kind: "itch", primary: true },
            { label: "Source code", note: "GPL-3.0 license (code)", url: "https://github.com/Muppetsg2/KomiksGJ2025", kind: "source" }
        ],
        info: {
            engine: "Unity",
            language: "C#",
            genre: "Platformer",
            version: "1.0",
            team: "Drop Table"
        },
        role: "UI Designer & Narrative System Programmer",
        team: [
            { name: "Patryk Antosik", role: "Level Designer & Gameplay Programmer" },
            { name: "Bartłomiej Włodarski", role: "Narrative Designer, Game Designer & Gameplay Programmer" },
            { name: "Maja Ochmańska", role: "Game Designer & 2D Artist" }
        ],
        features: [
            { title: "Sign Mechanics", icon: "signpost", text: "Use signs to manipulate the environment and change how you move through the world." },
            { title: "Kick Combat", icon: "zap", text: "Take down enemies and break through challenges with your kicks." },
            { title: "Climb the Social Ladder", icon: "crown", text: "Defeat your rivals and the school's toughest students to become popular." }
        ],
        updated: "github:Muppetsg2/KomiksGJ2025"
    },

    // Bubble Hunt
    {
        id: "bubble-hunt",
        title: "Bubble Hunt",
        featured: false,
        engine: "Unreal Engine",
        summary: "A first-person action game where you use a bubble gun to capture bugs and feed a hungry monster before becoming its next meal.",
        description: [
            "**Bubble Hunt** is a first-person action game where you find yourself trapped in a cave with a giant monster. There's only one way to escape: fulfill the monster's wish by collecting bugs – its favourite snack!",
            "Armed with a bubble gun, you'll need to trap bugs inside giant bubbles and deliver them to your hungry captor. But it's not going to be easy! The bugs leave a nasty mess that slows you down, they're not exactly friendly, and the monster isn't known for its patience.",
            "Can you fulfill the monster's appetite before you become its next meal?",
            "Made for **Global Game Jam 2025**, based on the theme *\"Bubbles\"*."
        ],
        tags: ["Unreal Engine", "Action", "Team", "Windows", "itch.io", "Blueprints", "Game Jam"],
        icon: "assets/img/projects/bubble-hunt-icon.webp",
        cover: "assets/img/projects/bubble-hunt-cover.webp",
        trailer: "https://vimeo.com/1050905531",
        links: [
            { label: "Download on itch.io", note: "free", url: "https://agaa3.itch.io/bubble-hunt", kind: "itch", primary: true }
        ],
        info: {
            engine: "Unreal Engine",
            language: "Blueprints",
            genre: "Action",
            version: "1.0",
            team: "Crab Club"
        },
        role: "UI Designer & Gameplay Programmer",
        team: [
            { name: "Patryk Antosik", role: "AI & Gameplay Programmer" },
            { name: "Maciej Poncyleusz", role: "VFX Artist & Gameplay Programmer" },
            { name: "Agata Granosik", role: "2D & 3D Artist" }
        ],
        features: [
            { title: "Bubble Gun", icon: "bubbles", text: "Trap bugs inside giant bubbles and deliver them to the monster." },
            { title: "Unfriendly Bugs", icon: "bug", text: "The bugs fight back and leave a nasty mess that slows you down." },
            { title: "Impatient Monster", icon: "timer", text: "Feed the monster before it runs out of patience – or become its next meal." }
        ],
        updated: "2025-01-27"
    },

    // Echoes Of Fame
    {
        id: "echoes-of-fame",
        title: "Echoes of Fame",
        featured: true,
        engine: "Custom C++20 engine",
        award: "ZTGK 2024 · Game Development finalist",
        summary: "Area-control strategy where your band conquers the world with music. Built in 4 months on our own engine, Twin² Engine.",
        description: [
            "An area-control strategy game: you lead a band fighting rival teams for influence across a hex map, while a deity watches over you and protects your music.",
            "We built it in 4 months for courses at Lodz University of Technology – on Twin² Engine, a game engine we wrote ourselves in C++20."
        ],
        tags: ["Custom Engine", "Strategy", "Endless Runner", "Team", "Windows", "C++", "OpenGL", "ZTGK"],
        icon: "assets/img/projects/echoes-of-fame-icon.webp",
        cover: "assets/img/projects/echoes-of-fame-cover.webp",
        trailer: "https://vimeo.com/962661277",
        links: [
            { label: "Windows x64", note: "{ext} · {size}", url: "https://github.com/Muppetsg2/Twin-2-Engine/releases/download/v1.2.2-After-Finals/build.zip", kind: "download", primary: true },
            { label: "Source code", note: "MIT license (code)", url: "https://github.com/Muppetsg2/Twin-2-Engine", kind: "source" }
        ],
        info: {
            engine: "Twin² Engine",
            language: "C++20",
            graphics: "OpenGL",
            genre: "Strategy Endless Runner",
            version: "1.2.2",
            build: "VS 2022 · CMake",
            team: "Twin²",
            "dev time": "4 months"
        },
        role: "Code Quality & Testing Lead",
        team: [
            { name: "Patryk Antosik", role: "AI & UI Programmer" },
            { name: "Łukasz Gapiński", role: "Physics & Procedural Generation Programmer" },
            { name: "Mateusz Gapiński", role: "Rendering Programmer" },
            { name: "Maja Ochmańska", role: "2D & 3D Artist" }
        ],
        features: [
            { title: "Object-Component Model", icon: "layers", text: "Unity-style GameObjects & components" },
            { title: "3D Physics", icon: "cube", text: "Custom collision system" },
            { title: "Editor", icon: "window", text: "Scenes, prefabs and debug log" },
            { title: "Resource Managers", icon: "folder", text: "Models, textures, audio, fonts" },
            { title: "UI, Input & Events", icon: "gamepad", text: "Engine-level systems" },
            { title: "Procedural Maps", icon: "hexagon", text: "Generated hex worlds" }
        ],
        stack: ["ImGui", "GLFW", "glm", "assimp", "SoLoud", "FreeType", "yaml-cpp", "spdlog", "Tracy", "stb_image"],
        updated: "github:Muppetsg2/Twin-2-Engine"
    },

    // Figure It Out
    {
        id: "figure-it-out",
        title: "Figure It Out",
        featured: false,
        summary: "A fast-paced arcade game where you change between different shapes to destroy falling blocks, avoid obstacles, and achieve the highest score possible.",
        description: [
            "**Figure It Out** is a fast-paced arcade game where you control a shape-shifting player and break through waves of falling blocks. Switch between a **box**, **circle**, and **triangle** to match and destroy incoming blocks while avoiding indestructible obstacles.",
            "As your score increases, so does the difficulty! Blocks move faster and spawn more frequently, putting your reflexes and decision-making skills to the test. Choose your shape wisely, survive for as long as possible, and aim for the ultimate score of **9999 points** to win!"
        ],
        tags: ["Shapes", "Arcade", "Solo", "Web", "JavaScript"],
        icon: "assets/img/projects/figure-it-out-icon.webp",
        cover: "assets/img/projects/figure-it-out-cover.webp",
        links: [
            { label: "Play in browser", note: "New tab", url: "https://muppetsg2.github.io/Figure-It-Out/", kind: "web", primary: true },
            { label: "Source code", note: "GPL-3.0 (code)", url: "https://github.com/Muppetsg2/Figure-It-Out", kind: "source" }
        ],
        info: {
            language: "JavaScript",
            genre: "Arcade",
            version: "1.1.1"
        },
        role: "Solo Developer",
        features: [
            { title: "Shape Shifting", icon: "hexagon", text: "Switch between three different shapes: Box, Circle, and Triangle. Choose the right shape to match incoming blocks." },
            { title: "Match & Destroy", icon: "crosshair", text: "Break through destructible falling blocks by matching their shape, while avoiding indestructible obstacles." },
            { title: "Dynamic Difficulty", icon: "levelUp", text: "The game gets progressively harder as your score increases, with faster blocks and more frequent spawns." },
            { title: "Four Difficulty Modes", icon: "gauge", text: "Progress through Easy, Medium, Hard, and Extreme modes as you score more points." },
            { title: "Keyboard & Touch Controls", icon: "gamepad", text: "Play on desktop or mobile with dedicated keyboard controls, touch gestures, and an on-screen pause button." },
            { title: "Score Challenge", icon: "crown", text: "Destroy blocks, survive as long as possible, and reach the ultimate score of 9999 points to win!" }
        ],
        updated: "github:Muppetsg2/Figure-It-Out"
    },

    // Wind Rider
    {
        id: "wind-rider",
        title: "Wind Rider",
        featured: false,
        engine: "Unity",
        award: "ZTGK 2023 · Game Design finalist",
        summary: "A puzzle-platformer where a paper airplane uses the power of wind to solve puzzles, overcome obstacles, and escape challenging mazes.",
        description: [
            "**Wind Rider** is a puzzle-platformer where you take control of a small paper airplane with the power to harness the wind and move objects around. Navigate through enclosed mazes, overcome tricky obstacles, outsmart enemies, and find your way to the exit.",
            "Not every path will be easy, and you'll probably hit a few walls along the way. Keep experimenting, find creative solutions, and don't give up until you reach your goal!"
        ],
        tags: ["Unity", "Platformer", "Puzzle", "Team", "Windows", "Android", "itch.io", "C#", "ZTGK"],
        icon: "assets/img/projects/wind-rider-icon.webp",
        cover: "assets/img/projects/wind-rider-cover.webp",
        links: [
            { label: "Download on itch.io", note: "free", url: "https://thelongcat.itch.io/wind-rider", kind: "itch", primary: true },
            { label: "Source code", note: "All rights reserved (code)", url: "https://github.com/MatRyb/Wind-Knight", kind: "source" }
        ],
        info: {
            engine: "Unity",
            language: "C#",
            genre: "Puzzle-Platformer",
            version: "1.0",
            team: "The Long Cat"
        },
        role: "UI Designer, Gameplay & Tools Programmer",
        team: [
            { name: "Patryk Antosik", role: "Gameplay & Tools Programmer" },
            { name: "Jakub Biniek", role: "Game & Level Designer" },
            { name: "Mateusz Rybicki", role: "Gameplay Programmer" },
            { name: "Katarzyna Tyszka", role: "2D Artist" }
        ],
        features: [
            { title: "Wind Power", icon: "wind", text: "Harness the wind to move objects around and clear your path." },
            { title: "Maze Levels", icon: "maze", text: "Find your way through enclosed mazes to reach the exit." },
            { title: "Obstacles & Enemies", icon: "skull", text: "Overcome tricky obstacles and outsmart the enemies in your way." }
        ],
        updated: "2023-06-29"
    },

    // Marry Kiss And Kill
    {
        id: "marry-kiss-and-kill",
        title: "Marry, Kiss & Kill",
        featured: false,
        engine: "Unity",
        summary: "A party app with three game modes: enter names and pick, let the phone decide, or choose from a list of celebrities.",
        description: [
            "Bring some fun to your next gathering with this simple party game! Whether you're playing with friends or just looking for a good laugh, there are three ways to play:",
            "\t-❤ **Enter Names & Pick** – for groups of two or more.",
            "\t-❤ **Let the Phone Decide** – simply let your phone make the choice, with any number of players.",
            "\t-❤ **Choose from Celebrities** – let the phone pick from a selection of famous people.",
            "The app is all about having fun together, sharing laughs, and maybe revealing a secret or two. Your choices are never saved or sent anywhere, so you can play with complete privacy!"
        ],
        tags: ["Unity", "Party", "Team", "Android", "Google Play", "C#"],
        icon: "assets/img/projects/marry-kiss-and-kill-icon.webp",
        cover: "assets/img/projects/marry-kiss-and-kill-cover.webp",
        links: [
            { label: "Android", note: "Google Play", url: "https://play.google.com/store/apps/details?id=com.MAIPA.INCandMuppetsg2.MKandK", kind: "store", primary: true }
        ],
        info: {
            engine: "Unity",
            language: "C#",
            genre: "Party",
            version: "2.4d"
        },
        role: "UI Designer, VFX Artist & Data Curator",
        team: [
            { name: "Patryk Antosik", role: "Game Designer & Gameplay Programmer" }
        ],
        features: [
            { title: "Three Game Modes", icon: "users", text: "Enter names and pick, let the phone decide, or choose from celebrities." },
            { title: "Fully Private", icon: "shield", text: "Your choices are never saved or sent anywhere." }
        ],
        updated: "2026-03-08"
    },

    // Shooter
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
            "**These weapons spawn randomly across the map, giving you an extra advantage in battle."
        ],
        tags: ["Unity", "Arcade", "Endless Runner", "Solo", "Windows", "Android", "Google Play", "C#"],
        icon: "assets/img/projects/shooter-icon.webp",
        cover: "assets/img/projects/shooter-cover.webp",
        trailer: "https://www.youtube.com/watch?v=d_IHK5qQBHs",
        links: [
            { label: "Windows 64-bit", note: "{ext} · {size}", url: "Downloads/Shooter 1.5.0 x64.exe", kind: "download", primary: true },
            { label: "Windows 32-bit", note: "{ext} · {size}", url: "Downloads/Shooter 1.5.0 x32.exe", kind: "download" },
            { label: "Android", note: "Google Play", url: "https://play.google.com/store/apps/details?id=com.Muppetsg2.Shooter", kind: "store" }
        ],
        info: {
            engine: "Unity",
            language: "C#",
            genre: "Action Shooter",
            "version.windows": "1.5.0",
            "version.android": "1.5.9"
        },
        role: "Solo Developer",
        features: [
            { title: "Different Map Sizes", icon: "map", text: "Choose from 3 map sizes: 30×30, 60×60, and 100×100. Pick the one that suits your playstyle!" },
            { title: "Different Enemy Types", icon: "skull", text: "Face 3 types of enemies: Normal, Large, and Small but Fast. Each type has unique stats and appearance that evolve as your score increases." },
            { title: "Additional Weapons", icon: "crosshair", text: "Find powerful weapons scattered randomly across the map, including the AK-47 and Bazooka. Use them to gain an advantage over your enemies." },
            { title: "Event-Themed Maps", icon: "calendar", text: "Discover special map themes available only during certain dates and seasonal events." },
            { title: "Leveling System", icon: "levelUp", text: "Earn points to level up and increase the damage you deal. The higher your level, the stronger you become!" },
            { title: "Google Play Games Integration", icon: "googlePlayGames", text: "Unlock achievements and compete with other players by submitting your scores to Google Play leaderboards." }
        ],
        updated: "2026-03-09"
    },

    // Diler - The Last 7Week
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
            "\t-★ **Endless Mode** – Beat your own high scores or compete with your friends. Survive for as long as you can and see how far you can go!"
        ],
        tags: ["Unity", "Action", "Space Shooter", "Endless Runner", "Team", "Android", "Google Play", "C#"],
        icon: "assets/img/projects/diler-icon.webp",
        cover: "assets/img/projects/diler-cover.webp",
        trailer: "https://www.youtube.com/watch?v=byNMAhhpPEM",
        links: [
            { label: "Android", note: "Google Play", url: "https://play.google.com/store/apps/details?id=com.MAIPA.INC.Muppetsg2.Last7Weeks", kind: "store", primary: true }
        ],
        info: {
            engine: "Unity",
            language: "C#",
            genre: "Space Shooter",
            version: "1.5.3"
        },
        role: "Level Designer, UI Designer & Google Play Games Integration",
        team: [
            { name: "Patryk Antosik", role: "3D Artist & Gameplay Programmer" }
        ],
        features: [
            { title: "6 Spaceships", icon: "rocket", text: "Choose from 6 different spaceships." },
            { title: "Story Mode", icon: "book", text: "Uncover the mystery of the last 7week and help the dealer collect the debts he's owed." },
            { title: "Endless Mode", icon: "infinity", text: "Survive as long as you can and beat your own high score – or your friends'." },
            { title: "Google Play Games Integration", icon: "googlePlayGames", text: "Unlock achievements and compete with other players on Google Play leaderboards." }
        ],
        updated: "2026-03-10"
    },

    // The Wizards
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
        tags: ["Unity", "Platformer", "Team", "Windows", "Android", "Google Play", "C#"],
        icon: "assets/img/projects/the-wizards-icon.webp",
        cover: "assets/img/projects/the-wizards-cover.webp",
        trailer: "https://www.youtube.com/watch?v=xD1GqSaPBaw",
        links: [
            { label: "Windows 64-bit", note: "{ext} · {size}", url: "Downloads/The Wizards 3.2b x64.exe", kind: "download", primary: true },
            { label: "Windows 32-bit", note: "{ext} · {size}", url: "Downloads/The Wizards 3.2b x32.exe", kind: "download" },
            { label: "Android", note: "Google Play", url: "https://play.google.com/store/apps/details?id=com.MAIPA.INC.Muppetsg2Company.TheWizards", kind: "store" }
        ],
        info: {
            engine: "Unity",
            language: "C#",
            "version.windows": "3.2b",
            "version.android": "3.2c"
        },
        role: "Level Designer, UI Designer & Google Play Games Integration",
        team: [
            { name: "Patryk Antosik", role: "Gameplay Programmer" }
        ],
        features: [
            { title: "Four Wizards", icon: "wand", text: "Play as one of four unique wizards." },
            { title: "Event-Themed Levels", icon: "calendar", text: "Complete special levels themed around events." },
            { title: "Google Play Games Integration", icon: "googlePlayGames", text: "Unlock achievements as you complete levels." }
        ],
        updated: "2026-03-11"
    },

    /* ---------- Apps (type: "app") ---------- */

    // Ryba Game Level Editor
    {
        id: "ryba-game-level-editor",
        type: "app",
        title: "Ryba Game Level Editor",
        featured: true,
        engine: "Unity",
        summary: "A level editor where you **draw the map as a pixel image** – every pixel is one tile, and its color stores the tile type, rotation and power.",
        description: [
            "**Ryba Game Level Editor** creates game levels by drawing them. The level is a texture: **1 pixel = 1 tile**, the RGB channels store the tile type and the alpha channel stores the rotation and power.",
            "Maps can be edited in the editor or in any image editor, saved as an editor project and exported in a lossless format the game can read.",
            "Tool used to create levels for game [**Steamline**](https://muppetsg2.github.io/project.html?id=steamline)"
        ],
        tags: ["Unity", "Tool", "Solo", "Windows", "C#", "QOI"],
        icon: "assets/img/projects/ryba-game-level-editor-icon.webp",
        cover: "assets/img/projects/ryba-game-level-editor-cover.webp",
        links: [
            { label: "Windows x64", note: "{ext} · {size}", url: "https://github.com/Muppetsg2/RybaGameLevelEditor/releases/download/v1.0.6/RybaGameLevelEditor_Win64.zip", kind: "download", primary: true },
            { label: "Source code", note: "MIT license (code)", url: "https://github.com/Muppetsg2/RybaGameLevelEditor", kind: "source" }
        ],
        info: {
            engine: "Unity",
            language: "C#",
            version: "1.0.6",
            export: "PNG · QOI"
        },
        role: "Solo Developer",
        features: [
            { title: "Drawing Tools", icon: "palette", text: "Brush, eraser, displacer and pipette – with the tile type, power and rotation to paint with." },
            { title: "Undo & Redo", icon: "undo", text: "Full history for every action, built with the Command pattern." },
            { title: "Easy Navigation", icon: "maze", text: "Zoom with the mouse wheel, drag the map, grid overlay and live info about the tile under the cursor." },
            { title: "Projects & Export", icon: "image", text: "Save your work as a **.lep** project and export the map to **PNG** or **QOI**." }
        ],
        stack: ["DOTween", "NaughtyAttributes", "UnityStandaloneFileBrowser", "UnityNativeDialog", "Unity.QOI", "Font Awesome"],
        updated: "github:Muppetsg2/RybaGameLevelEditor"
    },

    // Cuda RayTracer
    {
        id: "cuda-ray-tracer",
        type: "app",
        title: "Cuda RayTracer",
        featured: false,
        summary: "A GPU-accelerated ray tracer built with **CUDA and C++20** – featuring global illumination, adaptive antialiasing, area lights and physically inspired materials.",
        description: [
            "**Cuda RayTracer** is a custom ray tracer originally developed to run on the CPU and later ported to the GPU using NVIDIA CUDA. The project explores GPU rendering techniques and parallel computation.",
            "It supports global illumination, reflections, refractions and area lighting using LTC (Linearly Transformed Cosines). Materials can be diffuse, reflective or refractive, each with its own color.",
            "Scenes are described in YAML files, with rendering quality, resolution, ray bounces and output settings configured through `settings.ini`. The final image is displayed in a window and saved in HDR format."
        ],
        tags: ["Ray Tracing", "Graphics", "Team", "Windows", "C++", "CUDA", "GPU"],
        icon: "assets/img/projects/cuda-ray-tracer-icon.webp",
        cover: "assets/img/projects/cuda-ray-tracer-cover.webp",
        links: [
            { label: "Source code", note: "MIT license (code)", url: "https://github.com/Muppetsg2/CudaRayTracer", kind: "source", primary: true }
        ],
        info: {
            language: "C++20",
            platform: "Windows 10/11",
            compute: "NVIDIA CUDA",
            compiler: "MSVC · Visual Studio 2022",
            "CUDA toolkit": "13.1 recommended",
            output: "HDR",
            license: "MIT"
        },
        role: "Developer",
        team: [
            { name: "Patryk Antosik", role: "Developer" }
        ],
        features: [
            { title: "GPU Ray Tracing", icon: "chip", text: "Ray tracing computations are executed on the GPU using CUDA, with configurable kernel execution and block sizes." },
            { title: "Adaptive Antialiasing", icon: "crosshair", text: "Pixels are subdivided recursively into smaller regions. Subdivision stops early when all four corners of a region have the same color." },
            { title: "Global Illumination", icon: "sun", text: "Simulate indirect lighting with configurable ray bounces and rays per hemisphere." },
            { title: "Area Lights", icon: "sun", text: "Area light rendering using LTC (Linearly Transformed Cosines) for efficient surface lighting." },
            { title: "Reflective & Refractive Materials", icon: "droplet", text: "Diffuse, mirror-like reflective and refractive materials with individual colors." },
            { title: "Configurable Scenes", icon: "gauge", text: "Define scenes in YAML and configure resolution, antialiasing, reflections, global illumination and shadows through settings.ini." },
            { title: "HDR Output", icon: "image", text: "Display rendered images in a window and save the final result as an HDR file." }
        ],
        stack: ["CUDA", "SFML", "yaml-cpp", "stb_image", "stb_image_write", "mstd", "vcpkg", "Visual Studio 2022"],
        updated: "github:Muppetsg2/CudaRayTracer"
    },

    // PBR Visualiser
    {
        id: "pbr-visualiser",
        type: "app",
        title: "PBR Visualiser",
        featured: false,
        summary: "An app for previewing **PBR materials** on 3D models with OpenGL – with skyboxes, camera filters and a console mode that renders material previews to images.",
        description: [
            "**PBR Visualiser** renders physically based materials in real time. Load a set of textures, put them on a cube, a sphere, a plane or your own model, choose a skybox and adjust the lighting and the camera.",
            "The same program also works without a window. In console mode (CLI) it renders a 2D image of a material at the chosen resolution, with the plane position, skybox and lighting passed as parameters – so previews can be generated in bulk.",
            "I also used it in my engineering thesis."
        ],
        tags: ["Graphics", "Solo", "Windows", "C++", "OpenGL", "CLI"],
        icon: "assets/img/projects/pbr-visualiser-icon.webp",
        cover: "assets/img/projects/pbr-visualiser-cover.webp",
        links: [
            { label: "GUI Windows x64", note: "{ext} · {size}", url: "https://github.com/Muppetsg2/PBR_Visualiser_OpenGL/releases/download/v1.4.0/PBR_Visualiser_1.4.0_Window_x64.zip", kind: "download", primary: true },
            { label: "CLI Windows x64", note: "{ext} · {size}", url: "https://github.com/Muppetsg2/PBR_Visualiser_OpenGL/releases/download/v1.4.0/PBR_Visualiser_1.4.0_Console_x64.zip", kind: "download" },
            { label: "Source code", note: "MIT license (code)", url: "https://github.com/Muppetsg2/PBR_Visualiser_OpenGL", kind: "source" }
        ],
        info: {
            language: "C++20",
            graphics: "OpenGL 4.3",
            version: "1.4.0",
            build: "CMake"
        },
        role: "Solo Developer",
        features: [
            { title: "PBR Textures", icon: "layers", text: "Albedo, normal, metalness, roughness, displacement and ambient occlusion maps." },
            { title: "Your Own Models", icon: "cube", text: "Import **OBJ**, **FBX**, **GLTF** and **GLB** models, or use a cube, a sphere or a plane." },
            { title: "Skyboxes", icon: "sun", text: "Built-in skyboxes or your own **HDR**, **JPG** and **PNG** files, with exposure and intensity settings." },
            { title: "Camera & Filters", icon: "monitor", text: "Free camera, MSAA up to 16 samples, pixelation, grayscale and negative filters, and screenshots." },
            { title: "Console Mode", icon: "terminal", text: "Render a material to an image from the command line – interactively or with parameters." }
        ],
        stack: ["OpenGL", "ImGui", "ImPlot", "GLFW", "GLM", "GLI", "spdlog", "cgltf", "OpenFBX", "tiny_obj_loader", "stb_image", "FreeType", "tinyfiledialogs"],
        updated: "github:Muppetsg2/PBR_Visualiser_OpenGL"
    },

    // Shapes Generator
    {
        id: "shapes-generator",
        type: "app",
        title: "Shapes Generator",
        featured: false,
        summary: "A console app that generates 3D shapes – vertices, normals, tangents and bitangents – and saves them as **OBJ**, **JSON** or text.",
        description: [
            "**Shapes Generator** builds ten 3D shapes with loops and a bit of geometry: for every vertex it calculates the position, the normal, the tangent and the bitangent, and saves the result ready to load into your own renderer.",
            "It runs as a terminal UI (TUI) with keyboard and mouse support, or as a step-by-step command-line tool (CLI)."
        ],
        tags: ["Graphics", "Solo", "Windows", "Linux", "macOS", "C++", "CLI", "TUI"],
        icon: "assets/img/projects/shapes-generator-icon.webp",
        cover: "assets/img/projects/shapes-generator-cover.webp",
        links: [
            { label: "Windows x64", note: "{ext} · {size}", url: "https://github.com/Muppetsg2/Shapes-Generator/releases/download/v2.0.0/Shapes-Generator-Windows-x64-2.0.0.zip", kind: "download", primary: true },
            { label: "Ubintu x64", note: "{ext} · {size}", url: "https://github.com/Muppetsg2/Shapes-Generator/releases/download/v2.0.0/Shapes-Generator-Ubuntu-x64-2.0.0.tar", kind: "download" },
            { label: "Source code", note: "MIT license (code)", url: "https://github.com/Muppetsg2/Shapes-Generator", kind: "source" }
        ],
        info: {
            language: "C++20",
            version: "2.0.0",
            build: "CMake",
            interface: "TUI · CLI"
        },
        role: "Solo Developer",
        features: [
            { title: "10 Shapes", icon: "hexagon", text: "Plane, cube, tetrahedron, pyramid, cylinder, cone, sphere, icosphere, torus and hexagon." },
            { title: "Full Vertex Data", icon: "cube", text: "Positions, normals, tangents and bitangents – tangent generation can be switched off." },
            { title: "3 Output Formats", icon: "folder", text: "**OBJ**, **JSON** or plain text, with the folder and file names set in **shapes.config**." },
            { title: "TUI & CLI", icon: "terminal", text: "A terminal UI with mouse support, or a lightweight step-by-step command line." },
            { title: "Unit Tests", icon: "shield", text: "The geometry is checked with **Catch2** tests." }
        ],
        stack: ["GLM", "fmt", "nlohmann/json", "FTXUI", "Catch2", "clip", "CPM.cmake"],
        updated: "github:Muppetsg2/Shapes-Generator"
    },

    // OpenGL Tetrahedron Optimization
    {
        id: "opengl-tetrahedron-optimization",
        type: "app",
        title: "OpenGL Tetrahedron Optimization",
        featured: false,
        summary: "An OpenGL performance experiment rendering a **recursive Sierpiński tetrahedron** – testing GPU rendering techniques with up to 14 recursion levels.",
        description: [
            "**OpenGL Tetrahedron Optimization** is a small project exploring how many recursion levels of a Sierpiński tetrahedron can be rendered by a GPU in real time using OpenGL.",
            "The application allows you to interactively rotate the scene and customize the background and object colors. You can increase the recursion depth from 0 to 14 and observe how rendering performance changes as the number of tetrahedrons grows.",
            "The renderer uses GPU-oriented techniques such as instancing, Shader Storage Buffer Objects, Geometry Shaders and mapped buffer updates. GPU synchronization and delta data uploading help avoid unnecessary transfers and updates.",
            "The project also includes performance benchmarks for *NVIDIA RTX 3060 Laptop* and *RTX 4070 Ti SUPER* GPUs."
        ],
        tags: ["Graphics", "Optimization", "Solo", "Windows", "C++", "OpenGL", "GPU", "CMake"],
        icon: "assets/img/projects/opengl-tetrahedron-optimization-icon.webp",
        cover: "assets/img/projects/opengl-tetrahedron-optimization-cover.webp",
        links: [
            { label: "Source code", note: "MIT license (code)", url: "https://github.com/Muppetsg2/OpenGL_Tetrahedron_Optimization", kind: "source", primary: true }
        ],
        info: {
            language: "C++17",
            graphics: "OpenGL 4.3+",
            build: "CMake",
            geometry: "Sierpiński Tetrahedron",
            "max recursion": "14",
            license: "MIT"
        },
        role: "Solo Developer",
        features: [
            { title: "Recursive Geometry", icon: "cube", text: "Generate a Sierpiński tetrahedron with recursion levels from 0 to 14, reaching tens of millions of tetrahedrons." },
            { title: "GPU Instancing", icon: "layers", text: "Render thousands or millions of tetrahedrons using instancing and a single draw call." },
            { title: "Geometry Shader", icon: "hexagon", text: "Construct tetrahedron geometry dynamically in the Geometry Shader from a single point per instance." },
            { title: "SSBO & GPU Synchronization", icon: "chip", text: "Use Shader Storage Buffer Objects, mapped buffer updates, GLsync and memory barriers for efficient GPU data management." },
            { title: "Interactive Controls", icon: "gamepad", text: "Rotate the scene along the X and Y axes and customize object and background colors in real time." },
            { title: "Performance Benchmarks", icon: "chart", text: "Compare rendering performance across recursion levels and different NVIDIA GPUs." }
        ],
        stack: ["OpenGL", "GLFW", "GLAD", "GLM", "ImGui", "spdlog", "FreeType", "stb_image", "CPM.cmake", "CMake"],
        updated: "github:Muppetsg2/OpenGL_Tetrahedron_Optimization"
    },

];
