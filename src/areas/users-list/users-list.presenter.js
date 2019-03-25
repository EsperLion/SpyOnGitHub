import React from 'react';
import PropsTypes from 'prop-types';
import { ListItem } from './list-item';
import styles from './users-list.module.scss';

export class UsersListPresenter extends React.PureComponent {

  perPage = 10;

  render () {
    return (
      <div className={styles.list}>

        <div className={styles['list_controls']}>
          <button onClick={this.loadFirst}>
            First
          </button>
          <button onClick={this.loadPrev}>
            Prev
          </button>
          <button onClick={this.loadNext}>
            Next
          </button>
        </div>

        {this.renderList(this.props.usersList)}
      </div>
    );
  }

  componentDidMount () {
    this.props.loadUsers(this.props.lastSinceId, this.perPage);
  }

  loadNext = () => {
    const prevSinceId = this.props.usersList[0].id - 1;
    const lastUserId = this.props.usersList[this.props.usersList.length - 1].id;
    this.props.loadUsers(lastUserId, this.perPage);
    this.props.addPrevId(prevSinceId);
  }

  loadPrev = () => {
    this.props.loadUsers(this.props.lastSinceId, this.perPage);
    this.props.deletePrevId();
  }

  loadFirst = () => {
    this.props.loadUsers(0, this.perPage);
    this.props.clear();
  }

  renderList (usersList) {
    if (typeof usersList === 'undefined' || usersList.length === 0) {
      return '';
    }

    return usersList.map(this.renderListItem);
  }

  renderListItem = (user) => {
    const { id, avatar_url, login, html_url } = user;
    return (
      <ListItem
        key={id}
        imageUrl={avatar_url}
        login={login}
        link={html_url}
        onClick={this.goToUserPage}
      />
    );
  }

  goToUserPage = (name) => {
    this.props.history.push(`/user/${name}`);
  }

}

UsersListPresenter.propTypes = {
  usersList: PropsTypes.array,
  lastSinceId: PropsTypes.number,

  loadUsers: PropsTypes.func.isRequired,
  addPrevId: PropsTypes.func.isRequired,
  deletePrevId: PropsTypes.func.isRequired,
  clear: PropsTypes.func.isRequired,
};