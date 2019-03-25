import { USER_FOLLOWING_ACTIONS } from '../actions'

export const usersFollowingReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_FOLLOWING_ACTIONS.REQUEST:
      return { ...state, page: action.meta };
    case USER_FOLLOWING_ACTIONS.SUCCESS:
      return { ...state, data: action.payload };
    case USER_FOLLOWING_ACTIONS.ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
};