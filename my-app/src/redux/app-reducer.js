
import { getAuthUser } from './auth-reducer';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

export const initializedSuccess = () => {
  return {type: INITIALIZED_SUCCESS}
}

export const initializeApp = () => {
  return (dispatch) => {
    dispatch( getAuthUser() )
      .then(() => dispatch(initializedSuccess()))
  }
}

const initialState = {
  initialized: false
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {...state, initialized: true};

    default:
      return state;
  }
}

export default appReducer;
