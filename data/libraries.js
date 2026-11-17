/*
   =====================================================================
   LIBRARIES – one object = one library.
   They have a subpage just like games: project.html?id=<id>, so the id
   must not repeat here or in data/projects.js.
   The order in the array = the order on the page.
   =====================================================================
*/

/*
    Template library:
    {
        id: "unique-name-id",                    // Unique in libraries.js AND projects.js – project.html?id=unique-name-id
        title: "Library Name",                   // Name on the website
        featured: false,                         // True = large card in "Highlights" with the "Library" badge
        language: "C99 · single header",         // Label on the cover and under the name on the card
        summary: "Short info about the library", // Shown on the card, may use **bold**, *italic*, [links](url)
        description: [
            "First paragraph of description",
        ],
        tags: ["C", "C++"],                      // A filter is created from them (shared with games and apps)
        icon: "assets/img/projects/unique-name-id-icon.svg",       // Optional – a logo in any proportions
        cover: "assets/img/projects/unique-name-id-cover.webp",    // Optional – a wide banner (1280x720)
        links: [
            { label: "Source code", note: "MIT license", url: "https://github.com/…", kind: "source", primary: true },
        ],
        info: { language: "C99", license: "MIT" },  // Table on the subpage – any key-value pair
        features: [],                               // Optional – same as in projects.js
        // Optional – usage example: { file, code } or an array of such blocks.
        // text – a sentence above the block (may use **bold**, *italic*, [links](url)).
        // Inside ` ` put \ before the characters ` and ${ (e.g. CMake's \${PROJECT_NAME}).
        example: { file: "main.c", code: `
            #include "library.h"
        ` },
        install: [],                                // Optional – how to add it to a project (same format as example)
        updated: "github:Muppetsg2/repo",           // Optional – same as in projects.js
    },
*/

