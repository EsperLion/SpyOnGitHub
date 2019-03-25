import { USER_LIST_ACTIONS } from '../actions'

export const usersListReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LIST_ACTIONS.REQUEST:
      return { ...state };
    case USER_LIST_ACTIONS.SUCCESS:
      return { ...state, data: action.payload };
    case USER_LIST_ACTIONS.ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
};