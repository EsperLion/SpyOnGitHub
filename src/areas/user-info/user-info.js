import React from 'react';
import { MainInfo } from './main-info'
import { MetaInfo } from './meta-info';
import { connect } from 'react-redux';
import {
  requestUser,
  selectUserInfo,
  selectFollowers,
  selectFollowing,
  requestUserFollowers,
  requestUserFollowing,
} from '../../store';
import styles from './user-info.module.scss';

export class UserInfoPresenter extends React.PureComponent {

  state = {
    followersPage: 1,
    followingPage: 1,
  };

  render () {
    const { userInfo, followers, following } = this.props;
    return (
      <div className={styles.container}>
        <MainInfo user={userInfo} />
        <MetaInfo
          followers={followers}
          following={following}
          followersPage={this.state.followersPage}
          followingPage={this.state.followingPage}
          onFollowersPageChange={this.onFollowersPageChange}
          onFollowingPageChange={this.onFollowingPageChange}
        />
      </div>
    );
  }

  componentDidMount () {
    this.props.loadUserInfo(this.props.match.params.login);
  }

  componentDidUpdate (prevProps, prevState) {
    if (this.state.followersPage !== prevState.followersPage) {
      this.loadFollowers();
    }
    if (this.state.followingPage !== prevState.followingPage) {
      this.loadFollowing();
    }
  }

  loadFollowers () {
    this.props.loadFollowersPage(
      this.props.userInfo.login,
      this.state.followersPage,
      10,
    );
  }

  loadFollowing () {
    this.props.loadFollowingPage(
      this.props.userInfo.login,
      this.state.followingPage,
      10,
    );
  }

  onFollowersPageChange = (followersPage) => {
    this.setState({ followersPage });
  }

  onFollowingPageChange = (followingPage) => {
    this.setState({ followingPage });
  }

}

const mapStateToProps = (state) => ({
  userInfo: selectUserInfo(state),
  followers: selectFollowers(state),
  following: selectFollowing(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadUserInfo: (name) => dispatch(requestUser({ name })),
  loadFollowersPage: (name, page, perPage) => dispatch(requestUserFollowers({ name, page, perPage })),
  loadFollowingPage: (name, page, perPage) => dispatch(requestUserFollowing({ name, page, perPage })),
});

export const UserInfo = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserInfoPresenter);