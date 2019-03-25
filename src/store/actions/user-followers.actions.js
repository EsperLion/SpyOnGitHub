export const USER_FOLLOWERS_ACTIONS = {
  REQUEST: 'USERS_FOLLOWERS_REQUEST',
  SUCCESS: 'USERS_FOLLOWERS_SUCCESS',
  ERROR: 'USERS_FOLLOWERS_ERROR',
};

export const requestUserFollowers = (payload) => ({
  type: USER_FOLLOWERS_ACTIONS.REQUEST,
  payload,
});

export const requestUserFollowersSuccess = (payload) => ({
  type: USER_FOLLOWERS_ACTIONS.SUCCESS,
  payload,
});

export const requestUserFollowersError = (error) => ({
  type: USER_FOLLOWERS_ACTIONS.ERROR,
  error,
});