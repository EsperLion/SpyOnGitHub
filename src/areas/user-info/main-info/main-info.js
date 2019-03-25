import React from 'react';
import styles from './main-info.module.scss';

export class MainInfo extends React.PureComponent {

  render () {
    const { user } = this.props;

    if (typeof user === 'undefined') {
      return <h1>Loading...</h1>;
    }

    return (
      <div className={styles['main-info']}>

        <img
          className={styles['main-info__avatar']}
          src={user.avatar_url}
          alt="user avatar"
        />

        <div className={styles['main-info__additional']}>

          {this.renderAdditionalItem('created_at', user)}
          {this.renderAdditionalItem('name', user)}
          {this.renderAdditionalItem('email', user)}
          {this.renderAdditionalItem('blog', user)}
          {this.renderAdditionalItem('location', user)}
          {this.renderAdditionalItem('company', user)}
          {this.renderAdditionalItem('bio', user)}

        </div>

      </div>
    );
  }

  renderAdditionalItem (key, item) {
    if (typeof item[key] === 'undefined' || item[key] === null) {
      return;
    }

    return (
      <div className={styles['additional-item']}>
        <div className={styles['additional-item__name']}>
          {key}:
        </div>
        <div className={styles['additional-item__value']}>
          {item[key]}
        </div>
      </div>
    );
  }

}