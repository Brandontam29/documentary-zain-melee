import React from 'react';
// import PropTypes from 'prop-types';
// import classNames from 'classnames';
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';

// import * as AppPropTypes from '../../../lib/PropTypes';
// import { setMenuOpen as setMenuOpenAction } from '../../../actions/siteActions';
import Landing from './sections/Landing';
import Video from './sections/Video';
import styles from '../../../styles/pages/home.scss';

const propTypes = {};

const defaultProps = {};

const HomePage = () => {
    return (
        <div className={styles.container}>
            <Landing />
            <Video />
        </div>
    );
};

HomePage.propTypes = propTypes;
HomePage.defaultProps = defaultProps;

export default HomePage;
