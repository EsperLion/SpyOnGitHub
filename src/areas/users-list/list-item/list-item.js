import React from 'react';
import PropTypes from 'prop-types';
import { Icon, ICONS } from '../../../components';

import styles from './list-item.module.scss';

export class ListItem extends React.PureComponent {

  render () {
    const { imageUrl, login, link } = this.props;
    return (
      <div className={styles['list-item']} onClick={this.clickItem}>

        <img
          className={styles['list-item__img']}
          src={imageUrl}
          alt="user_avatar"
        />

        <div className={styles['list-item__login']}>
          {login}
        </div>

        <a className={styles['list-item__link']} href={link} title="link to github profile">
          <Icon source={ICONS.GIT_HUB} />
        </a>

      </div>
    );
  }

  clickItem = () => {
    this.props.onClick(this.props.login);
  }

}

ListItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
