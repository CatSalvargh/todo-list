const projects = [
    {
        id: 1, 
        title: "ClientX SDK Integration",
        dueDate: "21/7/2025",
        priority: "Urgent",
        desc: "A project created to test the show all project functionality. Nothing more, nothing less"
    },
    {
        id: 2, 
        title: "Team bonding event",
        dueDate: "31/7/2025",
        priority: "Normal",
        desc: "A project created to test the show all project functionality. Nothing more, nothing less"
    },
    {
        id: 3, 
        title: "Emma's 121",
        dueDate: "25/7/2025",
        priority: "Normal",
        desc: "A project created to test the show all project functionality. Nothing more, nothing less"
    },
    {
        id: 4, 
        title: "AI Conference",
        dueDate: "28/7/2025",
        priority: "Normal",
        desc: "A project created to test the show all project functionality. Nothing more, nothing less"
    }
]

const showAll = document.getElementById('all')
const display_tb = `
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

    showAll.addEventListener('click', () => {
        const container = document.getElementById('main-task-container')
        let table = document.getElementById('table');
        const title = document.getElementById('main-task-title');
        const img = document.getElementById('main-task-img');

        title.innerHTML = "Here are all your open projects";
        title.classList.add('large-title')
        img.style.display = "none";

        if (!table) {
            table = document.createElement('table')
            table.id = "table";
        }

        table.innerHTML = display_tb;

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