export const USER_LIST_ACTIONS = {
  REQUEST: 'USERS_LIST_REQUEST',
  SUCCESS: 'USERS_LIST_SUCCESS',
  ERROR: 'USERS_LIST_ERROR',
};

export const requestUsers = (payload) => ({
  type: USER_LIST_ACTIONS.REQUEST,
  payload,
});

export const requestUsersSuccess = (payload) => ({
  type: USER_LIST_ACTIONS.SUCCESS,
  payload,
});

export const requestUsersError = (error) => ({
  type: USER_LIST_ACTIONS.ERROR,
  error,
});