import { Project } from "./factory_project.js" 
import { getStorage, setStorage } from "./support/manageStorage.js"
import { updateDOMItems } from "./support/itemDetails.js"

const options = document.querySelectorAll('.btn-dropdown')
const dropdown_div = document.getElementById('add-div-dropdown')
const modal = document.querySelector('[data-modal]')

export let projectList

if (getStorage('projects')) {
        projectList = getStorage('projects')
} else {
        projectList = []
}

function get_input(list, factory) {
        const create = document.getElementById('input')
        const modal = document.querySelector('[data-modal]');
        const dialog = document.getElementById("dialog");
        const form_inputs = document.querySelectorAll('form-child')

        //Prevent form submission on field's Enter keydown
        form_inputs.forEach(input => {
                input.addEventListener('keydown', function(e) {
                        if (e.key === 'Enter') {
                                e.preventDefault();
                        }
                });
        })

        //Prevent double submission by cloning and resetting form 
        const newForm = create.cloneNode(true);
        create.parentNode.replaceChild(newForm, create);

        const cancel_btn = document.querySelector('#cancel-btn')
        if(cancel_btn) {
                cancel_btn.addEventListener('click', (event) => {
                        event.preventDefault()
                        newForm.reset();
                        modal.close()
                })
        }

        newForm.addEventListener('submit', function(e){
                if (e.submitter && e.submitter.id === 'cancel-btn') {
                        dialog.close();
                        return;
                }

                e.preventDefault();
                
                const id =  `T#${Date.now()}`
                const title =  document.getElementById('title').value
                const dueDate =  document.getElementById('dueDate').value
                const priority =  document.getElementById('priority').value
                const desc =  document.getElementById('desc').value

                const new_Item = factory(id, title, dueDate, priority, desc)

                list.push(new_Item);
                setStorage('projects', list);

                newForm.reset();
                modal.close();
                
                updateDOMItems(new_Item.title, new_Item.dueDate, new_Item.priority, new_Item.desc)                
        })
        
}

const add_project = function() {
        options.forEach((option) => {
                option.addEventListener('click', (e) => {
                        let factory = null;
                        if (option.id == 'task') {
                                factory = Project;
                        } else if (option.id == 'folder') {
                                factory = Folder;
                        }
                        if (factory) {
                                modal.showModal()
                                get_input(projectList, factory)
                        }
                        dropdown_div.classList.remove('add-div-dropdown')
                        dropdown_div.classList.add('inactive');
                })
        })
}

export function add() {
        const add_button = document.getElementById('add-btn')  
        console.log("JSON.parse(localStorage.getItem('projects'))\n localStorage.clear()")
        add_button.addEventListener('click', () => {
                dropdown_div.classList.add('add-div-dropdown');
                dropdown_div.classList.remove('inactive');
                add_project();
        })
}