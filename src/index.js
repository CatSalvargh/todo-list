import "./styles.css"
import { nav_toggle } from "./scripts/nav.js";
import { show_All } from "./scripts/all_projects.js";
import { Project } from "./scripts/factory_project.js";
import { add_things, add_project } from "./scripts/add_things.js";

const project = Project(1, 'Project 1', '2/8/2025', 'important', 'this is a test project')
const add_button = document.getElementById('add-btn')

nav_toggle();
show_All();

add_button.addEventListener('click', () => {
    const dropdown = document.getElementById('add-div-dropdown')
    const options = document.querySelectorAll('btn-dropdown')

    dropdown .classList.toggle('inactive')
    dropdown .classList.toggle('add-div-dropdown')

    
    add_project()
})