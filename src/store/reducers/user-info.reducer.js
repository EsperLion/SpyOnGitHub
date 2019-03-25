import { USER_INFO_ACTIONS } from '../actions'

export const usersInfoReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_INFO_ACTIONS.REQUEST:
      return { ...state };
    case USER_INFO_ACTIONS.SUCCESS:
      return { ...state, data: action.payload };
    case USER_INFO_ACTIONS.ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
};