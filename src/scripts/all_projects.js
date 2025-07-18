const showAll_btn = document.getElementById('all')
const display_headers = `
    <thead>
        <tr>
            <th>Priority</th>
            <th>Due date</th>
            <th>Title</th>
            <th>Details</th>
            <th>Complete</th>
            <th>Delete</th>
        </tr>
    </thead>
`

export const show_All = function() {
    let projects;

    import("./add_things.js").then(({projectList}) => {
        projects = projectList        
    })

    showAll_btn.addEventListener('click', () => {
        const container = document.getElementById('item-container')
        let table = document.getElementById('projects-table');
        const title = document.getElementById('main-task-title');

        if (projects.length < 1) {
            title.innerHTML = 'You do not have any open projects'   
            return        
        }

        title.innerHTML = "Here are all your open projects";

        container.innerHTML = ''

        if(!table) {
            table = document.createElement('table');
        }
        table.id = "projects-table";
        table.innerHTML = display_headers;

        projects.forEach((p) => {
            table.innerHTML += `
                <tr> 
                    <td>${p.priority}</td>
                    <td>${p.dueDate}</td>
                    <td>${p.title}</td>
                    <td>
                        <button class="btn-inv" onClick="">+</button>
                    </td>
                    <td>
                        <button class="btn-inv" onClick="">o</button>
                    </td>
                    <td>
                        <button class="btn-inv js-read-btn" onClick="">-</button>
                    </td>
                </tr>
            `
        });

        container.appendChild(table)
    })
}