import { createStore, combineReducers } from 'redux';
import dialogsReducer from './dialogs-reducer';
import profReducer from './prof-reducer';
import usersReducer from './users-reducer';


const reducers = combineReducers({
  dialogs: dialogsReducer,
  prof: profReducer,
  users: usersReducer
});

const store = createStore(reducers);


export default store;
