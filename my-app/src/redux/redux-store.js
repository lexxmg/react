
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import dialogsReducer from './dialogs-reducer';
import profReducer from './prof-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';


const reducers = combineReducers({
  dialogs: dialogsReducer,
  prof: profReducer,
  users: usersReducer,
  autch: authReducer,
  form: formReducer
});

const store = createStore(reducers, applyMiddleware(thunk));


export default store;
