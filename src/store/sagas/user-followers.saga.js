import { call, put, takeLatest } from 'redux-saga/effects';
import {
  requestUserFollowersSuccess,
  requestUserFollowersError,
  USER_FOLLOWERS_ACTIONS,
  USER_INFO_ACTIONS
} from '../actions';
import { loadUserFollowers } from '../../api';

function* userFollowersSaga (action) {
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
    // TODO parse headers.link to get last page number
    response = yield call(loadUserFollowers, name, page, perPage);
    yield put(requestUserFollowersSuccess(response.data));
  } catch (error) {
    yield put(requestUserFollowersError(error));
  }
}

export function* watchRequestUserFollowersInfo () {
  yield takeLatest([
    USER_FOLLOWERS_ACTIONS.REQUEST,
    USER_INFO_ACTIONS.SUCCESS,
  ], userFollowersSaga);
}