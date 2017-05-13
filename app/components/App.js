import React from 'react'
import AddTodo from '../containers/AddTodo'
// import VisibleTodoList from '../containers/VisibleTodoList'
import TodoList from './TodoList'
import Test from './Test'

const App = () => (
    <div>
        <Test/>
        <AddTodo />
        <TodoList />
    </div>
);

export default App