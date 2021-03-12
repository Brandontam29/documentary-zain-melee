import React from 'react';
// import PropTypes from 'prop-types';
// import classNames from 'classnames';
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';

// import * as AppPropTypes from '../../../lib/PropTypes';
// import { setMenuOpen as setMenuOpenAction } from '../../../actions/siteActions';

import styles from '../../../styles/pages/home-fallback.scss';

const propTypes = {};

const defaultProps = {};

const HomeFallback = () => {
    return (
        <div className={styles.container}>
            <div className={styles.inner}>Loading</div>
        </div>
    );
};

HomeFallback.propTypes = propTypes;
HomeFallback.defaultProps = defaultProps;

export default HomeFallback;
