import { USER_FOLLOWERS_ACTIONS } from '../actions'

export const usersFollowersReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_FOLLOWERS_ACTIONS.REQUEST:
      return { ...state, page: action.meta };
    case USER_FOLLOWERS_ACTIONS.SUCCESS:
      return { ...state, data: action.payload };
    case USER_FOLLOWERS_ACTIONS.ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
};