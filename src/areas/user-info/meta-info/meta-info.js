import React from 'react';
import { Icon, ICONS } from '../../../components';
import styles from './meta-info.module.scss';

export class MetaInfo extends React.PureComponent {

  render () {
    const { followers, following } = this.props;
    return (
      <div className={styles.container}>
        {this.renderFollowers(followers)}
        {this.renderFollowing(following)}
      </div>
    );
  }

  renderFollowers (followers) {
    if (typeof followers === 'undefined' || followers === null) {
      return <h2>Loading</h2>
    }

    return (
      <div className={styles.subContainer}>
        <h3>Followers</h3>
        <button
          disabled={this.props.followersPage === 1}
          onClick={this.prevFollowersPage}
        >
          prev
        </button>
        <button onClick={this.nextFollowersPage}>
          next
        </button>
        {followers.map((follower) => (
          <div key={follower.id}>
            <span>{follower.login}</span>
            <a href={follower.html_url}>
              GitHub <Icon source={ICONS.GIT_HUB} />
            </a>
          </div>
        ))}
      </div>
    );
  }

  renderFollowing (following) {
    if (typeof following === 'undefined' || following === null) {
      return <h2>Loading</h2>
    }

    return (
      <div className={styles.subContainer}>
        <h3>Following</h3>
        <button
          disabled={this.props.followingPage === 1}
          onClick={this.prevFollowingPage}
        >
          prev
        </button>
        <button onClick={this.nextFollowingPage}>
          next
        </button>
        {following.map((follow) => (
          <div key={follow.id}>
            <span>{follow.login}</span>
            <a href={follow.html_url}>
              GitHub <Icon source={ICONS.GIT_HUB} />
            </a>
          </div>
        ))}
      </div>
    );
  }

  nextFollowersPage = () => this.props.onFollowersPageChange(this.props.followersPage + 1);
  prevFollowersPage = () => this.props.onFollowersPageChange(this.props.followersPage - 1);

  nextFollowingPage = () => this.props.onFollowingPageChange(this.props.followingPage + 1);
  prevFollowingPage = () => this.props.onFollowingPageChange(this.props.followingPage - 1);

}