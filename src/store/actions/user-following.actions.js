export const USER_FOLLOWING_ACTIONS = {
  REQUEST: 'USERS_FOLLOWING_REQUEST',
  SUCCESS: 'USERS_FOLLOWING_SUCCESS',
  ERROR: 'USERS_FOLLOWING_ERROR',
};

export const requestUserFollowing = (payload) => ({
  type: USER_FOLLOWING_ACTIONS.REQUEST,
  payload,
});

export const requestUserFollowingSuccess = (payload) => ({
  type: USER_FOLLOWING_ACTIONS.SUCCESS,
  payload,
});

export const requestUserFollowingError = (error) => ({
  type: USER_FOLLOWING_ACTIONS.ERROR,
  error,
});