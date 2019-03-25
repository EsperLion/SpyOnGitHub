import { combineReducers } from 'redux';
import {
  usersListReducer,
  usersListPaginationReducer,
  usersInfoReducer,
  usersFollowersReducer,
  usersFollowingReducer,
} from './reducers';

export const rootReducer = combineReducers({
  usersList: usersListReducer,
  userListPagination: usersListPaginationReducer,
  userContext: combineReducers({
    info: usersInfoReducer,
    followers: usersFollowersReducer,
    following: usersFollowingReducer,
  }),
});