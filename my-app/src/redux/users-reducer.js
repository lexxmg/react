
const FOLLOW = 'FOLLOW',
      UNFOLLOW = 'UNFOLLOW',
      SHOW_MORE = 'SHOW_MORE',
      SET_USERS = 'SET_USERS',
      SET_CURENT_PAGE = 'SET_CURENT_PAGE',
      SET_START_PAGE = 'SET_START_PAGE',
      TOGGLE_PRELOADER = 'TOGGLE_PRELOADER',
      TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';


export const follow = (id) => {
  return {type: FOLLOW, id};
}

export const unFollow = (id) => {
  return {type: UNFOLLOW, id};
}

export const toggleIsFolllowingProgress = (id, isFetching) => {
  return {
    type: TOGGLE_IS_FOLLOWING_PROGRESS, id, isFetching
  }
}

export const showMore = (count) => {
  return {type: SHOW_MORE, count};
}

export const setCurrentPage = (page) => {
  return {type: SET_CURENT_PAGE, page};
}

export const setStartPage = (page) => {
  return {type: SET_START_PAGE, page};
}

export const setUsers = (users, count) => {
  return {type: SET_USERS, users, count};
}

export const togglePreload = (load) => {
  return {type: TOGGLE_PRELOADER, load};
}


const initialState =  {
  users: [],
  startPage: 1,
  userCount: 5,
  usersAllCount: 0,
  currentPage: 1,
  preload: false,
  followingInProgress: []
}

const usersReducer =  (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
    console.log('follow');
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
    case SET_CURENT_PAGE:
      return {...state, currentPage: action.page};
    case SET_START_PAGE:
      return {...state, startPage: action.page};
    case TOGGLE_PRELOADER:
      return {...state, preload: action.load};
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.id]
          : state.followingInProgress.filter(id => id !== action.id)
      }
    default:
      return state;
  }
}

export default usersReducer;
