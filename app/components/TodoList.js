import React from 'react'
import {connect} from 'react-redux'
import Todo from './Todo'
import {toggleToDo} from '../actions'

let TodoList = ({todos, onTodoClick}) => (
    <ul>
        {todos.map(todo =>
            <Todo
                key={todo.id}
                {...todo}
                onClick={() => onTodoClick(todo.id)}
            />
        )}
    </ul>
);

function mapStateToProps(state) {
    return {
        todos: state.todos,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onTodoClick: (id) => {
            dispatch(toggleToDo(id));
        }
    }
}
// TodoList.propTypes = {
//     todos:
// }
// TodoList.propTypes = {
//     todos: PropTypes.arrayOf(PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         completed: PropTypes.bool.isRequired,
//         text: PropTypes.string.isRequired
//     }).isRequired).isRequired
// };
TodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default TodoList