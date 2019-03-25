import { all } from 'redux-saga/effects';
import { watchLoadUsers, watchUserInfo, watchRequestUserFollowersInfo, watchRequestUserFollowingInfo } from './sagas';

export function* rootSaga () {
  yield all([
    watchLoadUsers(),
    watchUserInfo(),
    watchRequestUserFollowersInfo(),
    watchRequestUserFollowingInfo(),
  ]);
}