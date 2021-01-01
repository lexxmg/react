
const FOLLOW = 'FOLLOW',
      UNFOLLOW = 'UNFOLLOW',
      SHOW_MORE = 'SHOW-MORE',
      SET_USERS = 'SET-USERS',
      CURENT_PAGE = 'CURENT-PAGE',
      SET_START_PAGE = 'SET-START-PAGE';


export const followAC = (id) => {
  return {type: FOLLOW, id};
}

export const unFollowAC = (id) => {
  return {type: UNFOLLOW, id};
}

export const showMoreAC = (count) => {
  return {type: SHOW_MORE, count};
}

export const currentPageAC = (page) => {
  return {type: CURENT_PAGE, page};
}

export const setStartPageAC = (page) => {
  return {type: SET_START_PAGE, page};
}

export const setUsersAC = (users, count) => {
  return {type: SET_USERS, users, count};
}

const initialState =  {
  users: [],
  startPage: 1,
  userCount: 5,
  usersAllCount: 0,
  currentPage: 1
}

const usersReducer =  (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
    console.log('UnFollow');
      return {...state, users: state.users.map(user => {
          if (user.id === action.id) {
            return {...user, followed: true};
          } else {
            return user;
          }
        })
      }
    case UNFOLLOW:
    console.log('unfollow');
    return {...state, users: state.users.map(user => {
        if (user.id === action.id) {
          return {...user, followed: false};
        } else {
          return user;
        }
      })
    }
    case SHOW_MORE:
      return {...state};
    case SET_USERS:
      return {...state, users: action.users, usersAllCount: action.count};
    case CURENT_PAGE:
      return {...state, currentPage: action.page};
    case SET_START_PAGE:
        return {...state, startPage: action.page};
    default:
      return state;
  }
}

export default usersReducer;
