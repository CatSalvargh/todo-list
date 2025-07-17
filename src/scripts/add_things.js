import { Project } from "./factory_project.js" 

const projectList = []

const add_btn = document.getElementById('add-btn')
const options = document.querySelectorAll('.btn-dropdown')

export const add_things = function() {
        const new_Item = Project(1, 'Project 1', '2/8/2025', 'important', 'this is a test project')
        projectList.push(new_Item);
        console.log(projectList)
        return projectList;
}

export const add_project = function() {

        options.forEach((option) => {
                option.addEventListener('click', () => {
                        if (option.id == 'task') {
                              projectList.push(Project(1, 'Project 1', '2/8/2025', 'important', 'this is a test project'))  
                                const dropdown = document.getElementById('add-input')

                                dropdown .classList.toggle('inactive')
                                dropdown .classList.toggle('add-input')
                        }
                        console.log(projectList)

                })
                
        })
}