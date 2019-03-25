import React from 'react';
import PropTypes from 'prop-types';
import styles from './icon.module.scss'

export const Icon = ({ source }) => (
  <i className={styles.icon}>
    {source}
  </i>
);

Icon.propTypes = {
  source: PropTypes.node
};