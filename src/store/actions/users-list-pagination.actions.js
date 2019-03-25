export const USERS_LIST_PAGINATION = {
  ADD: 'ADD_PREVIOUS_SINCE_ID',
  DELETE: 'DELETE_PREVIOUS_SINCE_ID',
  CLEAR: 'CLEAR_ALL_IDS',
};

export const addPreviousSinceId = (payload) => ({ type: USERS_LIST_PAGINATION.ADD, payload });
export const deletePreviousSinceId = () => ({ type: USERS_LIST_PAGINATION.DELETE });
export const clearAllIds = () => ({ type: USERS_LIST_PAGINATION.CLEAR });