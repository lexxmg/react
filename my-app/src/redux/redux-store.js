import { createStore, combineReducers } from 'redux';
import dialogsReducer from './dialogs-reducer';
import profReducer from './prof-reducer';


const reducers = combineReducers({
  dialogs: dialogsReducer,
  prof: profReducer
});

const store = createStore(reducers);


export default store;
