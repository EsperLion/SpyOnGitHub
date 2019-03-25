import { call, put, takeLatest } from 'redux-saga/effects';
import {
  requestUserFollowingError,
  requestUserFollowingSuccess,
  USER_FOLLOWING_ACTIONS,
  USER_INFO_ACTIONS,
} from '../actions';
import { loadUserFollowing } from '../../api';

function* userFollowingSaga (action) {
  try {
    let response = null;
    let name = '';
    let page = 1;
    let perPage = 10;
    if (action.type === USER_INFO_ACTIONS.SUCCESS) {
      name = action.payload.login;
    } else {
      name = action.payload.name;
      page = action.payload.page;
      perPage = action.payload.perPage;
    }
    response = yield call(loadUserFollowing, name, page, perPage);
    yield put(requestUserFollowingSuccess(response.data));
  } catch (error) {
    yield put(requestUserFollowingError(error));
  }
}

export function* watchRequestUserFollowingInfo () {
  yield takeLatest([
    USER_FOLLOWING_ACTIONS.REQUEST,
    USER_INFO_ACTIONS.SUCCESS,
  ], userFollowingSaga);
}
