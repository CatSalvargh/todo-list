function adder(state){
    return {
        add: () =>  state
    }
}

function remover(state){
    return {
        remove: (arr) => {
            for (let i = 0; i < arr.length; i ++) {
                if(arr[i].id === state.id) {
                    arr.splice(i, 1);
                    break;
                }
            }
        }
    }
}

export const Project = (id, title, dueDate, priority, desc) => {
    let state = {
        id, title, dueDate, priority, desc
    }

    return Object.assign(
        {},
        state,
        adder(state),
        remover(state)
    )
}
