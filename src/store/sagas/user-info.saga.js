import { call, put, takeLatest } from 'redux-saga/effects';
import {
  USER_INFO_ACTIONS,
  requestUserError,
  requestUserSuccess
} from '../actions';
import { loadUserInfo } from '../../api';

function* userInfoSaga (action) {
  try {
    const { name } = action.payload;
    const response = yield call(loadUserInfo, name);
    yield put(requestUserSuccess(response.data));
  } catch (error) {
    yield put(requestUserError(error));
  }
}

export function* watchUserInfo () {
  yield takeLatest(USER_INFO_ACTIONS.REQUEST, userInfoSaga);
}

