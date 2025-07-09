import { Project } from "./factory_project.js" 

const projectList = []

export const add_things = function() {
        const new_Item = Project(1, 'Project 1', '2/8/2025', 'important', 'this is a test project')

        projectList.push(new_Item);
        console.log(projectList)
        return projectList;
}