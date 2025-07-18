// const container = document.getElementById('item-container')

export function updateDOMItems(title, due, priority, desc) {
    const container = document.getElementById('item-container')
    const main_title = document.getElementById('main-task-title');
    const html = `<div class="item-details">
                        <table>
                            <tr>
                                <th>Due Date</th>
                                <td>${due}</td>
                                <th>Priority</th>
                                <td>${priority}</td>
                                <th>Days left</th>
                                <td> 23 </td>
                            </tr>
                        </table>
                    </div>
                    <div class="item-body">
                        <div class="desc">
                             ${desc}<br>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat rem, corrupti necessitatibus possimus architecto eos accusantium quis officia modi facilis blanditiis, a debitis nam optio delectus quia, nesciunt sit incidunt!
                        </div>
                    </div>
                    <div class="item-actions">
                        <button class="mark-complete btn">Complete</button>
                        <button class="delete btn">Delete</button>
                        <button class="change-priority btn">Change priority</button>
                    </div>`

    main_title.innerHTML = `<span>New task:</span> ${title}`

    container.innerHTML = html
}