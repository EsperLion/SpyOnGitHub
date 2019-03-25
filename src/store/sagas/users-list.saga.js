import { call, put, takeLatest } from 'redux-saga/effects';
import {
  USER_LIST_ACTIONS,
  requestUsersError,
  requestUsersSuccess
} from '../actions';
import { loadUsersList } from '../../api';

function* usersListSaga (action) {
  try {
    const { since, perPage } = action.payload;
    const response = yield call(loadUsersList, since, perPage);
    yield put(requestUsersSuccess(response.data));
  } catch (error) {
    yield put(requestUsersError(error));
  }
}

export function* watchLoadUsers () {
  yield takeLatest(USER_LIST_ACTIONS.REQUEST, usersListSaga);
}

