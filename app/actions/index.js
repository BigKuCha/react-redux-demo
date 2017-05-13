let nextTodoId = 0;

export const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text
    }
};

export const toggleToDo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id: id
    };
};