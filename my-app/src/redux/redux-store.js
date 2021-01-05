import { createStore, combineReducers } from 'redux';
import dialogsReducer from './dialogs-reducer';
import profReducer from './prof-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';


const reducers = combineReducers({
  dialogs: dialogsReducer,
  prof: profReducer,
  users: usersReducer,
  autch: authReducer
});

const store = createStore(reducers);


export default store;
