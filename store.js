import { createStore, combineReducers } from 'redux';
import user_login_reducer from './reducers/user_login_reducer';

const rootReducer = combineReducers({
    data : user_login_reducer
});

const configureStore = () => {
    return createStore(rootReducer);
}

export default configureStore;