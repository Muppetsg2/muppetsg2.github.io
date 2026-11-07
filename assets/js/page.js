/*
    ===================================================
    404 page: menu, footer, and a few design proposals.
    ===================================================
*/

import { projects } from "../../data/projects.js";
import { renderHeader, renderFooter } from "./layout.js";
import { miniCard } from "./cards.js";

renderHeader();
renderFooter();

document.getElementById("suggestions").innerHTML = projects.slice(0, 3).map(miniCard).join("");
