import {combineReducers} from 'redux';
import profilePage from './profilePage';
import dialogsPage from './dialogsPage';

const reducers = combineReducers({
    profilePage,
    dialogsPage
})

export default reducers