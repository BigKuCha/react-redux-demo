const todo = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                complated: false
            };
        default:
            return state;

    }
};

const todos = (state = [], action) => {
    switch (action) {
        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined, action)
            ];
        default:
            return state;
    }
};

export default todos;