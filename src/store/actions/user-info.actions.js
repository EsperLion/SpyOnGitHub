export const USER_INFO_ACTIONS = {
  REQUEST: 'USERS_INFO_REQUEST',
  SUCCESS: 'USERS_INFO_SUCCESS',
  ERROR: 'USERS_INFO_ERROR',
};

export const requestUser = (payload) => ({
  type: USER_INFO_ACTIONS.REQUEST,
  payload,
});

export const requestUserSuccess = (payload) => ({
  type: USER_INFO_ACTIONS.SUCCESS,
  payload,
});

export const requestUserError = (error) => ({
  type: USER_INFO_ACTIONS.ERROR,
  error,
});