import { USERS_LIST_PAGINATION } from '../actions';


export const usersListPaginationReducer = (state = [], action) => {
  switch(action.type) {
    case USERS_LIST_PAGINATION.ADD:
     return [ ...state, action.payload ];
    case USERS_LIST_PAGINATION.DELETE:
      return state.slice(0, -1);
    case USERS_LIST_PAGINATION.CLEAR:
      return [];
    default:
      return state;
  }
};