export const libraries = [

    // Unity Native Tooltips
    {
        id: "unity-native-tooltips",
        title: "Unity Native Tooltips",
        featured: false,
        language: "C# · Unity",
        summary: "Native, operating-system tooltips for Unity apps – the bubble looks and behaves exactly like tooltips in every other app on the platform.",
        description: [
            "**Unity Native Tooltips** shows tooltips with each platform's own tooltip system, so they get the system font, theme, delay, shadow and animation – no third-party libraries needed.",
            "\t- **Windows** – a real Win32 tooltip in the Windows 10/11 theme",
            "\t- **macOS** – AppKit tooltips",
            "\t- **Linux** – GTK 3, styled by the system theme",
            "\t- **Android** and **iOS** – the framework tooltip style and a system popover",
            "\t- **WebGL** – the browser's own tooltip",
            "It works with UGUI, UI Toolkit and 2D/3D objects with colliders, and supports Unity-style rich text. Tested on Windows 10, WebGL and in the Unity Editor; the other platforms are written against the documented system APIs."
        ],
        tags: ["Unity", "Package", "Solo", "Windows", "WebGL", "Linux", "macOS", "Android", "iOS", "C#"],
        icon: "https://github.com/Muppetsg2/UnityNativeTooltips/raw/main/.github/unity-native-tooltips.svg",
        links: [
            { label: "Source code", note: "MIT license (code)", url: "https://github.com/Muppetsg2/UnityNativeTooltips", kind: "source", primary: true }
        ],
        info: {
            language: "C#",
            engine: "Unity",
            "engine version": "2021.3+",
            ui: "UGUI · UI Toolkit",
            version: "1.0.0",
            license: "MIT"
        },
        role: "Solo Developer",
        features: [
            { title: "Truly Native", icon: "monitor", text: "Win32, AppKit, GTK 3, Android, UIKit and the browser – the tooltip every user already knows." },
            { title: "One Line of Code", icon: "zap", text: "Add a component in UGUI or a manipulator in UI Toolkit – the text can change while the tooltip is visible." },
            { title: "Styling", icon: "palette", text: "Font scale, colors, placement, title, delay and rich text like **<b>** and **<color>**." }
        ],
        example: {
            file: "SaveButton.cs",
            code: `
                using NativeTooltips;

                // UGUI – Button, Image, Toggle…
                saveButton.gameObject.AddComponent<NativeTooltip>().Text = "Save the project (Ctrl+S)";

                // UI Toolkit
                saveButton.AddNativeTooltip("Save the project (Ctrl+S)");

                // From code: at the cursor, for 2 seconds
                Tooltip.Show("Saved!", 2f);
            `
        },
        install: {
            text: "In Unity open **Window → Package Manager → + → Add package from git URL…** and paste:",
            file: "Package Manager",
            code: `https://github.com/Muppetsg2/UnityNativeTooltips.git`
        },
        updated: "github:Muppetsg2/UnityNativeTooltips"
    },

    // UnrealQOI
    {
        id: "unreal-qoi",
        title: "UnrealQOI",
        featured: true,
        language: "C++ · Unreal Engine",
        summary: "Import, export, load and save **QOI** images in Unreal Engine 5 – in the editor and at runtime, from C++ and Blueprints.",
        description: [
            "**UnrealQOI** adds the [Quite OK Image Format](https://qoiformat.org/) (.qoi) to Unreal Engine 5. Drag a .qoi file into the Content Browser to import it, reimport it after changes, or export any texture back to QOI.",
            "At runtime the same plugin loads and saves QOI files from C++ and Blueprints – for example to store screenshots, render targets or textures created by the player. Encoding and decoding work on any thread, so saving does not have to stop the game.",
            "It is built on my own single-header library [koi](project.html?id=koi)."
        ],
        tags: ["Unreal Engine", "Plugin", "Solo", "C++", "QOI"],
        icon: "https://github.com/Muppetsg2/UnrealQOI/raw/main/.github/unreal-qoi.svg",
        links: [
            { label: "Source code", note: "MIT license (code)", url: "https://github.com/Muppetsg2/UnrealQOI", kind: "source", primary: true },
            { label: "Binary UE 5.5.4 Win x64", note: "{ext} · {size}", url: "https://github.com/Muppetsg2/UnrealQOI/releases/download/v1.1.0/UnrealQOI_Binary_UE5.5_Win64_v1.1.0.zip", kind: "download" }
        ],
        info: {
            language: "C++",
            engine: "Unreal Engine",
            "engine version": "5.0+",
            "engine tested": "5.5.4",
            version: "1.1.0",
            license: "MIT"
        },
        role: "Solo Developer",
        features: [
            { title: "Editor Import & Export", icon: "folder", text: "Drag & drop .qoi files into the Content Browser, reimport them, or export any **Texture2D** to QOI." },
            { title: "Blueprint Nodes", icon: "layers", text: "Load textures and pixels, or save textures and render targets – all nodes are in the **QOI** category." },
            { title: "C++ API", icon: "chip", text: "Decode, encode, read file info and create textures. Memory and file functions work on any thread." },
            { title: "Correct Color Spaces", icon: "droplet", text: "Linear images import with sRGB off, RGB images without alpha, and alpha is written only when it's used." }
        ],
        example: {
            file: "MyActor.cpp",
            code: `
                #include "UnrealQOI.h"

                // Load a .qoi file and create a texture (game thread).
                FQOIImage Image;
                FString Error;
                if (UnrealQOI::LoadFromFile(TEXT("Textures/Icon.qoi"), Image, &Error))
                {
                    UTexture2D* Texture = UnrealQOI::CreateTexture(Image); // keep it in a UPROPERTY
                }

                // Save a render target.
                FQOIImage Capture;
                if (UnrealQOI::FromRenderTarget(RenderTarget, Capture, &Error))
                {
                    UnrealQOI::MakeOpaque(Capture);
                    UnrealQOI::SaveToFile(TEXT("Captures/Capture.qoi"), Capture, &Error);
                }
            `
        },
        install: [
            {
                text: "Clone the plugin into your Unreal project (or download the precompiled binaries from the latest release into the same folder):",
                file: "Terminal",
                code: `
                    cd {YourUnrealProject}
                    git clone https://github.com/Muppetsg2/UnrealQOI.git ./Plugins/UnrealQOI
                `
            },
            {
                text: "Or add it as a submodule:",
                file: "Terminal",
                code: `
                    cd {YourUnrealProject}
                    git submodule add https://github.com/Muppetsg2/UnrealQOI.git ./Plugins/UnrealQOI
                `
            },
            {
                text: "To use it from C++, add the module to your **.Build.cs**:",
                file: "MyGame.Build.cs",
                code: `PrivateDependencyModuleNames.Add("UnrealQOI");`
            }
        ],
        updated: "github:Muppetsg2/UnrealQOI"
    },

    // VOX4U
    {
        id: "vox4u",
        title: "VOX4U",
        featured: false,
        language: "C++ · Unreal Engine",
        summary: "Import, edit and use **MagicaVoxel** .vox models and scenes in Unreal Engine 5. Create Static Meshes, editable Voxel Assets or complete Blueprint scenes – with support for materials, hierarchies and animations.",
        description: [
            "**VOX4U** is an Unreal Engine plugin for importing voxel models and scenes created with [MagicaVoxel](https://ephtracy.github.io/). Import `.vox` files directly into the Content Browser as optimized **Static Meshes**, instanced **Voxel Assets**, or complete **Blueprint scenes** that preserve the original hierarchy, transforms and optional scene elements such as cameras and the sun.",
            "Voxel Assets can be edited directly inside Unreal Engine using the dedicated **Voxel Editor**. Add, remove and paint individual voxels, manage colours and their materials in the Voxel Tools tab, and undo or redo your changes. You can also create empty Voxel Assets from the Content Browser, adjust their voxel scale after import, and see changes immediately reflected in actors, Blueprints, scenes and previews.",
            "The importer supports MagicaVoxel materials, multiple models, hidden objects, custom pivots and both transform-based and frame-by-frame animations. Imported animations can be played through Blueprint components, previewed in the editor and controlled in Sequencer. Reimporting updates existing assets while preserving their references.",
            "Built around [vox4c](project.html?id=vox4c), a single-header C loader, VOX4U supports legacy and current MagicaVoxel file formats, including older material definitions and the current 0.99.7 format. It is a fork of the original VOX4U project, extended with additional features and compatibility with Unreal Engine 5.0 and newer."
        ],
        tags: ["Unreal Engine", "Plugin", "Voxel", "Voxel Editor", "Solo", "C++", "MagicaVoxel", "Fork"],
        icon: "https://github.com/Muppetsg2/VOX4U/raw/main/.github/unreal-magica-voxel.svg",
        links: [
            { label: "Source code", note: "MIT license (code)", url: "https://github.com/Muppetsg2/VOX4U", kind: "source", primary: true },
            { label: "Binary UE 5.5.4 Win x64", note: "{ext} · {size}", url: "https://github.com/Muppetsg2/VOX4U/releases/download/v0.6.0/VOX4U_Binary_UE5.5_Win64_v0.6.0.zip", kind: "download" }
        ],
        info: {
            language: "C++",
            engine: "Unreal Engine",
            "engine version": "5.0+",
            "engine tested": "5.5.4",
            version: "0.6.0",
            license: "MIT"
        },
        role: "Solo Developer",
        features: [
            { title: "Basic Voxel Editing", icon: "wand", text: "Make quick adjustments to Voxel Assets directly in Unreal Engine. Add, remove and paint individual voxels using simple mouse tools, with cell highlighting and undo/redo support. Designed for minor edits and corrections rather than full-scale voxel modelling." },
            { title: "Voxel Tools & Palette", icon: "palette", text: "Manage colours in the Voxel Tools tab, add or remove palette entries, assign a material to each colour and inspect the voxel count per colour." },
            { title: "Scene Hierarchy & Animation", icon: "map", text: "Rebuild MagicaVoxel scene graphs with groups, transforms, rotations, mirroring and instanced models. Import transform and frame-by-frame animations, with Blueprint playback and Sequencer support." },
            { title: "Materials & Per-Colour Overrides", icon: "droplet", text: "Convert MagicaVoxel material properties into Unreal materials, including roughness, metallic, emission and transparency. Assign individual material overrides to Voxel Asset colours." },
            { title: "Flexible Voxel Assets", icon: "cube", text: "Create empty Voxel Assets from the Content Browser, change voxel size after import and use grid and pivot helpers to work with individual voxels in C++." },
            { title: "Reimport & Live Updates", icon: "undo", text: "Reimport assets while preserving their existing references. Actors, Blueprints, scenes and previews update immediately after voxel edits, scale changes and reimports." },
            { title: "Flexible Import Options", icon: "gauge", text: "Customize scale, pivot, naming, model merging, hidden objects, animation sampling, lightmap UVs, material generation and resource locations." },
            { title: "Broad Format Compatibility", icon: "folder", text: "Read legacy and current MagicaVoxel `.vox` formats, including older material definitions, palettes, scene graphs, layers, cameras and animation data." },
            { title: "Python & C++ API", icon: "chip", text: "Automate imports with Unreal's AssetImportTask and Python API. Access voxel grid information, cell bounds and individual voxel positions from C++." }
        ],
        example: [
            {
                text: "Import a `.vox` file into the project using Python:",
                file: "import_vox.py",
                code: `
                    import unreal

                    # Configure a MagicaVoxel import.
                    options = unreal.VoxImportOption()
                    options.set_editor_property("vox_import_type", unreal.VoxImportType.SCENE)
                    options.set_editor_property("scale", 10.0)

                    # Create an automated import task.
                    task = unreal.AssetImportTask()
                    task.set_editor_property("filename", "C:/Voxels/castle.vox")
                    task.set_editor_property("destination_path", "/Game/Voxels")
                    task.set_editor_property("automated", True)
                    task.set_editor_property("save", True)
                    task.set_editor_property("options", options)

                    # Import the scene into the Content Browser.
                    unreal.AssetToolsHelpers.get_asset_tools().import_asset_tasks([task])
                `
            },
            {
                text: "Spawn a Voxel Actor, assign an asset and access an individual voxel:",
                file: "MyActor.cpp",
                code: `
                    #include "VoxelActor.h"
                    #include "VoxelComponent.h"

                    // Load a Voxel Asset.
                    UVoxel* Tree = LoadObject<UVoxel>(
                        nullptr,
                        TEXT("/Game/Voxels/V_Tree.V_Tree")
                    );

                    // Spawn an actor and assign the asset.
                    AVoxelActor* Actor = GetWorld()->SpawnActor<AVoxelActor>(
                        Location,
                        FRotator::ZeroRotator
                    );

                    if (Actor && Tree)
                    {
                        UVoxelComponent* Component = Actor->GetVoxelComponent();
                        Component->SetVoxel(Tree);

                        // Get the world transform of an individual voxel.
                        FTransform Cell;
                        if (Component->GetVoxelTransform(
                            FIntVector(0, 0, 0),
                            Cell,
                            true
                        ))
                        {
                            UE_LOG(
                                LogTemp,
                                Log,
                                TEXT("Voxel at %s"),
                                *Cell.GetLocation().ToString()
                            );
                        }
                    }
                `
            }
        ],
        install: [
            {
                text: "Clone the plugin into your Unreal project (or download the precompiled binaries from the release page into the same folder):",
                file: "Terminal",
                code: `
                    cd {YourUnrealProject}
                    git clone https://github.com/Muppetsg2/VOX4U.git ./Plugins/VOX4U
                `
            },
            {
                text: "Or add it as a submodule:",
                file: "Terminal",
                code: `
                    cd {YourUnrealProject}
                    git submodule add https://github.com/Muppetsg2/VOX4U.git ./Plugins/VOX4U
                `
            },
            {
                text: "To use it from C++, add the module to your **.Build.cs**:",
                file: "MyGame.Build.cs",
                code: `PrivateDependencyModuleNames.Add("VOX4U");`
            }
        ],
        updated: "github:Muppetsg2/VOX4U"
    },

    // vox4c
    {
        id: "vox4c",
        title: "vox4c",
        featured: true,
        language: "C99 · single header",
        summary: "Single-header C99 library for loading **MagicaVoxel** .vox files – models, materials, the scene graph, animation and ready-made meshes.",
        description: [
            "**vox4c** loads [MagicaVoxel](https://ephtracy.github.io/) .vox files in the spirit of tinyobjloader and tinygltf. It works from C and C++ and has no dependencies beyond the C standard library – not even libm.",
            "It reads files of every MagicaVoxel version from before 0.98.2 to 0.99.7 and gives you more than just voxels:",
            "\t- models, the palette and materials (MATL and the legacy MATT)",
            "\t- the full scene graph as a simple node tree that maps 1:1 onto engine entities",
            "\t- layers, lighting, background and camera slots of the MagicaVoxel render",
            "\t- animation: transform and model keyframes, sampling at any frame, baking whole frames into one mesh",
            "\t- optional meshing with submeshes per material, as float arrays or 8-byte packed vertices",
            "The output coordinate system can be MagicaVoxel, Unreal, OpenGL, Unity or your own, with any scale and pivot."
        ],
        tags: ["Single Header", "Solo", "C", "C++", "MagicaVoxel"],
        icon: "https://github.com/Muppetsg2/vox4c/raw/main/.github/favicon.svg",
        links: [
            { label: "Source code", note: "MIT license (code)", url: "https://github.com/Muppetsg2/vox4c", kind: "source", primary: true }
        ],
        info: {
            language: "C99",
            dependencies: "none",
            build: "CMake 3.25+",
            version: "1.1.0",
            license: "MIT"
        },
        role: "Solo Developer",
        features: [
            { title: "Scene Graph", icon: "layers", text: "Transforms, groups and shapes as a node tree – one node per engine entity." },
            { title: "Meshing", icon: "cube", text: "Monotone meshing with submeshes per material, while loading or on demand per model." },
            { title: "Animation", icon: "timer", text: "Keyframes, loops and the editor's timeline, sampled at any (also fractional) frame." },
            { title: "Any Engine", icon: "gamepad", text: "Coordinate presets for **Unreal**, **Unity** and **OpenGL**, plus your own axes, scale and pivot." },
            { title: "Tested", icon: "shield", text: "Tests for every coordinate preset and a fuzzer that feeds the loader corrupted files." }
        ],
        example: {
            file: "main.c",
            code: `
                #define VOX4C_IMPLEMENTATION   /* in exactly one .c / .cpp file */
                #include "vox4c.h"

                v4c_load_options opt;
                v4c_default_load_options(&opt);
                opt.flags        |= V4C_FLAG_GENERATE_MESHES | V4C_FLAG_USED_MATERIALS_ONLY;
                opt.coord_system  = V4C_COORDS_UNITY;
                opt.scale         = 0.1f;             /* one voxel = 0.1 units */

                v4c_scene* scene = NULL;
                v4c_result res = v4c_load_file("castle.vox", &opt, &scene);   /* or v4c_load_memory */
                if (res != V4C_SUCCESS) {
                    fprintf(stderr, "%s\\n", v4c_result_string(res));
                    return 1;
                }
                /* ... use scene ... */
                v4c_free_scene(scene);
            `
        },
        install: {
            text: "Add it with [CPM.cmake](https://github.com/cpm-cmake/CPM.cmake) (FetchContent and add_subdirectory work the same way), or just copy **vox4c.h** into your project:",
            file: "CMakeLists.txt",
            code: `
                CPMAddPackage(
                    NAME vox4c
                    GITHUB_REPOSITORY Muppetsg2/vox4c
                    GIT_TAG v1.1.0
                )

                target_link_libraries(my_app PRIVATE vox4c::vox4c)
            `
        },
        updated: "github:Muppetsg2/vox4c"
    },

    // koi
    {
        id: "koi",
        title: "koi",
        featured: false,
        language: "C · single header",
        summary: "[stb](https://github.com/nothings/stb)-like single-file image loader and writer for C/C++, for the formats stb doesn't have – starting with **QOI**.",
        description: [
            "**koi** is a pair of single-header libraries in the style of stb_image and stb_image_write: **koi_image.h** loads images and **koi_image_write.h** writes them.",
            "The goal is to support image formats that stb doesn't. The first one is QOI – it loads from files, memory or your own I/O callbacks, to 8-bit, 16-bit or float pixels.",
            "\t- **koi_image.h** version: `1.0.5`",
            "\t- **koi_image_write.h** version: `1.0.4`",
            "It is the base of my Unreal Engine plugin [UnrealQOI](project.html?id=unreal-qoi). More formats are on the way."
        ],
        tags: ["Single Header", "Solo", "C", "C++", "QOI"],
        links: [
            { label: "Source code", note: "Public domain or MIT", url: "https://github.com/Muppetsg2/koi", kind: "source", primary: true }
        ],
        info: {
            language: "C",
            license: "Public domain · MIT"
        },
        role: "Solo Developer",
        example: {
            file: "main.c",
            code: `
                #define KOI_IMAGE_IMPLEMENTATION
                #include "koi_image.h"
                #define KOI_IMAGE_WRITE_IMPLEMENTATION
                #include "koi_image_write.h"

                int x, y, n;
                unsigned char* data = koi_load("image.qoi", &x, &y, &n, 0);
                if (data) {
                    // ... x = width, y = height, n = channels per pixel ...
                    koi_write_qoi("copy.qoi", x, y, n, data);
                    koi_image_free(data);
                }
            `
        },
        updated: "github:Muppetsg2/koi"
    },

    // PNG to ICNS (Python)
    {
        id: "png-to-icns-py",
        title: "PNG to ICNS (Python)",
        featured: false,
        language: "Python · script",
        summary: "A cross-platform Python script that converts **PNG images into macOS ICNS icons** – with automatic image squaring, transparent padding and custom output directories.",
        description: [
            "**PNG to ICNS** converts PNG images into macOS `.icns` icon files. Unlike the original shell-based implementation, this Python version works across platforms, including Windows.",
            "Non-square images are automatically centered on a transparent square canvas, preventing distortion. The script generates an ICNS file from a single input image and lets you choose where to save the result.",
            "It is based on the original [png-to-icns](https://github.com/BenSouchet/png-to-icns) project, rewritten in Python and extended with cross-platform support."
        ],
        tags: ["Image", "Converter", "Solo", "macOS", "Cross-platform", "Python", "PNG", "ICNS"],
        icon: "assets/img/projects/png-to-icns-py-icon.webp",
        cover: "assets/img/projects/png-to-icns-py-cover.webp",
        links: [
            { label: "Source code", note: "MIT license", url: "https://github.com/Muppetsg2/png-to-icns-py", kind: "source", primary: true }
        ],
        info: {
            language: "Python",
            platform: "Cross-platform",
            dependencies: "Pillow · icnsutil",
            input: "PNG",
            output: "ICNS",
            license: "MIT"
        },
        role: "Solo Developer",
        features: [
            { title: "Cross-platform", icon: "monitor", text: "Convert PNG images into macOS ICNS icons on Windows and other platforms – no macOS-only shell utilities required." },
            { title: "Automatic Squaring", icon: "image", text: "Non-square images are automatically centered on a transparent square canvas without distorting the original image." },
            { title: "Custom Output Directory", icon: "folder", text: "Choose a relative or absolute output path. Missing directories are created automatically." },
            { title: "Safe File Handling", icon: "shield", text: "Existing files are never overwritten – a numbered filename is generated instead." }
        ],
        stack: ["Python", "Pillow", "icnsutil"],
        example: {
            file: "Terminal",
            code: `
                # Convert a PNG image into an ICNS file.
                python ./png_to_icns.py -i my_icon.png

                # Save the generated ICNS file in a custom directory.
                python ./png_to_icns.py -i my_icon.png -o ./output_icons
            `
        },
        install: [
            {
                text: "Clone the repository and enter its directory:",
                file: "Terminal",
                code: `
                    git clone https://github.com/Muppetsg2/png-to-icns-py.git
                    cd png-to-icns-py
                `
            },
            {
                text: "Install the required Python dependencies using pip:",
                file: "Terminal",
                code: `
                    pip install pillow icnsutil
                `
            },
            {
                text: "Run the script with the path to your PNG image:",
                file: "Terminal",
                code: `
                    python ./png_to_icns.py -i my_icon.png
                `
            }
        ],
        updated: "github:Muppetsg2/png-to-icns-py"
    },

];
