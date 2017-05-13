import {combineReducers} from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

const helloText = (state = 'kkkkk', action) => {
    return 'Hello React-Redux';
};

const todoApp = combineReducers({
    helloText,
    todos,
    visibilityFilter
});

export default todoApp