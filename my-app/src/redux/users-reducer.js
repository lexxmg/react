const FOLLOW = 'FOLLOW',
      UNFOLLOW = 'UNFOLLOW',
      SHOW_MORE = 'SHOW-MORE';


export const followAC = (id) => {
  return {type: FOLLOW, id};
}

export const unFollowAC = (id) => {
  return {type: UNFOLLOW, id};
}

export const showMoreAC = (count) => {
  return {type: SHOW_MORE, count};
}


const avatar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkNClHcBngc-qOfx6OQ-rCm6L-xHp-t6R2QA&usqp=CAU';

const initialState =  {
  users: [
    {
      avatar: avatar, follow: true, name: 'Вася', lastName: 'иванов', status: 'Super Man',
      location: {city: 'Moscov', country: 'Russia'}, id: '1'
    },
    {
      avatar: avatar, follow: false, name: 'Петя', lastName: '', status: 'Super star',
      location: {city: 'Moscov', country: 'Russia'}, id: '2'
    }
  ]
}

const usersReducer =  (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {...state, users: state.users.map(user => {
          if (user.id === action.id) {
            return {...user, follow: true};
          } else {
            return {...user};
          }
        })
      }
    case UNFOLLOW:
    return {...state, users: state.users.map(user => {
        if (user.id === action.id) {
          return {...user, follow: false};
        } else {
          return {...user};
        }
      })
    }
    case SHOW_MORE:
      return {...state};
    default:
      return state;
  }
}

export default usersReducer;
